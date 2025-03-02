"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { faBox, faCamera, faDashboard, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  // Menentukan menu berdasarkan URL saat pertama kali dimuat
  useEffect(() => {
    if (pathname.includes("studio-foto")) {
      setSelectedMenu("Studio Foto");
    } else if (pathname.includes("sewa-kamera")) {
      setSelectedMenu("Sewa Kamera");
    } else if (pathname.includes("foto-box")) {
      setSelectedMenu("Foto Box");
    } else if (pathname.includes("frame-foto")) {
      setSelectedMenu("Frame Foto");
    } else {
      setSelectedMenu("Dashboard");
    }
  }, [pathname]); // Hanya dijalankan ketika pathname berubah

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
    if (menu === "Dashboard") {
      router.push("/dashboard");
    } else {
      router.push(`/dashboard/${menu.toLowerCase().replace(" ", "-")}`);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4">
        <h2 className="text-lg font-semibold">Hallo, Dwisaputra</h2>
        <nav className="mt-6">
          <ul>
            {["Dashboard", "Studio Foto", "Sewa Kamera", "Foto Box", "Frame Foto"].map((menu) => (
              <li
                key={menu}
                className={`p-3 rounded-md mb-2 cursor-pointer flex items-center ${
                  selectedMenu === menu ? "bg-blue-600" : "hover:bg-gray-800"
                }`}
                onClick={() => handleMenuClick(menu)}
              >
                <FontAwesomeIcon
                  icon={
                    menu === "Dashboard"
                      ? faDashboard
                      : menu === "Studio Foto"
                      ? faCamera
                      : menu === "Sewa Kamera"
                      ? faImage
                      : menu === "Foto Box"
                      ? faBox
                      : faImage
                  }
                  className="mr-2 w-5"
                />
                {menu}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white w-screen">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Studio Foto Singaraja</h1>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md">Logout</button>
          </div>

          {/* Bagian yang bisa diisi oleh halaman lain */}
          {children}
        </div>

        {/* Footer */}
        <footer className="mt-6 p-6 fixed bottom-0 w-full bg-gray-200 py-4">
          <p>&copy; 2024 Studio Foto Singaraja. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
