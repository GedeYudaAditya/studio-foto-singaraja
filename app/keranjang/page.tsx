'use client';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const images = [
  { image: '/img/card/studio/image.png', category: 'studio', title: 'foto studio 1-2 orang + bebas pilih background', price: 100000, id: 1},
  { image: '/img/card/studio/image-2.png', category: 'studio', title: 'foto studio 3-7 orang + bebas pilih background', price: 140000, id: 2},
  { image: '/img/card/studio/image-4.png', category: 'studio', title: 'foto graduation 1-2 orang + background', price: 140000, id: 3},
  { image: '/img/card/studio/image-1.png', category: 'studio', title: 'foto graduation 3-7 orang + background', price: 160000, id: 4},
  { image: '/img/card/studio/image-3.png', category: 'studio', title: 'Foto ijasah latar merah', price: 50000, id: 5},
  
  { image: '/img/card/camera/d700.png', category: 'camera', title: 'Canon EOS 700D (DSLR)', price: 100000 , id: 6},
  { image: '/img/card/camera/d1300.png', category: 'camera', title: 'Canon EOS 1300D (DSLR)', price: 140000 , id: 7},
  { image: '/img/card/camera/image-1.png', category: 'camera', title: 'Sony Alpa mark 1 (DSLR)', price: 140000 , id: 8},
  { image: '/img/card/camera/image.png', category: 'camera', title: 'Sony Alpa 6400 (Miroles)', price: 160000 , id: 9},
  
  { image: '/img/card/box/image.png', category: 'box', title: 'Foto Box Hige Angle Photography', price: 100000 , id: 10},
  { image: '/img/card/box/image-1.png', category: 'box', title: 'Foto Box 1-2 orang + bebas pilih backgroung', price: 100000 , id: 11},
  { image: '/img/card/box/image-2.png', category: 'box', title: 'Foto Box 3-4 orang + bebas pilih backgroun ', price: 120000 , id: 12},

  { image: '/img/card/frame/image.png', category: 'frame', title: 'Frame foto 4R + bingkai foto', price: 40000 , id: 13},
  { image: '/img/card/frame/image-1.png', category: 'frame', title: 'Frame foto 5R + bingkai foto', price: 50000 , id: 14},
  { image: '/img/card/frame/image-2.png', category: 'frame', title: 'Frame foto 8R + bingkai foto', price: 70000 , id: 15},
];

export default function Cart() {
    const searchParams = useSearchParams();
    const productId = searchParams.get("id");

    // Cari data produk berdasarkan ID
    const product = images.find((item) => item.id === parseInt(productId as string));

    // keranjang data
    const [keranjang, setKeranjang] = useState<{ id: number; image: string; category: string; title: string; price: number; }[]>([]);

    // hapus produk dari keranjang
    const hapusProduk = (id: number) => {
      setKeranjang(keranjang.filter((item) => item.id !== id));
    };

    // hitung total belanja
    const [total, setTotal] = useState(0);

    useEffect(() => {
      if (product) {
        setKeranjang((prev) => [...prev, product]);
      }
    }, [product]); // Hanya dijalankan saat product berubah
    
    useEffect(() => {
      setTotal(keranjang.reduce((total, item) => total + item.price, 0));
    }, [keranjang]); // Update total saat keranjang berubah

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6" data-aos-duration="1000" data-aos="zoom-in-down">Keranjang Belanja Anda</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-3xl" data-aos-duration="1000" data-aos="zoom-in-down">
        <table className="w-full text-left border-collapse" data-aos-duration="1000" data-aos="zoom-in-down">
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
            {keranjang.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3">
                  <Image src={item.image} alt={item.title} width={100} height={100} />
                </td>
                <td className="p-3">{item.title}</td>
                <td className="p-3">{item.price.toLocaleString('id-ID')}</td>
                <td className="p-3">1</td>
                <td className="p-3">{item.price.toLocaleString('id-ID')}</td>
                <td className="p-3">
                  <button onClick={() => hapusProduk(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-between w-full max-w-3xl mt-4" data-aos-duration="1000" data-aos="zoom-in-down">
        <span className="text-lg font-semibold">Total: Rp. {total.toLocaleString('id-ID')}</span>
      </div>
      
      <a data-aos-duration="1000" data-aos="zoom-in-down" href={"/checkout?id=" + product?.id} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
        Checkout
      </a>
    </div>
  );
}
