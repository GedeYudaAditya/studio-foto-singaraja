"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useParams } from "next/navigation";

const images = [
  { image: '/img/card/studio/image.png', category: 'studio', title: 'foto studio 1-2 orang + bebas pilih background', price: 100000, id: 1},
  { image: '/img/card/studio/image-2.png', category: 'studio', title: 'foto studio 3-7 orang + bebas pilih background', price: 140000, id: 2},
  { image: '/img/card/studio/image-4.png', category: 'studio', title: 'foto graduation 1-2 orang + background', price: 140000, id: 3},
  { image: '/img/card/studio/image-1.png', category: 'studio', title: 'foto graduation 3-7 orang + background', price: 160000, id: 4},
  { image: '/img/card/studio/image-3.png', category: 'studio', title: 'Foto ijasah latar merah', price: 50000, id: 1},
  
  { image: '/img/card/camera/d700.png', category: 'camera', title: 'Canon EOS 700D (DSLR)', price: 100000 , id: 5},
  { image: '/img/card/camera/d1300.png', category: 'camera', title: 'Canon EOS 1300D (DSLR)', price: 140000 , id: 6},
  { image: '/img/card/camera/image-1.png', category: 'camera', title: 'Sony Alpa mark 1 (DSLR)', price: 140000 , id: 7},
  { image: '/img/card/camera/image.png', category: 'camera', title: 'Sony Alpa 6400 (Miroles)', price: 160000 , id: 8},
  
  { image: '/img/card/box/image.png', category: 'box', title: 'Foto Box Hige Angle Photography', price: 100000 , id: 9},
  { image: '/img/card/box/image-1.png', category: 'box', title: 'Foto Box 1-2 orang + bebas pilih backgroung', price: 100000 , id: 10},
  { image: '/img/card/box/image-2.png', category: 'box', title: 'Foto Box 3-4 orang + bebas pilih backgroun ', price: 120000 , id: 11},

  { image: '/img/card/frame/image.png', category: 'frame', title: 'Frame foto 4R + bingkai foto', price: 40000 , id: 12},
  { image: '/img/card/frame/image-1.png', category: 'frame', title: 'Frame foto 5R + bingkai foto', price: 50000 , id: 13},
  { image: '/img/card/frame/image-2.png', category: 'frame', title: 'Frame foto 8R + bingkai foto', price: 70000 , id: 14},
];


const formatHarga = (price: number) => {
  return new Intl.NumberFormat('id-ID').format(price); // Pastikan format harga konsisten
};

export default function ProductReviewPage() {
    const params = useParams();
    const id = params.id;
    const { user } = useAuth();

    // Cari data produk berdasarkan ID
    const product = images.find((item) => item.id === parseInt(id as string));

    if (!product) {
      return <h1>Produk tidak ditemukan</h1>;
    } else {
    return (
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto py-12 px-6">
        {/* Bagian Gambar */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img 
            src={product.image}
            alt="Foto Studio"
            className="w-full rounded-lg shadow-lg" 
          />
        </div>
        
        {/* Bagian Deskripsi */}
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-2xl font-bold mb-4">Review Produk</h2>
          <h3 className="text-xl font-semibold mb-3">
            {product.title}
          </h3>
          
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
            <li>Foto max 30 menit</li>
            <li>2 lembar cetak foto ukuran 30x30 cm, anti gores & anti air</li>
            <li>Background bebas pilih warna</li>
            <li>Hasil gambar dikirim melalui drive atau lewat kabel data</li>
            <li>Foto di gedung Studio Foto Singaraja</li>
          </ul>
  
          <p className="text-lg font-bold text-blue-600">Harga : </p>
          <p className="text-2xl font-bold text-blue-600 mb-4">Rp. {formatHarga(product.price)}</p>
  
          {!user ? (
              <a href="/auth/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
                Login untuk memesan
              </a>
            ) : 
              <a href="/keranjang" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
                Tambah ke Keranjang
              </a>
          }
        </div>
      </div>
    );
  }
  }
  