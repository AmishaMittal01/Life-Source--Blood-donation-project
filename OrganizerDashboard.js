import React from "react";
import { useNavigate } from "react-router-dom";

const OrganizerDashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Create New Camp",
      desc: "Schedule a new blood donation drive",
      link: "/organizer/create-camp",
    },
    {
      title: "View All Camps",
      desc: "Manage and track all created camps",
      link: "/organizer/camps",
    },
    {
      title: "Registrations",
      desc: "Review donor registrations for each camp",
      link: "/organizer/registrations",
    },
    {
      title: "Inventory Overview",
      desc: "Monitor available blood units",
      link: "/organizer/inventory",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff5f5] p-10">
      <h1 className="text-4xl font-bold text-red-600 text-center mb-10">
        Organizer Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => navigate(card.link)}
            className="cursor-pointer bg-white shadow-md rounded-xl p-6 border border-red-200 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold text-red-600">{card.title}</h2>
            <p className="text-gray-700 mt-2">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizerDashboard;
