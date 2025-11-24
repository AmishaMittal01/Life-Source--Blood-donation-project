import React from "react";

const MyRegistrations = () => {
  const sample = [
    { camp: "Winter Drive", date: "2025-12-01", status: "Registered" },
    { camp: "TechFest Donation", date: "2025-09-14", status: "Donated" }
  ];
useEffect(() => {
  const donor = JSON.parse(localStorage.getItem("donor"));

  fetch(`http://localhost:5000/donor/registrations/${donor.donor_id}`)
    .then(res => res.json())
    .then(setRegs);
}, []);

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-red-600 mb-6">My Registrations</h2>

      <div className="space-y-4">
        {sample.map((r, i) => (
          <div key={i} className="bg-[#fff1f1] p-4 rounded-xl shadow">
            <p className="font-semibold">{r.camp}</p>
            <p className="text-gray-700">Date: {r.date}</p>
            <p className="text-sm mt-1 text-red-600">Status: {r.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRegistrations;
