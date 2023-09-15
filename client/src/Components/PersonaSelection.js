import React from "react";
import { Link } from "react-router-dom";
import bu from "../Assets/Business User.png";
import sss from "../Assets/sap-support-service.jpg";
import vender from "../Assets/vender.jpg";

const PersonaSelection = () => {
  return (
    <div className="text-center md:h-[500px] bg-[#92cdef]">
      <h2 className="text-3xl font-bold font-sans p-4 text-[#333]">
        Select your persona
      </h2>
      <div className="flex flex-col md:flex-row justify-center p-4">
        <Link to="/vendor-customer" className="mx-2 flex-grow">
          <div className="border p-4 bg-white rounded-lg shadow-md hover:shadow-black flex flex-col justify-around items-center md:h-[350px] transform transition-transform hover:scale-105 hover:shadow-lg duration-500 ease-in-out">
            <h3 className="text-2xl font-sans font-semibold text-[#333]">
              Vendor/Customer
            </h3>
            <img
              className="max-h-40 w-auto flex items-center justify-center"
              src={vender}
              alt="Vendor/Customer"
            />
          </div>
        </Link>
        <Link to="/sap-support" className="mx-2 flex-grow mt-4 md:mt-0">
          <div className="border p-4 bg-white rounded-lg shadow-md hover:shadow-black flex flex-col justify-around items-center md:h-[350px] transform transition-transform hover:scale-105 hover:shadow-lg duration-500 ease-in-out">
            <h3 className="text-2xl font-sans font-semibold text-[#333]">
              SAP Support Team
            </h3>
            <img
              className="max-h-40 w-auto flex items-center justify-center"
              src={sss}
              alt="SAP Support Team"
            />
          </div>
        </Link>
        <Link to="/business-user" className="mx-2 flex-grow mt-4 md:mt-0">
          <div className="border p-4 bg-white rounded-lg shadow-md hover:shadow-black flex flex-col justify-around items-center md:h-[350px] transform transition-transform hover:scale-105 hover:shadow-lg duration-500 ease-in-out">
            <h3 className="text-2xl font-sans font-semibold text-[#333]">
              Business User
            </h3>
            <img
              className="max-h-40 w-auto flex items-center justify-center"
              src={bu}
              alt="Business User"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PersonaSelection;
