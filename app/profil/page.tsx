"use client";
import Image from 'next/image';
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-xl text-center w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Profil Saya</h2>
          <p className="text-gray-600 mb-6">Anda belum login. Silakan login terlebih dahulu.</p>
          <a
            href="/login"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Login Sekarang
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-pink-50 to-indigo-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl text-center w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Profil Saya</h2>

        <div className="relative inline-block">
          <Image
            src={user.avatar}
            alt="Avatar"
            width={100}
            height={100}
            className="rounded-full border shadow-sm"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <span className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-gray-300">
            <FontAwesomeIcon icon={faCamera} className="text-blue-700" />
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-gray-800">{user.name}</h3>
        <p className="text-gray-600 mb-4">{user.email}</p>

        <a
          href="/history"
          className="block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Lihat History Pemesanan
        </a>

        <a
          href="/edit-profile"
          className="mt-2 text-blue-600 hover:underline text-sm"
        >
          Edit Profil
        </a>
      </div>
    </div>
  );
}
