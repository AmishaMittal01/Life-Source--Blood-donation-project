import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CampQuestionnaire = () => {
  const { camp_id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    allergies: "",
    medications: "",
    recentIllness: "",
    chronicDiseases: "",
    lastMeal: "",
    sleepHours: "",
    alcoholLast24h: "",
    tattooLast6Months: "",
    travelHistory: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Questionnaire Submitted:", form);

    // BACKEND INTEGRATION HERE (later)
    // axios.post(`/api/camps/register/${camp_id}`, form)

    alert("Registration submitted successfully!");
    navigate("/donor/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#fff5f5] p-6 flex justify-center">
      <div className="bg-white w-full max-w-2xl p-8 rounded-xl shadow-xl">

        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          Pre-Donation Questionnaire
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Camp ID: <strong>{camp_id}</strong>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <textarea
            name="allergies"
            placeholder="Do you have any allergies?"
            className="p-3 border rounded-lg bg-gray-50"
            value={form.allergies}
            onChange={handleChange}
            required
          />

          <textarea
            name="medications"
            placeholder="Are you currently taking any medications?"
            className="p-3 border rounded-lg bg-gray-50"
            value={form.medications}
            onChange={handleChange}
            required
          />

          <textarea
            name="recentIllness"
            placeholder="Any illness in the last 2 weeks?"
            className="p-3 border rounded-lg bg-gray-50"
            value={form.recentIllness}
            onChange={handleChange}
            required
          />

          <textarea
            name="chronicDiseases"
            placeholder="Any chronic diseases?"
            className="p-3 border rounded-lg bg-gray-50"
            value={form.chronicDiseases}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="lastMeal"
            placeholder="When was your last meal?"
            className="p-3 border rounded-lg bg-gray-50"
            value={form.lastMeal}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="sleepHours"
            placeholder="How many hours did you sleep last night?"
            className="p-3 border rounded-lg bg-gray-50"
            value={form.sleepHours}
            onChange={handleChange}
            required
          />

          <select
            name="alcoholLast24h"
            className="p-3 border rounded-lg bg-gray-50"
            value={form.alcoholLast24h}
            onChange={handleChange}
            required
          >
            <option value="">Alcohol in last 24 hours?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <select
            name="tattooLast6Months"
            className="p-3 border rounded-lg bg-gray-50"
            value={form.tattooLast6Months}
            onChange={handleChange}
            required
          >
            <option value="">Got a tattoo in the last 6 months?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <textarea
            name="travelHistory"
            placeholder="Have you traveled internationally recently?"
            className="p-3 border rounded-lg bg-gray-50"
            value={form.travelHistory}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="mt-4 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Submit & Register
          </button>
        </form>

      </div>
    </div>
  );
};

export default CampQuestionnaire;
