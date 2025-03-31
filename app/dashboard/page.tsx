"use client";

export default function AdminDashboard() {
  const customers = [
    {
      name: "Kadek Adi Ciptayana",
      phone: "08983737423",
      date: "20-03-2025",
      schedule: "10:00-11:00",
      payment: "COD",
    },
    {
      name: "Kadek Adi Ciptayana",
      phone: "08983737423",
      date: "20-03-2025",
      schedule: "10:00-11:00",
      payment: "COD",
    },
    {
      name: "Kadek Adi Ciptayana",
      phone: "08983737423",
      date: "20-03-2025",
      schedule: "10:00-11:00",
      payment: "COD",
    },
    {
      name: "Kadek Adi Ciptayana",
      phone: "08983737423",
      date: "20-03-2025",
      schedule: "10:00-11:00",
      payment: "COD",
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-200 p-4 rounded-lg flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Selesai</h2>
            <p className="text-3xl font-bold">10</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Lihat</button>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Ditolak</h2>
            <p className="text-3xl font-bold">10</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Lihat</button>
        </div>
      </div>

      <h2 className="mt-6 text-xl font-bold">Daftar Pelanggan</h2>
      <div className="mt-4 border rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-2">Nama</th>
              <th className="p-2">No Tip</th>
              <th className="p-2">Tanggal</th>
              <th className="p-2">Jadwal</th>
              <th className="p-2">Pembayaran</th>
              <th className="p-2">Opsi</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{customer.name}</td>
                <td className="p-2">{customer.phone}</td>
                <td className="p-2">{customer.date}</td>
                <td className="p-2">{customer.schedule}</td>
                <td className="p-2">{customer.payment}</td>
                <td className="p-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded">Lihat</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
