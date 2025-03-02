"use client";
import { useEffect, useState } from "react";

export default function DetailComponent({ jenis, id }: { jenis: string; id: string }) {
  const [detail, setDetail] = useState<{ id: number; nama: string; noTlp: string; tanggal: string; jadwal: string; pembayaran: string; } | null>(null);

  // Data dummy (bisa diganti dengan API fetch)
  const data = [
    { id: 1, nama: "Kadek Adi Ciptayana", noTlp: "081963734123", tanggal: "20-03-2025", jadwal: "10.00-11.00", pembayaran: "COD" },
    { id: 2, nama: "Kadek Adi Ciptayana", noTlp: "081963734123", tanggal: "20-03-2025", jadwal: "10.00-11.00", pembayaran: "COD" },
    { id: 3, nama: "Kadek Adi Ciptayana", noTlp: "081963734123", tanggal: "20-03-2025", jadwal: "10.00-11.00", pembayaran: "COD" },
    { id: 4, nama: "Kadek Adi Ciptayana", noTlp: "081963734123", tanggal: "20-03-2025", jadwal: "10.00-11.00", pembayaran: "COD" },
  ];

  useEffect(() => {
    if (id) {
      const selectedData = data.find((item) => item.id === parseInt(id as string));
      setDetail(selectedData || null);
    }
  }, [id]);

  if (!detail) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Detail {jenis.toUpperCase().replace("-", " ")}</h1>
      <div className="border p-4 rounded-md bg-gray-100 w-1/2">
        <p><strong>Nama:</strong> {detail.nama}</p>
        <p><strong>No Telepon:</strong> {detail.noTlp}</p>
        <p><strong>Tanggal:</strong> {detail.tanggal}</p>
        <p><strong>Jadwal:</strong> {detail.jadwal}</p>
        <p><strong>Pembayaran:</strong> {detail.pembayaran}</p>
      </div>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => window.history.back()}>
        Kembali
      </button>
    </div>
  );
}
