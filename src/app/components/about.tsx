"use client"
import Image from "next/image"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt,  faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-center min-h-screen p-6 ">
      {/* Container for the form and contact details */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full md:flex">
        
        {/* Left Section: Contact Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Get In Touch</h2>
          
          {/* Form Fields */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
              ></textarea>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-teal-600">
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right Section: Contact Details */}
        <div className="w-full md:w-1/2 bg-green-50 p-8 flex flex-col items-center justify-center">
        
          <Image
            src="/images/code.png" 
            alt="Contact Illustration"
            height={500}
            width={500}
            className="w-32 h-32 mb-4"
          />
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-teal-600" />
              <span>Karachi,Pakistan</span>
            </li>
           
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-teal-600" />
              <span>bismanaeem.bs1@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
      
     