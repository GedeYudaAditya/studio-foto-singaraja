"use client";

export default function AdminDashboard() {

  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      <div className="h-24 bg-gray-300 rounded-md flex items-center justify-center">Statistik</div>
      <div className="h-24 bg-gray-300 rounded-md flex items-center justify-center">Transaksi</div>
      <div className="h-24 bg-gray-300 rounded-md flex items-center justify-center">Pelanggan</div>
      <div className="h-24 bg-gray-300 rounded-md flex items-center justify-center">Pendapatan</div>
    </div>
  );
}
