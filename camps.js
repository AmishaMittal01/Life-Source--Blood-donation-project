// ✅ CAMPS.JS — Shows all camps & lets donor select one

// Get logged-in donor (to make sure the user is valid)
const donor = JSON.parse(localStorage.getItem("donor"));

if (!donor) {
  // If someone tries to open this page without login, redirect
  window.location.href = "donor-login.html";
}

// ✅ LOAD ALL CAMPS
async function loadCamps() {
  try {
    const res = await fetch("http://localhost:5001/api/camps");
    const camps = await res.json();

    const container = document.getElementById("campsContainer");

    if (!camps.length) {
      container.innerHTML = `<p class="text-slate-600 text-center col-span-2">No camps found.</p>`;
      return;
    }

    // ✅ Display cards
    container.innerHTML = camps
      .map(
        (camp) => `
      <div class="bg-white p-6 rounded-xl shadow-lg border border-red-200">
        <h3 class="text-xl font-bold text-slate-800">${camp.camp_name}</h3>
        <p class="text-slate-600 mt-1">📍 ${camp.location}</p>

        <p class="mt-2 text-slate-700 text-sm">
          📅 ${camp.date}<br>
          ⏰ ${camp.start_time} - ${camp.end_time}
        </p>

        <button onclick='selectCamp(${JSON.stringify(camp).replace(/"/g, "&quot;")})'
          class="mt-4 bg-red-600 w-full text-white py-2 rounded-full shadow hover:bg-red-700">
          Register
        </button>
      </div>`
      )
      .join("");
  } catch (err) {
    console.error(err);
    alert("Error loading camps");
  }
}

// ✅ WHEN DONOR CLICKS REGISTER
function selectCamp(camp) {
  // Save selected camp for next page
  localStorage.setItem("selectedCamp", JSON.stringify(camp));

  // Redirect to questionnaire
  window.location.href = "donor-questionnaire.html";
}

// ✅ Run automatically when page loads
loadCamps();

