"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md sticky w-full z-10">
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
          <div className="hidden md:flex items-center gap-x-6">
            {[
              { title: "Home", path: "/" },
              { title: "Portofolio", path: "/portofolio" },
              { title: "Tentang", path: "/tentang" },
              { title: "Produk", path: "/produk" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="text-gray-700 hover:text-gray-900 transition"
              >
                {item.title}
              </a>
            ))}

            {/* Keranjang Belanja */}
            <a href={!user ? "/auth/login" : "/keranjang"} className="text-gray-700 hover:text-gray-900 transition">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-900"
              />
            </a>

            {/* Avatar atau Login/Register */}
            {!user ? (
              <>
                <a
                  href="/auth/register"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Daftar
                </a>
                <a
                  href="/auth/login"
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  Login
                </a>
              </>
            ) : (
              <>
              <div className="flex items-center">
                {user.avatar ? (
                  <a href="/profil">
                    <Image
                      src={user.avatar}
                      alt="Avatar"
                      width={50}
                      height={50}
                      className="rounded-full border"
                      style={{ width: "40px", height: "40px" , objectFit: "cover" }}
                    />
                  </a>
                ) : (
                  <a href="/profil" className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full text-gray-700 font-bold">
                    {user.username.charAt(0).toUpperCase()}
                  </a>
                )}
              </div>
              <div className="flex items-center">
                <button onClick={logout} className="text-gray-700 hover:text-gray-900 transition">
                  Logout
                </button>
              </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
