import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

const categories = [
  { id: 'studio-foto', name: 'Studio Foto' },
  { id: 'sewa-kamera', name: 'Sewa Kamera' },
  { id: 'foto-box', name: 'Foto Box' },
  { id: 'frame-foto', name: 'Frame Foto' },
];

const formatHarga = (price: number) => {
    return new Intl.NumberFormat('id-ID').format(price); // Pastikan format harga konsisten
};

const ProductCardDashboard = ({ product }: { product: Product }) => {
  const [activeCategory, setActiveCategory] = useState('studio-foto');
  
    useEffect(() => {
      const hash = window.location.hash.replace('#', '');
      if (hash && categories.some((cat) => cat.id === hash)) {
        setActiveCategory(hash);
      }
    }, []);
  
    useEffect(() => {
      const handleHashChange = () => {
        const hash = window.location.hash.replace('#', '');
        if (hash && categories.some((cat) => cat.id === hash)) {
          setActiveCategory(hash);
        }
      };
  
      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

  return (
    <div className="bg-white shadow-md rounded-xl flex flex-col items-center text-center hover:shadow-xl transition-all" data-aos-duration="1000" data-aos="flip-left">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={200}
        className="rounded-lg object-cover mb-4"
      />
      <div className="p-4 w-full h-full flex flex-col justify-between">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-500 mb-2">Rp. {formatHarga(product.price)}</p>
        <a className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition" href={"/dashboard/checkout?id=" + product.id + "&category=" + activeCategory}>
            Pilih
        </a>
      </div>
    </div>
  );
};

export default ProductCardDashboard;
