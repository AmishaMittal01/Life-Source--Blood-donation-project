import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SelectRole from "./pages/SelectRole";   // ✅ Correct import
import DonorDashboard from "./pages/donor/DonorDashboard";
import UpcomingCamps from "./pages/UpcomingCamps";
import CampRegister from "./pages/CampRegister";
import CampQuestionnaire from "./pages/CampQuestionnaire";
import DonorProfile from "./pages/donor/DonorProfile";
import DonationHistory from "./pages/donor/DonationHistory";
import OrganizerDashboard from "./pages/OrganizerDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/select-role" element={<SelectRole />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donor/camps" element={<UpcomingCamps />} />
        <Route path="/donor/camps/:campId" element={<CampRegister />} />
        <Route path="/donor/camps/:campId" element={<CampRegister />} />
<Route path="/donor/register-camp/:camp_id" element={<CampQuestionnaire />} />
<Route path="/donor/dashboard" element={<DonorDashboard />} />
<Route path="/donor/history" element={<DonationHistory />} />
<Route path="/donor/profile" element={<DonorProfile />} />
<Route path="/donor/upcoming-camps" element={<UpcomingCamps />} />
<Route path="/organizer/dashboard" element={<OrganizerDashboard />} />


        {/* Add dashboards once they exist */}
        {/* <Route path="/donor/dashboard" element={<DonorDashboard />} /> */}
        {/* <Route path="/doctor/dashboard" element={<DoctorDashboard />} /> */}
        {/* <Route path="/organizer/dashboard" element={<OrganizerDashboard />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
