import React from "react";
import { Route, Routes } from "react-router-dom";
import SapSupportTeam from "./Components/SapSupportTeam";
import BusinessUser from "./Components/BusinessUser";

import LandingPage from "./Components/LandingPage";
import VendorCustomerPage from "./Components/VendorCustomerPage";
import Chatbot from "./Components/Chatbot/Chatbot";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/vendor-customer" element={<VendorCustomerPage />} />
      <Route path="/sap-support" element={<SapSupportTeam />} />
      <Route path="/business-user" element={<BusinessUser />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  );
};

export default App;
