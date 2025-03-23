'use client';

import { useState } from 'react';

const categories = [
  { id: 'studio', name: 'Studio Foto' },
  { id: 'kamera', name: 'Sewa Kamera' },
  { id: 'foto-box', name: 'Foto Box' },
  { id: 'frame', name: 'Frame Foto' },
];

const images = [
  { src: '/img/other/image.png', category: 'studio' },
  { src: '/img/other/image-1.png', category: 'studio' },
  { src: '/img/other/image-2.png', category: 'studio' },
  { src: '/img/other/image-3.png', category: 'studio' },
  { src: '/img/other/image-4.png', category: 'studio' },
  { src: '/img/other/image-5.png', category: 'studio' },
  { src: '/img/other/image-6.png', category: 'studio' },
  { src: '/img/other/studio.png', category: 'studio' },
  { src: '/img/other/ww.png', category: 'studio' },

  { src: '/img/camera/a6000.png', category: 'kamera' },
  { src: '/img/camera/d700.png', category: 'kamera' },
  { src: '/img/camera/d1300.png', category: 'kamera' },
  { src: '/img/camera/image-1.png', category: 'kamera' },
  { src: '/img/camera/image.png', category: 'kamera' },

  { src: '/img/foto-box/image.png', category: 'foto-box' },
  { src: '/img/foto-box/image-1.png', category: 'foto-box' },
  { src: '/img/foto-box/image-2.png', category: 'foto-box' },
  { src: '/img/foto-box/image-3.png', category: 'foto-box' },
  { src: '/img/foto-box/image-4.png', category: 'foto-box' },
  { src: '/img/foto-box/image-5.png', category: 'foto-box' },
  { src: '/img/foto-box/image-6.png', category: 'foto-box' },
  { src: '/img/foto-box/image-7.png', category: 'foto-box' },
  { src: '/img/foto-box/image-8.png', category: 'foto-box' },

  { src: '/img/foto-frame/image.png', category: 'frame' },
  { src: '/img/foto-frame/image-1.png', category: 'frame' },
  { src: '/img/foto-frame/image-2.png', category: 'frame' },
  { src: '/img/foto-frame/image-3.png', category: 'frame' },
  { src: '/img/foto-frame/image-4.png', category: 'frame' },
];

const Porftofolio = () => {
  const [activeCategory, setActiveCategory] = useState('studio');

  return (
    <div className="max-w-5xl mx-auto text-center p-4 sm:p-6 my-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Galeri Kami</h2>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-md font-medium transition-all ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-800 hover:text-blue-500'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {images
          .filter((img) => img.category === activeCategory)
          .map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt="Gallery Image"
              className="w-full h-40 sm:h-48 object-cover rounded-lg border-2 border-transparent hover:border-blue-500"
            />
          ))}
      </div>
    </div>
  );
};

export default Porftofolio;
