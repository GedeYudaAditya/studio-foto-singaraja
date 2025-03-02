"use client";
import Image from 'next/image';
import { useAuth } from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-sm">
          <h2 className="text-xl font-bold mb-4">Profil Saya</h2>
          <p className="text-gray-600">Anda belum login. Silakan login terlebih dahulu.</p>
        </div>
      </div>
    );
  } else {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Profil Saya</h2>
        
        <div className="relative inline-block">
            <Image
                src={user.avatar}
                alt="Avatar"
                width={100}
                height={100}
                className="rounded-full border"
                style={{ width: "100px", height: "100px" , objectFit: "cover" }}
            />
          <span className="absolute bottom-0 right-0 bg-gray-300 p-1 rounded-full border border-white">
            <FontAwesomeIcon icon={faCamera} className="text-gray-700" />
          </span>
        </div>
        
        <h3 className="mt-4 text-lg font-semibold">{user.name}</h3>
        <p className="text-gray-600">{user.email}</p>
        
        <a href='/history' className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          History Pemesanan
        </a>
      </div>
    </div>
  );
  }
}
