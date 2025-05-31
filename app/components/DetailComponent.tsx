"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function DetailComponent({ jenis, id }: { jenis: string; id: string }) {
  const router = useRouter();
  const [detail, setDetail] = useState<{ id: number; nama: string; noTlp: string; tanggal: string; jadwal: string; pembayaran: string; image: string; status?: string, profile: string, tanggal_pengambilan: string, tanggal_pengembalian: string} | null>(null);
  const [status, setStatus] = useState<"accepted" | "declined" | "pending">("pending");

  // Data dummy dengan gambar (URL gambar contoh)
  const data = [
    { id: 1, nama: "Kadek Adi Ciptayana", noTlp: "081963734123", tanggal: "20-03-2025", jadwal: "10.00-11.00", pembayaran: "COD", image: "/img/image.png", profile: "/img/profil/avatar.png",       tanggal_pengambilan: "01-05-2025",
      tanggal_pengembalian: "03-05-2025"},
    { id: 2, nama: "Kadek Adi Ciptayana", noTlp: "081963734123", tanggal: "20-03-2025", jadwal: "10.00-11.00", pembayaran: "COD", image: "/img/image2.png", profile: "/img/profil/avatar.png",       tanggal_pengambilan: "01-05-2025",
      tanggal_pengembalian: "03-05-2025"},
    { id: 3, nama: "Kadek Adi Ciptayana", noTlp: "081963734123", tanggal: "20-03-2025", jadwal: "10.00-11.00", pembayaran: "COD", image: "/img/image3.png", profile: "/img/profil/avatar.png",       tanggal_pengambilan: "01-05-2025",
      tanggal_pengembalian: "03-05-2025"},
    { id: 4, nama: "Kadek Adi Ciptayana", noTlp: "081963734123", tanggal: "20-03-2025", jadwal: "10.00-11.00", pembayaran: "COD", image: "/img/image4.png", profile: "/img/profil/avatar.png",       tanggal_pengambilan: "01-05-2025",
      tanggal_pengembalian: "03-05-2025"},
  ];

  useEffect(() => {
    if (id) {
      const selectedData = data.find((item) => item.id === parseInt(id as string));
      if (selectedData) {
        setDetail(selectedData);
      }
    }
  }, [id]);

  if (!detail) return <p className="p-6 text-center text-gray-500">Loading...</p>;

  return (
    <div className="mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Detail {jenis.toUpperCase().replace("-", " ")}</h1>

      <div className="border p-5 rounded-lg bg-gray-100">
        <img src={detail.profile} alt="Foto Pengguna" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <p className="mb-2"><strong>Nama:</strong> {detail.nama}</p>
        <p className="mb-2"><strong>No Telepon:</strong> {detail.noTlp}</p>
        <p className="mb-2"><strong>Tanggal:</strong> {detail.tanggal}</p>
        <p className="mb-2"><strong>Jadwal:</strong> {detail.jadwal}</p>
        <p className="mb-2"><strong>Pembayaran:</strong> {detail.pembayaran}</p>
        {(jenis === "sewa-kamera" || jenis === "frame-foto") && (
          <>
            <p className="mb-2"><strong>Tanggal Pengambilan:</strong> {detail.tanggal_pengambilan}</p>
            {(jenis !== "frame-foto") && (
              <p className="mb-2"><strong>Tanggal Pengembalian:</strong> {detail.tanggal_pengembalian}</p>
            )}
          </>
        )}
        <p className="mt-3 text-lg font-semibold">
          Status: 
          <span className={`ml-2 px-3 py-1 rounded-full text-white ${status === "accepted" ? "bg-green-500" : status === "declined" ? "bg-red-500" : "bg-gray-400"}`}>
            {status === "accepted" ? "Accepted" : status === "declined" ? "Declined" : "Pending"}
          </span>
        </p>

        <div>
          {/* detail bukti & attachment */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* Kolom Bukti Bayar */}
            <div className="border p-4 rounded-lg bg-gray-100">
              <h2 className="text-lg font-semibold mb-3">Bukti Bayar</h2>
              <img
                src={detail.image}
                alt="Bukti Bayar"
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <a
                href={detail.image}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                Lihat Bukti Bayar
              </a>
            </div>

            {/* Kolom Attachment */}
            <div className="border p-4 rounded-lg bg-gray-100">
              <h2 className="text-lg font-semibold mb-3">Attachment</h2>
              <img
                src={detail.image}
                alt="Attachment"
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <a
                href={detail.image}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                Lihat Attachment
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="flex justify-between mt-6">
        <button 
          onClick={() => setStatus("accepted")} 
          className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all"
        >
          <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 mr-2" /> Accept
        </button>
        
        <button 
          onClick={() => setStatus("declined")} 
          className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all"
        >
          <FontAwesomeIcon icon={faTimesCircle} className="w-5 h-5 mr-2" /> Decline
        </button>
      </div>

      <button 
        className="mt-6 flex items-center text-gray-600 hover:text-gray-800"
        onClick={() => router.back()}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5 mr-2" /> Kembali
      </button>
    </div>
  );
}
