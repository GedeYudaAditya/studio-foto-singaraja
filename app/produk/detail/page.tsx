'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProductCard from '@/app/components/ProductCard';

const categories = [
  { id: 'studio', name: 'Studio Foto' },
  { id: 'camera', name: 'Sewa Kamera' },
  { id: 'box', name: 'Foto Box' },
  { id: 'frame', name: 'Frame Foto' },
];

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

const ProdukDetail = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('studio');

  // Set kategori berdasarkan hash di URL saat halaman dimuat
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && categories.some((cat) => cat.id === hash)) {
      setActiveCategory(hash);
    }
  }, []);

  // Update kategori jika hash di URL berubah
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
    <div className="max-w-4xl mx-auto text-center p-6 my-10">
      <h2 className="text-3xl font-bold mb-4">Galeri Kami</h2>
      <div className="flex justify-center space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-md font-medium transition-all ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => {
              setActiveCategory(category.id);
              router.push(`/produk/detail#${category.id}`); // Perbarui hash di URL
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {images
          .filter((img) => img.category === activeCategory)
          .map((img, index) => (
            <ProductCard key={index} product={img} />
            // <img
            //   key={index}
            //   src={img.src}
            //   alt="Gallery Image"
            //   className="w-full h-48 object-cover rounded-lg border-2 border-transparent hover:border-blue-500"
            // />
          ))}
      </div>
    </div>
  );
};

export default ProdukDetail;
