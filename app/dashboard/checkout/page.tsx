'use client';

import { useState } from 'react';
import { useSearchParams } from "next/navigation";
import TimePicker from '@/app/components/TimePicker';
import Swal from 'sweetalert2';

const products = [
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

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

    // Cari data produk berdasarkan ID
  const product = products.find((item) => item.id === parseInt(productId as string));
  // const isCamera = product?.category === 'camera';

    const handleCheckout = () => {
        // alert('Pesanan berhasil dibuat');
        Swal.fire({
          title: "Pesanan Berhasil",
          text: "Pesanan anda berhasil dibuat, silahkan cek riwayat pesanan anda",
          icon: "success",
        }).then(() => {
          window.location.href = '/dashboard';
        });
        // window.location.href = '/history';
    };

    if (!product) {
        return <h1>Produk tidak ditemukan</h1>;
    } else {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Checkout</h1>
      
      {/* Product Table */}
      <div className="border rounded-t-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-3 flex justify-between font-semibold">
          <span>Produk</span>
          <span>Nama</span>
          <span>Harga</span>
          <span>Jumlah</span>
          <span>Total</span>
        </div>
        <div className="p-3 flex items-center justify-between border-t">
          <img src={product.image} alt={product.title} className="w-16 h-16 rounded" />
          <span>{product.title}</span>
          <span>{product.price.toLocaleString('id-ID')}</span>
          <input type="number" defaultValue={1} className="w-12 border text-center" />
          <span>{product.price.toLocaleString('id-ID')}</span>
        </div>
      </div>
      
{/* Schedule Form */}
<div className="border p-4 rounded-b-lg">
  <h2 className="font-semibold text-lg mb-3 text-center">Tentukan tanggal dan jadwal</h2>
  <div className="grid grid-cols-2 gap-4">
    {product?.category === 'camera' ? (
      <div>
      <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">
        Pilih Tanggal Pengambilan
      </label>
      <input id="tanggal" type="date" className="border p-2 rounded w-full" />
    </div>
    ) : (
      <div>
      <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">
        Pilih Tanggal
      </label>
      <input id="tanggal" type="date" className="border p-2 rounded w-full" />
    </div>
    )}

    {product?.category === 'camera' ? (
      <div>
        <label htmlFor="tanggal-pengembalian" className="block text-sm font-medium text-gray-700">
          Pilih Tanggal Pengembalian
        </label>
        <input id="tanggal-pengembalian" type="date" className="border p-2 rounded w-full" />
      </div>
    ) : product?.category === 'frame' ? (
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
</div>

      
      {/* Payment Method */}
      <div className="border-x border-t mt-4">
        <div className="flex border-b justify-items-center p-3">
          <p className='mt-1 w-1/4'>Metode Pembayaran</p>
          <button 
            className={`px-3 py-1 rounded me-3 ${paymentMethod === 'COD' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`} 
            onClick={() => setPaymentMethod('COD')}>COD</button>
          <button 
            className={`px-3 py-1 rounded ${paymentMethod === 'Transfer Bank' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`} 
            onClick={() => setPaymentMethod('Transfer Bank')}>Transfer Bank</button>
        </div>
        {paymentMethod === 'COD' ? (
          // <div className='p-3 flex'>
          //   <span className="w-1/4">COD</span>
          //   <span className="">Cash on Delivery</span>
          //   <span className="">Jika menggunakan fitur COD foto akan di cetak saat pelanggan berada di Studio Foto Singaraja</span>
          // </div>
          <div>
            <div className='p-3 flex border-b'>
              <span className="w-1/4">COD</span>
              <span className="">Cash on Delivery</span>
            </div>
            {product?.category === 'frame' ? (<div className="p-3 flex">
              <div className='w-10/12 m-auto'>
                <p>Jika menggunakan fitur COD foto akan di cetak saat pelanggan berada di Studio Foto Singaraja</p>
              </div>
              {/* <input type="file" className="border p-2" /> */}
            </div>) : (<></>)}
          </div>
        ) : (
          <div>
            <div className='p-3 flex border-b'>
              <span className="w-1/4">Transfer</span>
              <span className="">Silahkan lakukan pembayaran pada no rekening ini 
              No Rek : 0088 1234 5678 1987</span>
            </div>
            <div className="p-3 flex">
              <div className='w-10/12 m-auto'>
                <p>Silahkan kirimkan bukti pembayaran anda pada tombol di 
                sebelah kanan</p>
              </div>
              <input type="file" className="border p-2" />
            </div>
          </div>
        )}
      </div>
      
      {/* Total Price */}
      <div className='border p-4'>
        <div className="flex justify-end font-semibold text-lg mt-4">
          <span className='w-1/4'></span>
          <span className='w-1/4 text-start'>Total Produk</span>
          <span className='w-1/4 text-end'>Rp. {product.price.toLocaleString('id-ID')}</span>
        </div>
        <div className="flex justify-end font-bold text-xl mt-2">
          <span className='w-1/4'></span>
          <span className='w-1/4 text-start'>Total Pembayaran</span>
          <span className="text-blue-600 w-1/4 text-end">Rp. {product.price.toLocaleString('id-ID')}</span>
        </div>
        <div className="flex justify-end">
        <button onClick={handleCheckout} className="bg-blue-600 text-white p-3 rounded mt-4 font-semibold">Buat Pesanan</button>
        </div>
      </div>
      
    </div>
  );
    }
}
