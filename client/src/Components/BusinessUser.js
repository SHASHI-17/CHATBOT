import React from "react";
import Navbar from "./Navbar";
import Chatbot from "./Chatbot/Chatbot";

const BusinessUser = () => {
  return (
    <div className="w-full md:w-10/12 text-center mx-auto">
      <Navbar />
      <div className="text-center mt-16 bg-[#92cdef] flex flex-col justify-center items-center p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold font-sans mb-4 text-[#333]">
          Business User
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4">
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Sales Dashboard
            </h2>
          </div>
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Order History
            </h2>
          </div>
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Product Catalog
            </h2>
          </div>
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Customer Account Management
            </h2>
          </div>
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Order Placement and Tracking
            </h2>
          </div>
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Return and Refund Requests
            </h2>
          </div>
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Account Statements and Invoices
            </h2>
          </div>
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Quote Generation
            </h2>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Support and Contact Information
            </h2>
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default BusinessUser;
