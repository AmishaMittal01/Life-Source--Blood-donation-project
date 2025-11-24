import React from "react";

const DonationHistory = () => {
  const sample = [
    { date: "2025-05-10", camp: "College Annual Drive", units: 1 },
    { date: "2024-12-15", camp: "Blood Awareness Week", units: 1 }
  ];
useEffect(() => {
  const donor = JSON.parse(localStorage.getItem("donor"));

  fetch(`http://localhost:5000/donor/donations/${donor.donor_id}`)
    .then(res => res.json())
    .then(setHistory);
}, []);

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-red-600 mb-6">Donation History</h2>

      <div className="space-y-4">
        {sample.map((d, i) => (
          <div key={i} className="bg-[#fff1f1] p-4 rounded-xl shadow">
            <p className="font-semibold">{d.camp}</p>
            <p className="text-gray-700">Date: {d.date}</p>
            <p className="text-gray-600">Units: {d.units}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationHistory;
