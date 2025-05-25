export default function LayananKami() {
    const layanan = [
      { title: "Studio Foto", image: "/img/studio.png", to: "/produk/detail#studio" },
      { title: "Sewa Kamera", image: "/img/image3.png", to: "/produk/detail#camera" },
      { title: "Foto Box", image: "/img/foto-box.png", to: "/produk/detail#box" },
      { title: "Frame Foto", image: "/img/image4.png", to: "/produk/detail#frame" },
    ];
  
    return (
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-3xl font-bold text-center mb-8 pt-28" data-aos-duration="1000" data-aos="zoom-in-down">Layanan Kami</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {layanan.map((item, index) => (
            <a
              data-aos-duration="1000" data-aos="flip-left"
              href={item.to}
              key={index}
              className="bg-white shadow-lg rounded-xl flex flex-col items-center text-center hover:shadow-xl transition-all border border-gray-200 overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover mb-4 border-b border-gray-200 rounded-t-xl hover:scale-105 transition-transform duration-300"
              />
              <h3 className="font-semibold text-lg px-4 pb-4">{item.title}</h3>
            </a>
          ))}
        </div>
      </section>
    );
  }
  