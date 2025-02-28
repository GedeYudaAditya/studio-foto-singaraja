"use client";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <Image
              src="/img/logo.png"
              alt="Logo"
              className="h-10 w-10"
                width={40}
                height={40}
            />
            <span className="text-xl font-semibold text-gray-900">
              Studio Foto Singaraja
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "Portofolio", "Tentang", "Produk"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                {item}
              </a>
            ))}
            <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900" />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Daftar
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
          <a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition md:hidden"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="text-gray-700 cursor-pointer hover:text-gray-900" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-4 flex flex-col space-y-2">
            {["Home", "Portofolio", "Tentang", "Produk"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block text-gray-700 hover:text-gray-900 py-2"
              >
                {item}
              </a>
            ))}
            <a href="#" className="block text-gray-700 hover:text-gray-900 py-2">
              Daftar
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 py-2"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
