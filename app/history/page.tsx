export default function OrderHistory() {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Riwayat Pesanan</h1>
        <div className="border rounded-lg overflow-hidden">
          <div className="flex justify-between bg-gray-100 p-2 border-b">
            <span className="font-semibold">Pesanan Selesai</span>
            <span className="text-gray-600">COD</span>
          </div>
          <div className="flex p-4 items-center space-x-4">
            <img
              src="/img/image.png" // Ganti dengan path gambar yang sesuai
              alt="Foto Studio"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <p className="text-gray-800">Foto Studio 1-2 orang + bebas pilih background</p>
            </div>
            <span className="text-gray-800">Rp. 100.000</span>
          </div>
          <div className="p-4 border-t flex justify-between">
            <span className="text-gray-600">Total Pesanan :</span>
            <span className="text-blue-600 font-bold text-lg">Rp. 100.000</span>
          </div>
        </div>
      </div>
    );
  }