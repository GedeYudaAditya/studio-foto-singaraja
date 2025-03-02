"use client";
import { useState } from "react";

interface StudioFotoTableProps {
  title?: string;
}

export default function StudioFotoTable({ title = "Studio Foto" }: StudioFotoTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
        id: 1,
        nama: "Kadek Adi Ciptayana",
        noTlp: "081963734123",
        tanggal: "20-03-2025",
        jadwal: "10.00-11.00",
        pembayaran: "COD",
    },
    {
        id: 2,
        nama: "Kadek Adi Ciptayana",
        noTlp: "081963734123",
        tanggal: "20-03-2025",
        jadwal: "10.00-11.00",
        pembayaran: "COD",
    },
    {
        id: 3,
        nama: "Kadek Adi Ciptayana",
        noTlp: "081963734123",
        tanggal: "20-03-2025",
        jadwal: "10.00-11.00",
        pembayaran: "COD",
    },
    {
        id: 4,
        nama: "Kadek Adi Ciptayana",
        noTlp: "081963734123",
        tanggal: "20-03-2025",
        jadwal: "10.00-11.00",
        pembayaran: "COD",
    },
  ];

  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goToDetail = (item: { id: number; nama: string; noTlp: string; tanggal: string; jadwal: string; pembayaran: string }, title: string) => {
    window.location.href = `/dashboard/detail/${title.toLowerCase().replace(" ", "-")}/${item.id}`;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      <div className="flex justify-end mb-2">
        <input
          type="text"
          placeholder="Filter By Name"
          className="border p-2 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="p-3">Nama</th>
              <th className="p-3">No Tlp</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Jadwal</th>
              <th className="p-3">Pembayaran</th>
              <th className="p-3">Hapus</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="border-b text-center">
                <td className="p-3">{item.nama}</td>
                <td className="p-3">{item.noTlp}</td>
                <td className="p-3">{item.tanggal}</td>
                <td className="p-3">{item.jadwal}</td>
                <td className="p-3">{item.pembayaran}</td>
                <td className="p-3 flex justify-center space-x-2">
                  <button className="bg-red-500 text-white px-4 py-1 rounded-md">Hapus</button>
                  <button className="bg-green-500 text-white px-4 py-1 rounded-md" onClick={() => goToDetail(item, title)}>Lihat</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
