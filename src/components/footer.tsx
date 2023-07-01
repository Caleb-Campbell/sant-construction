import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-white text-lg font-bold">Company Name</h2>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <ul className="flex justify-center md:justify-center">
              <li className="mr-4">
                <a href="#" className="text-white hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-white hover:text-gray-400">
                  About
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-white hover:text-gray-400">
                  Services
                </a>
              </li>
              <li className="mr-4">
                <a href="#" className="text-white hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p className="text-white">© {new Date().getFullYear()} Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

