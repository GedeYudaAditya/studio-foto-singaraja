export default function OrderHistory() {
  const orders = [
      {
          id: 1,
          status: "Selesai", // Bisa jadi "Pending", "Diproses", dll.
          payment: "COD",
          title: "Foto Studio 1-2 orang + bebas pilih background",
          price: 100000,
          imgSrc: "/img/image.png", // Ganti path jika perlu
      },
      {
          id: 2,
          status: "Prosses", // Bisa jadi "Pending", "Diproses", dll.
          payment: "COD",
          title: "Foto Studio 1-2 orang + bebas pilih background",
          price: 100000,
          imgSrc: "/img/image.png", // Ganti path jika perlu
      },
  ];

  return (
      <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-2xl font-bold text-center mb-4">Riwayat Pesanan</h1>
          <div className="space-y-4">
              {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg overflow-hidden shadow-lg">
                      <div className="flex justify-between bg-gray-100 p-2 border-b">
                          <span className={`font-semibold ${order.status === "Selesai" ? "text-green-600" : "text-yellow-600"}`}>
                              {order.status}
                          </span>
                          <span className="text-gray-600">{order.payment}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center p-4 space-y-4 sm:space-y-0 sm:space-x-4">
                          <img
                              src={order.imgSrc}
                              alt="Foto Studio"
                              className="w-full sm:w-24 sm:h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1 text-center sm:text-left">
                              <p className="text-gray-800 font-medium">{order.title}</p>
                          </div>
                          <span className="text-gray-800 font-semibold">Rp. {order.price.toLocaleString()}</span>
                      </div>
                      <div className="p-4 border-t flex justify-between">
                          <span className="text-gray-600">Total Pesanan:</span>
                          <span className="text-blue-600 font-bold text-lg">
                              Rp. {order.price.toLocaleString()}
                          </span>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}
