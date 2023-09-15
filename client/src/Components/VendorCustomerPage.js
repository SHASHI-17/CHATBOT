import React from "react";
import Navbar from "./Navbar";
import Chatbot from "./Chatbot/Chatbot";

const VendorCustomerPage = () => {
  return (
    <div className="w-full md:w-10/12 text-center mx-auto">
      <Navbar />
      <div className="text-center mt-16 bg-[#92cdef] flex flex-col justify-center items-center p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold font-sans mb-4 text-[#333]">
          Vendor/Customer
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4">
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              PO Status Enquiry
            </h2>
          </div>
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Pricing and Availability
            </h2>
          </div>
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Shipment information
            </h2>
          </div>
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Invoice processing status
            </h2>
          </div>
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Sales order status
            </h2>
          </div>
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Vendor and Customer master update request
            </h2>
          </div>
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Submit an invoice
            </h2>
          </div>
          <div className="bg-white cursor-pointer p-4 md:p-6 rounded-lg shadow-md hover:shadow-black transform transition-transform hover:scale-105 duration-500 flex flex-col justify-center items-center ease-in-out">
            <h2 className="text-lg md:text-xl font-sans font-semibold text-center">
              Submit a quote
            </h2>
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default VendorCustomerPage;
