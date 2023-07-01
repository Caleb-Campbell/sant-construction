import Link from 'next/link';
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
                <Link href="/home" className="text-white hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li className="mr-4">
                <Link href="/about" className="text-white hover:text-gray-400">
                  About
                </Link>
              </li>
              <li className="mr-4">
                <Link href="/services" className="text-white hover:text-gray-400">
                  Services
                </Link>
              </li>
              <li className="mr-4">
                <Link href="/contact" className="text-white hover:text-gray-400">
                  Contact
                </Link>
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

