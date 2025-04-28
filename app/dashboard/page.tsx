"use client";

import { useState } from "react";
import TableAdmin from "../components/TableAdmin";

type Category = "selesai" | "ditolak" | "studio" | "sewa" | "fotobox" | "frame" | "";

export default function AdminDashboard() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("");
  const customers = [
    {
      id: 1,
      name: "Kadek Adi Ciptayana",
      phone: "08983737423",
      date: "20-03-2025",
      tanggal_pengambilan: "01-05-2025",
      tanggal_pengembalian: "03-05-2025",
      ukuran: "4R",
      schedule: "10:00-11:00",
      payment: "COD",
    },
    {
      id: 2,
      name: "Kadek Adi Ciptayana",
      phone: "08983737423",
      date: "20-03-2025",
      tanggal_pengambilan: "01-05-2025",
      tanggal_pengembalian: "03-05-2025",
      ukuran: "4R",
      schedule: "10:00-11:00",
      payment: "COD",
    },
    {
      id: 3,
      name: "Kadek Adi Ciptayana",
      phone: "08983737423",
      date: "20-03-2025",
      tanggal_pengambilan: "01-05-2025",
      tanggal_pengembalian: "03-05-2025",
      ukuran: "4R",
      schedule: "10:00-11:00",
      payment: "COD",
    },
    {
      id: 4,
      name: "Kadek Adi Ciptayana",
      phone: "08983737423",
      tanggal_pengambilan: "01-05-2025",
      tanggal_pengembalian: "03-05-2025",
      ukuran: "4R",
      date: "20-03-2025",
      schedule: "10:00-11:00",
      payment: "COD",
    },
  ];

  const filteredCustomers = customers;

  const handleCategoryClick = (category: Category) => {
    // if (category === "selesai") {
    //   alert("Menampilkan data pesanan yang sudah selesai.");
    //   // Bisa juga navigate ke halaman lain, dll
    //   return;
    // }
  
    // if (category === "ditolak") {
    //   alert("Menampilkan data pesanan yang ditolak.");
    //   // Bisa juga tindakan lainnya
    //   return;
    // }
  
    // Untuk kategori lainnya, set category agar tampilkan tabel
    setSelectedCategory(category);
  };

  return (
    <div className="p-6">
      {selectedCategory === "" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Selesai", key: "selesai" },
            { title: "Ditolak", key: "ditolak" },
            { title: "Studio Foto", key: "studio" },
            { title: "Sewa Kamera", key: "sewa" },
            { title: "Foto Box", key: "fotobox" },
            { title: "Foto Frame", key: "frame" },
          ].map((item) => (
            <div
              key={item.key}
              className="bg-gray-200 p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-3xl font-bold">10</p>
              </div>
              <button
                onClick={() => handleCategoryClick(item.key as Category)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Lihat
              </button>
            </div>
          ))}
        </div>
      )}

      {(selectedCategory === "selesai" || selectedCategory === "ditolak") && (
        <>
          <h2 className="mt-6 text-xl font-bold">
            Data Pesanan {selectedCategory === "selesai" ? "Selesai" : "Ditolak"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Studio Foto", key: "studio" },
              { title: "Sewa Kamera", key: "sewa" },
              { title: "Foto Box", key: "fotobox" },
              { title: "Foto Frame", key: "frame" },
            ].map((item) => (
              <div
                key={item.key}
                className="bg-gray-200 p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-3xl font-bold">10</p>
                </div>
                <button
                  onClick={() => handleCategoryClick(item.key as Category)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Lihat
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedCategory &&
        selectedCategory !== "selesai" &&
        selectedCategory !== "ditolak" && (
          <TableAdmin title={`Data Pesanan ${selectedCategory}`} customers={filteredCustomers} jenis={selectedCategory} />
      )}
    </div>
  );
}
