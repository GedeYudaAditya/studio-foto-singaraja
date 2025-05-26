"use client";
import { useState } from "react";
import Swal from "sweetalert2";

interface StudioFotoTableProps {
  title?: string;
  jenis?: string;
}

export default function StudioFotoTable({ title = "Studio Foto", jenis }: StudioFotoTableProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      id: 1,
      name: "Kadek Adi Ciptayana",
      phone: "08983737423",
      date: "20-03-2025",
      tanggal_pengambilan: "01-05-2025",
      tanggal_pengembalian: "03-05-2025",
      ukuran: "4R",
      schedule: "10:00-11:00",
      email: "example@gmail.com",
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
      email: "example@gmail.com",
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
      email: "example@gmail.com",
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
      email: "example@gmail.com",
      payment: "COD",
    },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goToDetail = (item: { id: number; nama: string; noTlp: string; tanggal: string; jadwal: string; pembayaran: string }, title: string) => {
    window.location.href = `/dashboard/detail/${title.toLowerCase().replace(" ", "-")}/${item.id}`;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      {/* button add */}
      <div className="flex justify-between items-center mb-4">
      <div className="flex justify-end mb-4">
        <a href={`/dashboard/produk/detail#${title.toLowerCase().replace(" ", "-")}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Tambah
        </a>
      </div>

      <div className="flex justify-end mb-2">
        <input
          type="text"
          placeholder="Filter By Name"
          className="border p-2 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
                  <thead className="bg-blue-700 text-white">
                    <tr>
                      <th className="p-2">Nama</th>
                      <th className="p-2">No Tip</th>
        
                      {(jenis === "studio" || jenis === "fotobox") && <th className="p-2">Tanggal</th>}
                      {(jenis === "studio" || jenis === "fotobox") && <th className="p-2">Jadwal</th>}
        
                      {jenis === "frame" && <th className="p-2">Ukuran</th>}
                      {(jenis === "sewa" || jenis === "frame") && <th className="p-2">Pengambilan</th>}
                      {jenis === "sewa" && <th className="p-2">Pengembalian</th>}
        
                      {jenis !== "pelanggan" && <th className="p-2">Pengembalian</th>}
                      {jenis === "pelanggan" && <th className="p-2">Email</th>}
                      {/* <th className="p-2">Pembayaran</th> */}
                      <th className="p-2">Opsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((customer, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-2">{customer.name}</td>
                        <td className="p-2">{customer.phone}</td>
        
                        {(jenis === "studio" || jenis === "fotobox") && <td className="p-2">{customer.date}</td>}
                        {(jenis === "studio" || jenis === "fotobox") && <td className="p-2">{customer.schedule}</td>}
        
                        {jenis === "frame" && <td className="p-2">{customer.ukuran}</td>}
                        {(jenis === "sewa" || jenis === "frame") && <td className="p-2">{customer.tanggal_pengambilan}</td>}
                        {jenis === "sewa" && <td className="p-2">{customer.tanggal_pengembalian}</td>}
        
                        {jenis !== "pelanggan" && <td className="p-2">{customer.payment}</td>}
                        {jenis === "pelanggan" && <td className="p-2">{customer.email}</td>}
                        <td className="p-2">
                        <div className="flex gap-2">
                          {jenis !== "pelanggan" && (<button
                            className="bg-green-500 text-white px-3 py-1 rounded"
                            onClick={() =>
                              goToDetail(
                                {
                                  id: customer.id,
                                  nama: customer.name,
                                  noTlp: customer.phone,
                                  tanggal: customer.date,
                                  jadwal: customer.schedule,
                                  pembayaran: customer.payment,
                                },
                                title
                              )
                            }
                          >
                            Lihat
                          </button>)}
                          <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => {
                            Swal.fire({
                              title: "Yakin ingin menghapus ini?",
                              text: "Data ini tidak bisa dikembalikan!",
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonColor: "#ff4433",
                              cancelButtonColor: "#1919ff",
                              confirmButtonText: "Ya, Hapus!",
                              cancelButtonText: "Batal",
                            }).then((result) => {
                              if (result.isConfirmed) {
                                Swal.fire("Terhapus!", "Data berhasil diterima.", "success");
                                // Di sini bisa panggil fungsi hapus atau API delete
                              }
                            });
                          }}>Hapus
                        </button>
                        </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
          </table>
        {/* <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="p-3">Nama</th>
              <th className="p-3">No Tlp</th>
              <th className="p-3">Tanggal</th>
              <th className="p-3">Jadwal</th>
              <th className="p-3">Pembayaran</th>
              <th className="p-3">{title === "Pesanan Masuk" ? "Status" : "Opsi"}</th>
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
                {title === "Pesanan Masuk" ? (
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-md ${
                        item.status === "Selesai" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                ) : (
                  <td className="p-3 flex justify-center space-x-2">
                    <button className="bg-red-500 text-white px-4 py-1 rounded-md">Hapus</button>
                    <button className="bg-green-500 text-white px-4 py-1 rounded-md" onClick={() => goToDetail(item, title)}>Lihat</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
  );
}
