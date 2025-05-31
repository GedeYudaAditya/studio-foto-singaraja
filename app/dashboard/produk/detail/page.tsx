'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProductCardDashboard from '@/app/components/ProductCardDashboard';

const categories = [
  { id: 'studio-foto', name: 'Studio Foto' },
  { id: 'sewa-kamera', name: 'Sewa Kamera' },
  { id: 'foto-box', name: 'Foto Box' },
  { id: 'frame-foto', name: 'Frame Foto' },
];

const images = [
  { image: '/img/card/studio/image.png', category: 'studio-foto', title: 'foto studio 1-2 orang + bebas pilih background', price: 100000, id: 1 },
  { image: '/img/card/studio/image-2.png', category: 'studio-foto', title: 'foto studio 3-7 orang + bebas pilih background', price: 140000, id: 2 },
  { image: '/img/card/studio/image-4.png', category: 'studio-foto', title: 'foto graduation 1-2 orang + background', price: 140000, id: 3 },
  { image: '/img/card/studio/image-1.png', category: 'studio-foto', title: 'foto graduation 3-7 orang + background', price: 160000, id: 4 },
  { image: '/img/card/studio/image-3.png', category: 'studio-foto', title: 'Foto ijasah latar merah', price: 50000, id: 5 },

  { image: '/img/card/camera/d700.png', category: 'sewa-kamera', title: 'Canon EOS 700D (DSLR)', price: 100000, id: 6 },
  { image: '/img/card/camera/d1300.png', category: 'sewa-kamera', title: 'Canon EOS 1300D (DSLR)', price: 140000, id: 7 },
  { image: '/img/card/camera/image-1.png', category: 'sewa-kamera', title: 'Sony Alpa mark 1 (DSLR)', price: 140000, id: 8 },
  { image: '/img/card/camera/image.png', category: 'sewa-kamera', title: 'Sony Alpa 6400 (Miroles)', price: 160000, id: 9 },

  { image: '/img/card/box/image.png', category: 'foto-box', title: 'Foto Box Hige Angle Photography', price: 100000, id: 10 },
  { image: '/img/card/box/image-1.png', category: 'foto-box', title: 'Foto Box 1-2 orang + bebas pilih backgroung', price: 100000, id: 11 },
  { image: '/img/card/box/image-2.png', category: 'foto-box', title: 'Foto Box 3-4 orang + bebas pilih backgroun ', price: 120000, id: 12 },

  { image: '/img/card/frame/image.png', category: 'frame-foto', title: 'Frame foto 4R + bingkai foto', price: 40000, id: 13 },
  { image: '/img/card/frame/image-1.png', category: 'frame-foto', title: 'Frame foto 5R + bingkai foto', price: 50000, id: 14 },
  { image: '/img/card/frame/image-2.png', category: 'frame-foto', title: 'Frame foto 8R + bingkai foto', price: 70000, id: 15 },
];

const ProdukDetailDashboard = () => {
  const router = useRouter();
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
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-10 text-center mb-10">
      {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 mt-20" data-aos-duration="1000" data-aos="zoom-in-down">Produk Kami</h2> */}
      <div className="flex-wrap justify-center gap-4 mb-8 hidden" data-aos-duration="1000" data-aos="zoom-in-down">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 text-sm sm:text-base rounded-md font-medium transition-all ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-800 hover:text-blue-500'
            }`}
            onClick={() => {
              setActiveCategory(category.id);
              router.push(`/produk/detail#${category.id}`);
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images
          .filter((img) => img.category === activeCategory)
          .map((img, index) => (
            <ProductCardDashboard key={index} product={img} />
          ))}
      </div>
    </div>
  );
};

export default ProdukDetailDashboard;
