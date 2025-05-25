"use client";
import TimePicker from "@/app/components/TimePicker";

export default function TambahPage({ params }: { params: { jenis: string } }) {
  return (
    <div className="border p-4 rounded-b-lg">
      <h2 className="font-semibold text-lg mb-3 text-center">Tentukan tanggal dan jadwal</h2>
      <div className="grid grid-cols-2 gap-4">
        {params.jenis === 'sewa-kamera' ? (
          <div>
          <label htmlFor="tanggal-pengembalian" className="block text-sm font-medium text-gray-700">
            Nama
          </label>
          <input id="tanggal-pengembalian" type="text" className="border p-2 rounded w-full" />
        </div>
        ) : (
          <div>
          <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">
            Pilih Tanggal
          </label>
          <input id="tanggal" type="date" className="border p-2 rounded w-full" />
        </div>
        )}
    
        {params.jenis === 'sewa-kamera' ? (
          <div>
            <label htmlFor="tanggal-pengembalian" className="block text-sm font-medium text-gray-700">
              Pilih Tanggal Pengembalian
            </label>
            <input id="tanggal-pengembalian" type="date" className="border p-2 rounded w-full" />
          </div>
        ) : params.jenis === 'frame-foto' ? (
          <div>
            <label htmlFor="foto" className="block text-sm font-medium text-gray-700">
              Unggah Foto
            </label>
            <input id="foto" type="file" className="border p-2 rounded w-full" accept="image/*" />
          </div>
        ) : (
          // <div>
          //   <label htmlFor="jam" className="block text-sm font-medium text-gray-700">
          //     Pilih Jam
          //   </label>
          //   <input id="jam" type="time" className="border p-2 rounded w-full" />
          // </div>
          <TimePicker />
        )}
      </div>
    
      <div className="mt-4">
        <label htmlFor="no-telp" className="block text-sm font-medium text-gray-700">
          No Telp
        </label>
        <input id="no-telp" type="text" className="border p-2 rounded w-full" placeholder="Masukkan No Telp" />
      </div>

      {/* submit */}
        <div className="mt-4">
            <a href={"/dashboard/" + params.jenis} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Submit
            </a>
        </div>
    </div>
  );
}