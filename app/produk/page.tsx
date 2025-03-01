export default function LayananKami() {
    const layanan = [
      { title: "Studio Foto", image: "/img/studio.png", to: "/produk/detail#studio" },
      { title: "Sewa Kamera", image: "/img/image3.png", to: "/produk/detail#camera" },
      { title: "Foto Box", image: "/img/foto-box.png", to: "/produk/detail#box" },
      { title: "Frame Foto", image: "/img/image4.png", to: "/produk/detail#frame" },
    ];
  
    return (
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Layanan Kami</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {layanan.map((item, index) => (
            <a
              href={item.to}
              key={index}
              className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center hover:shadow-xl transition-all"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-cover mb-4"
              />
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </a>
          ))}
        </div>
      </section>
    );
  }
  