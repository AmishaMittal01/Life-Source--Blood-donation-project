// ✅ DONOR.JS

// ----------------------------
// ✅ CHECK LOGIN
// ----------------------------
const donor = JSON.parse(localStorage.getItem("donor"));

// If user tries to access donor pages without login → redirect
if (!donor && location.pathname.includes("donor-")) {
  window.location.href = "donor-login.html";
}

// ----------------------------
// ✅ SHOW DONOR NAME ON DASHBOARD
// ----------------------------
if (donor && document.getElementById("welcomeText")) {
  document.getElementById("welcomeText").innerText = `Welcome, ${donor.name} 👋`;
}

// ----------------------------
// ✅ LOAD UPCOMING CAMPS (Dashboard)
// ----------------------------
async function loadUpcomingCamps() {
  // If this page doesn't have upcomingCamps section → skip
  if (!document.getElementById("upcomingCamps")) return;

  try {
    const res = await fetch("http://localhost:5001/api/camps");
    const camps = await res.json();

    const container = document.getElementById("upcomingCamps");

    // If no camps found
    if (!camps.length) {
      container.innerHTML = `<p class="text-slate-600">No camps scheduled.</p>`;
      return;
    }

    // Show only first 3
    container.innerHTML = camps
      .slice(0, 3)
      .map(
        (camp) => `
        <div class="border border-red-200 p-3 rounded-lg bg-red-50">
          <b class="text-slate-800">${camp.camp_name}</b><br>
          <span class="text-slate-600 text-sm">
            📅 ${camp.date} — ⏰ ${camp.start_time}<br>
            📍 ${camp.location}
          </span>
        </div>`
      )
      .join("");

  } catch (err) {
    console.error("Error loading camps:", err);
  }
}

// Run this automatically on page load
loadUpcomingCamps();

// ----------------------------
// ✅ LOGOUT FUNCTION
// ----------------------------
function logoutDonor() {
  localStorage.removeItem("donor");
  window.location.href = "donor-login.html";
}

