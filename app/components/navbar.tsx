"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Portofolio", path: "/portofolio" },
    { title: "Tentang", path: "/tentang" },
    { title: "Produk", path: "/produk" },
  ];

  // helper untuk cek active: untuk homepage harus exact, lainnya bisa startsWith
  const isActive = (path: string) =>
    path === "/" ? pathname === path : pathname.startsWith(path);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/img/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-semibold text-gray-900">
              Studio Foto Singaraja
            </span>
          </Link>

          {/* Main Menu - Centered */}
          <div className="hidden md:flex flex-grow justify-center items-center gap-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  transition
                  ${isActive(item.path)
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-gray-900"}
                `}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Right-side menu */}
          <div className="hidden md:flex items-center gap-x-4">
            <Link
              href={user ? "/keranjang" : "/auth/login"}
              className="text-gray-700 hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6" />
            </Link>

            {!user ? (
              <>
                <Link href="/auth/register" className="text-gray-700 hover:text-gray-900">
                  Daftar
                </Link>
                <Link href="/auth/login" className="text-gray-700 hover:text-gray-900">
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link href="/profil">
                  <Image
                    src={user.avatar}
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full border object-cover"
                  />
                </Link>
                <button onClick={logout} className="text-gray-700 hover:text-gray-900">
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-start space-y-2 py-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`
                    block
                    transition
                    ${isActive(item.path)
                      ? "text-blue-600 font-bold"
                      : "text-gray-700 hover:text-gray-900"}
                  `}
                >
                  {item.title}
                </Link>
              ))}

              <hr className="border w-full" />

              <Link
                href={user ? "/keranjang" : "/auth/login"}
                className="block text-gray-700 hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" /> Keranjang
              </Link>

              {!user ? (
                <>
                  <Link href="/auth/register" className="block text-gray-700 hover:text-gray-900">
                    Daftar
                  </Link>
                  <Link href="/auth/login" className="block text-gray-700 hover:text-gray-900">
                    Login
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/profil" className="block text-gray-700 hover:text-gray-900">
                    Profil
                  </Link>
                  <button onClick={logout} className="block text-gray-700 hover:text-gray-900">
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
