"use client";

export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      <div className="h-24 bg-gray-300 rounded-md flex items-center justify-center flex-col">
        <div className="text-lg md:text-xl">Foto Studio</div>
        <span className="font-extrabold text-2xl md:text-3xl">10</span>
      </div>
      <div className="h-24 bg-gray-300 rounded-md flex items-center justify-center flex-col">
        <div className="text-lg md:text-xl">Sewa Kamera</div>
        <span className="font-extrabold text-2xl md:text-3xl">10</span>
      </div>
      <div className="h-24 bg-gray-300 rounded-md flex items-center justify-center flex-col">
        <div className="text-lg md:text-xl">Foto Studio</div>
        <span className="font-extrabold text-2xl md:text-3xl">10</span>
      </div>
      <div className="h-24 bg-gray-300 rounded-md flex items-center justify-center flex-col">
        <div className="text-lg md:text-xl">Frame Foto</div>
        <span className="font-extrabold text-2xl md:text-3xl">10</span>
      </div>
    </div>
  );
}
