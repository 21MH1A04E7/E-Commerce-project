// src/components/Footer.js

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="" className="hover:underline">About</a>
          <a href="" className="hover:underline">Contact</a>
          <a href="" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
