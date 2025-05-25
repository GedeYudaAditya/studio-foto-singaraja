"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

const AuthPage = ({ type }: { type: "login" | "register" }) => {
  const { login } = useAuth();
  const router = useRouter();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();

    // Contoh data user setelah login
    const userData = { name:"Komang Teguh Widiadinata", username: "User123", email: "user@example.com", avatar: "/img/profil/avatar.png" };
        
    
    // Redirect ke halaman home
    if (type === "login"){
      login(userData);
      router.push("/");
    } else {
      router.push("/auth/login");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <div className="flex flex-col items-center">
          <img src="/img/logo.png" alt="Studio Foto" className="w-16 mb-2" />
          <h2 className="text-xl font-bold mb-4">
            {type === "login" ? "Login" : "Daftar"}
          </h2>
        </div>

        <form onSubmit={handleAuth}>
          <div className="mb-4">
            <label className="block text-sm">Username atau Email :</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {type === "register" && (
            <div className="mb-4">
              <label className="block text-sm">Nama Lengkap :</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm">Password :</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {type === "register" && (
            <div className="mb-4">
              <label className="block text-sm">Konfirmasi Password :</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          )}

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            {type === "login" ? "Masuk" : "Daftar"}
          </button>
        </form>

        <div className="text-center text-sm mt-4">
          {type === "login" ? (
            <>
              <p>Belum Punya Akun? <Link href="/auth/register" className="text-blue-600">Daftar Sekarang</Link></p>
              <p>Lupa password? <Link href="/auth/register" className="text-blue-600">Reset Password</Link></p>
            </>
          ) : (
            <p>
              Sudah Punya Akun? <Link href="/auth/login" className="text-blue-600">Masuk Sekarang</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
