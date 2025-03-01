import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Keranjang Belanja Anda</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-3xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3">Produk</th>
              <th className="p-3">Nama</th>
              <th className="p-3">Harga</th>
              <th className="p-3">Jumlah</th>
              <th className="p-3">Total</th>
              <th className="p-3">Hapus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3">
                <Image src="/img/card/studio/image.png" alt="Product" width={50} height={50} className="rounded" style={{ objectFit: "cover", width: "100px", height: "50px" }} />
              </td>
              <td className="p-3">Foto Studio 1-2 orang + bebas pilih background</td>
              <td className="p-3">100.000</td>
              <td className="p-3">
                <input type="number" defaultValue={1} className="w-12 border p-1 text-center" />
              </td>
              <td className="p-3">100.000</td>
              <td className="p-3">
                <button className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1">
                  <FontAwesomeIcon icon={faTrash} /> Hapus
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-between w-full max-w-3xl mt-4">
        <span className="text-lg font-semibold">Total: Rp. 100.000</span>
      </div>
      
      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Checkout
      </button>
    </div>
  );
}
