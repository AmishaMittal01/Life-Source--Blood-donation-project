// ✅ DOCTOR.JS

// ------------------------------------
// ✅ CHECK LOGIN
// ------------------------------------
const doctor = JSON.parse(localStorage.getItem("doctor"));

if (!doctor && location.pathname.includes("doctor-")) {
  window.location.href = "doctor-login.html";
}

// ------------------------------------
// ✅ SHOW DOCTOR NAME ON DASHBOARD
// ------------------------------------
if (doctor && document.getElementById("doctorWelcome")) {
  document.getElementById("doctorWelcome").innerText = `Welcome, Dr. ${doctor.name} 👋`;
}

// ------------------------------------
// ✅ LOAD DOCTOR'S ASSIGNED CAMPS
// ------------------------------------
async function loadDoctorCamps() {
  // If this page doesn't have doctorCamps container → skip
  if (!document.getElementById("doctorCamps")) return;

  try {
    const res = await fetch("http://localhost:5001/api/camps");
    const camps = await res.json();

    const container = document.getElementById("doctorCamps");

    // Filter only the camps assigned to this doctor
    const myCamps = camps.filter(camp => camp.doctor_id === doctor.doctor_id);

    if (!myCamps.length) {
      container.innerHTML = `<p class="text-slate-600">No camps assigned yet.</p>`;
      return;
    }

    // Render cards
    container.innerHTML = myCamps.map(camp => `
      <div class="bg-white p-6 rounded-xl shadow-lg border border-red-200 flex justify-between items-center">
        <div>
          <h3 class="text-xl font-bold text-slate-800">${camp.camp_name}</h3>
          <p class="text-slate-600 mt-1">${camp.location}</p>
          <p class="mt-2 text-slate-700 text-sm">
            📅 ${camp.date} <br>
            ⏰ ${camp.start_time} - ${camp.end_time}
          </p>
        </div>

        <button onclick='openCampRegistrations(${JSON.stringify(camp).replace(/"/g, "&quot;")})'
          class="bg-red-600 text-white px-4 py-2 rounded-full text-sm shadow hover:bg-red-700">
          View Registrations
        </button>
      </div>
    `).join("");

  } catch (err) {
    console.error("Error loading doctor camps:", err);
  }
}

// Auto-run on dashboard
loadDoctorCamps();

// ------------------------------------
// ✅ WHEN DOCTOR CLICKS "VIEW REGISTRATIONS"
// ------------------------------------
function openCampRegistrations(camp) {
  localStorage.setItem("selectedCamp", JSON.stringify(camp));
  window.location.href = "doctor-registrations.html";
}

// ------------------------------------
// ✅ LOAD CAMP REGISTRATIONS PAGE
// ------------------------------------
async function loadRegistrations() {
  // If this isn't the registrations page → skip
  if (!location.pathname.includes("doctor-registrations")) return;

  const camp = JSON.parse(localStorage.getItem("selectedCamp"));

  if (!camp) {
    alert("No camp selected!");
    window.location.href = "doctor-dashboard.html";
    return;
  }

  // Show camp details
  document.getElementById("campTitle").innerText = camp.camp_name;
  document.getElementById("campDetails").innerText =
    `${camp.location} • ${camp.date} • ${camp.start_time} - ${camp.end_time}`;

  try {
    const res = await fetch(
      `http://localhost:5001/api/camps/${camp.camp_id}/registrations`
    );
    const regs = await res.json();

    const tbody = document.getElementById("registrationsBody");

    if (!regs.length) {
      tbody.innerHTML =
        `<tr><td colspan="4" class="py-3 text-slate-500 text-center">No registrations yet.</td></tr>`;
      return;
    }

    // Render each registered donor
    tbody.innerHTML = regs.map(r => `
      <tr class="border-b">
        <td class="py-2">${r.donor_name}</td>
        <td class="py-2">${r.blood_group || "-"}</td>
        <td class="py-2 font-medium">${r.status}</td>
        <td class="py-2 text-sm text-slate-600">Screening auto-recorded ✅</td>
      </tr>
    `).join("");

  } catch (err) {
    console.error("Error loading registrations:", err);
  }
}

// Auto-run if on registrations page
loadRegistrations();

// ------------------------------------
// ✅ LOGOUT FUNCTION
// ------------------------------------
function logoutDoctor() {
  localStorage.removeItem("doctor");
  window.location.href = "doctor-login.html";
}
