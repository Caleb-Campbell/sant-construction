import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 w-full text-center md:mb-0 md:w-1/3 md:text-left">
            <h2 className="text-lg font-bold text-white font-serif">
              Sant Construction and Development LLC
            </h2>
          </div>
          <div className="mb-4 w-full text-center md:mb-0 md:w-1/3">
            <ul className="flex justify-center md:justify-center">
              <li className="mr-4">
                <Link href="/home" className="text-white hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li className="mr-4">
                <Link
                  href="/services"
                  className="text-white hover:text-gray-400"
                >
                  Services
                </Link>
              </li>
              <li className="mr-4">
                <Link href="/about" className="text-white hover:text-gray-400">
                  About
                </Link>
              </li>
              <li className="mr-4">
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full text-center md:w-1/3 md:text-right">
            <p className="text-white">
              © {new Date().getFullYear()} Sant Construction and Development
              LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
