import React from "react";
import Navbar from "./Navbar";
import PersonaSelection from "./PersonaSelection";
import Chatbot from "./Chatbot/Chatbot";

const LandingPage = () => {
  return (
    <div className=" w-10/12 text-center mx-auto ">
      <Navbar />
      <h1 className="text-4xl font-bold font-sans mt-2 p-6">
        Welcome to AI Auto Pilot for SAP
      </h1>
      <PersonaSelection />
      < Chatbot />
    </div>
  );
};

export default LandingPage;
