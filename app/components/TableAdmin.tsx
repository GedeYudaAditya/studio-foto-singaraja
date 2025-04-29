import Swal from "sweetalert2";

type Customer = {
  id: number;
  name: string;
  phone: string;
  date: string;
  schedule?: string;
  ukuran?: string;
  payment: string;
  tanggal_pengambilan?: string;
  tanggal_pengembalian?: string;
};


export default function TableAdmin({
  title,
  customers,
  jenis,
}: {
  title: string;
  customers: Customer[];
  jenis: string;
}) {

  // const goToDetail = (item: Customer, title: string) => {
  //   window.location.href = `/dashboard/detail/${title.toLowerCase().replace(" ", "-")}/${item.id}`;
  // };

  return (
    <>
      <h2 className="mt-6 text-xl font-bold">{title}</h2>
      <div className="mt-4 border rounded-lg overflow-hidden">
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

              <th className="p-2">Pembayaran</th>
              <th className="p-2">Opsi</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{customer.name}</td>
                <td className="p-2">{customer.phone}</td>

                {(jenis === "studio" || jenis === "fotobox") && <td className="p-2">{customer.date}</td>}
                {(jenis === "studio" || jenis === "fotobox") && <td className="p-2">{customer.schedule}</td>}

                {jenis === "frame" && <td className="p-2">{customer.ukuran}</td>}
                {(jenis === "sewa" || jenis === "frame") && <td className="p-2">{customer.tanggal_pengambilan}</td>}
                {jenis === "sewa" && <td className="p-2">{customer.tanggal_pengembalian}</td>}

                <td className="p-2">{customer.payment}</td>
                <td className="p-2">
                <div className="flex gap-2">
                  {/* <button className="bg-teal-500 text-white px-3 py-1 rounded" onClick={() => goToDetail(customer, title)}>Lihat</button> */}
                  <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => {
                    Swal.fire({
                      title: "Yakin ingin menerima pesanan ini?",
                      text: "Data ini tidak bisa dikembalikan!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#ff4433",
                      confirmButtonText: "Ya, terima!",
                      cancelButtonText: "Batal",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        Swal.fire("Terhapus!", "Data berhasil diterima.", "success");
                        // Di sini bisa panggil fungsi hapus atau API delete
                      }
                    });
                  }}>Selesai
                </button>
                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
