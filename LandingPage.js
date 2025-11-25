import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import heroImage from "../assets/hero-illustration.png";
import registerImg from "../assets/register.png";
import joincampImg from "../assets/joincamp.png";
import savelivesImg from "../assets/savelives.png";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const openRolePopup = (role) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  const handleChoice = (type) => {
    setShowModal(false);
    if (type === "login") {
      navigate("/login", { state: { role: selectedRole } });
    } else {
      navigate("/register", { state: { role: selectedRole } });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#fff5f5]">

      {/* 🔹 TOP INFO BAR */}
      <div className="w-full bg-red-600 text-white text-center py-2 text-sm">
        LifeSource — A Smart Blood Donation & Camp Management System
      </div>

      {/* 🔹 CLEAN NAVBAR (ONLY LOGO) */}
      <nav className="w-full bg-white shadow-md px-10 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-red-600">LifeSource</h1>
      </nav>

      {/* 🔹 HERO SECTION */}
      <section className="flex flex-col md:flex-row items-start justify-between px-10 md:px-20 py-12">

        {/* LEFT TEXT */}
        <div className="md:w-1/2 mt-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Donate Blood, Save Lives <br />
            <span className="text-red-600">Join LifeSource Today</span>
          </h2>

          <p className="text-gray-600 mt-4 text-lg max-w-lg">
            A smart and secure platform for donors, organizers, and doctors to streamline
            blood donation camps and improve healthcare impact.
          </p>

          {/* ROLE BUTTONS NOW IN HERO (NOT NAVBAR) */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <button
              onClick={() => openRolePopup("donor")}
              className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Donor
            </button>

            <button
              onClick={() => openRolePopup("doctor")}
              className="border border-red-600 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition"
            >
              Doctor
            </button>

            <button
              onClick={() => openRolePopup("organizer")}
              className="border border-red-600 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition"
            >
              Organizer
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={heroImage}
            alt="LifeSource Hero Illustration"
            className="w-[55%] md:w-[60%] max-w-md rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* 🔹 WHY CHOOSE SECTION (unchanged) */}
      <section className="px-10 md:px-20 py-20 bg-white">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose LifeSource?
        </h3>

        <div className="flex overflow-x-auto gap-6 pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth">

          {/* Card 1 */}
          <div className="min-w-[90%] md:min-w-[55%] lg:min-w-[40%] bg-[#fff1f1] rounded-2xl shadow p-8 snap-center">
            <img src={registerImg} alt="camp scheduling"
              className="w-full h-56 object-cover rounded-xl mb-6 shadow"
            />
            <h4 className="text-2xl font-semibold text-red-600">Smart Camp Scheduling</h4>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Organizers can create, edit, and manage donation camps with real-time
              capacity monitoring and doctor assignments.
            </p>
          </div>

          {/* Card 2 */}
          <div className="min-w-[90%] md:min-w-[55%] lg:min-w-[40%] bg-[#fff1f1] rounded-2xl shadow p-8 snap-center">
            <img src={joincampImg} alt="donor tracking"
              className="w-full h-56 object-cover rounded-xl mb-6 shadow"
            />
            <h4 className="text-2xl font-semibold text-red-600">Efficient Donor Tracking</h4>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Donors can track past donations, upcoming drives, eligibility, and
              registrations effortlessly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="min-w-[90%] md:min-w-[55%] lg:min-w-[40%] bg-[#fff1f1] rounded-2xl shadow p-8 snap-center">
            <img src={savelivesImg} alt="doctor dashboard"
              className="w-full h-56 object-cover rounded-xl mb-6 shadow"
            />
            <h4 className="text-2xl font-semibold text-red-600">Doctor Screening Dashboard</h4>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Doctors can update eligibility, record vitals, and maintain secure medical
              records efficiently.
            </p>
          </div>

        </div>
      </section>

      {/* 🔹 MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-xl w-[90%] max-w-sm text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 capitalize">
              Continue as {selectedRole}
            </h2>

            <p className="text-gray-600 mb-6">Choose how you want to proceed</p>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleChoice("login")}
                className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Login
              </button>

              <button
                onClick={() => handleChoice("register")}
                className="border border-red-600 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-50 transition"
              >
                Register
              </button>
            </div>

            <button
              className="mt-6 text-gray-500 hover:underline"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default LandingPage;
