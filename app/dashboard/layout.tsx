"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { faBars, faBox, faCamera, faDashboard, faDownload, faImage, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuIcons = {
    "Dashboard": faDashboard,
    "Studio Foto": faCamera,
    "Sewa Kamera": faImage,
    "Foto Box": faBox,
    "Frame Foto": faImage,
    "Data Pelanggan": faDownload,
  };

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
    } else if (pathname.includes("data-pelanggan")) {
      setSelectedMenu("Data Pelanggan");
    } else {
      setSelectedMenu("Dashboard");
    }
  }, [pathname]); 

  // Mengatur logika menutup sidebar berdasarkan ukuran layar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize(); // Panggil sekali untuk sinkronisasi awal
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-[4.5rem]"
        } bg-gray-900 text-white flex flex-col p-4 transition-all duration-300 ease-in-out min-h-screen`}
      >
        <div className="flex justify-between items-center">
          <h2 className={`text-lg font-semibold transition-opacity duration-300 ${sidebarOpen ? "block" : "hidden"}`}>
            Hallo, Dwisaputra
          </h2>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 focus:outline-none">
            <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} className="w-5" />
          </button>
        </div>
        <nav className="mt-6">
          <ul>
            {["Dashboard", "Studio Foto", "Sewa Kamera", "Foto Box", "Frame Foto", "Data Pelanggan"].map((menu) => (
              <li
                key={menu}
                className={`p-3 rounded-md mb-2 cursor-pointer flex items-center ${
                  selectedMenu === menu ? "bg-blue-600" : "hover:bg-gray-800"
                }`}
                onClick={() => handleMenuClick(menu)}
              >
                <FontAwesomeIcon icon={menuIcons[menu as keyof typeof menuIcons]} className="mr-2 w-5" />
                <span className={`${sidebarOpen ? "block" : "hidden"}`}>{menu}</span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white w-screen h-screen overflow-y-auto pb-32">
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
