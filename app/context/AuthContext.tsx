"use client"
import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

// Buat Context
const AuthContext = createContext(null);

// Provider untuk menyimpan status login
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Ambil status login dari localStorage atau API
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: any) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    Swal.fire("Berhasil masuk", `Selamat datang, ${userData.name}!`, "success");
  };

  const logout = () => {
    Swal.fire({
      title: "Yakin ingin keluar?",
      text: "Kamu akan keluar dari sesi saat ini.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, keluar!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        setUser(null);
        Swal.fire("Berhasil keluar", "Sampai jumpa lagi!", "success").then(() => {
          window.location.href = "/";
        });
      }
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook untuk menggunakan auth context
export const useAuth = () => useContext(AuthContext);
