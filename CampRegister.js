import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const CampRegister = () => {
  const { campId } = useParams();
  const navigate = useNavigate();

  // TEMP DATA — later fetch from backend using campId
  const camp = {
    id: campId,
    name: "Main Auditorium Blood Camp",
    date: "2025-02-18",
    time: "10:00 AM - 4:00 PM",
    location: "Campus Auditorium",
    doctor: "Dr. Rahul Sharma",
    capacity: 50,
    registered: 18,
  };

  return (
    <div className="p-10 min-h-screen bg-[#fff5f5]">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8">
        <h2 className="text-3xl font-bold text-red-600">{camp.name}</h2>

        <p className="mt-2 text-gray-700">📍 {camp.location}</p>
        <p className="text-gray-700">📅 {camp.date}</p>
        <p className="text-gray-700">⏰ {camp.time}</p>
        <p className="text-gray-700">👨‍⚕️ Doctor: {camp.doctor}</p>
        <p className="text-gray-700">
          🩸 Slots: {camp.registered}/{camp.capacity}
        </p>

        <button
          onClick={() => navigate(`/donor/camps/${campId}/questionnaire`)}
          className="mt-6 w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
        >
          Proceed to Medical Questionnaire
        </button>
      </div>
    </div>
  );
};

export default CampRegister;
