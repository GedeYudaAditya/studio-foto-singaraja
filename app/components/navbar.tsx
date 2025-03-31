"use client";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/dashboard");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isAdminPage) return null;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <Image src="/img/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-semibold text-gray-900">
              Studio Foto Singaraja
            </span>
          </a>

          {/* Main Menu - Centered */}
          <div className="hidden md:flex flex-grow justify-center items-center gap-x-6">
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
          </div>

          {/* Right-side menu: Cart, Avatar, Logout */}
          <div className="hidden md:flex items-center gap-x-4">
            <a href={!user ? "/auth/login" : "/keranjang"}>
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="w-6 h-6 text-gray-700 hover:text-gray-900"
              />
            </a>

            {!user ? (
              <>
                <a href="/auth/register" className="text-gray-700 hover:text-gray-900">
                  Daftar
                </a>
                <a href="/auth/login" className="text-gray-700 hover:text-gray-900">
                  Login
                </a>
              </>
            ) : (
              <>
                <a href="/profil">
                  <Image
                    src={user.avatar}
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full border object-cover"
                  />
                </a>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 transition"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-start space-y-2 py-2">
              {[
                { title: "Home", path: "/" },
                { title: "Portofolio", path: "/portofolio" },
                { title: "Tentang", path: "/tentang" },
                { title: "Produk", path: "/produk" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="block text-gray-700 hover:text-gray-900"
                >
                  {item.title}
                </a>
              ))}

              <hr className="border w-full"/>

              <a href={!user ? "/auth/login" : "/keranjang"} className="block text-gray-700">
                <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />{" "}
                Keranjang
              </a>

              {!user ? (
                <>
                  <a href="/auth/register" className="block text-gray-700">
                    Daftar
                  </a>
                  <a href="/auth/login" className="block text-gray-700">
                    Login
                  </a>
                </>
              ) : (
                <>
                  <a href="/profil" className="block text-gray-700">
                    Profil
                  </a>
                  <button onClick={logout} className="block text-gray-700">
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
