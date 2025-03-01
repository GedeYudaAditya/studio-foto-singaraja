// import Image from "next/image";
import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCalendarAlt, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <>
      <HeroSlider />
      {/* 2 column */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 md:px-32 py-20 items-center">
        {/* Text Section */}
        <div className="text-black">
          <h1 className="text-4xl font-bold mb-4">Promo Spesial!</h1>
          <p className="text-lg mb-6">
            Nikmati penawaran spesial dari Studio Foto Singaraja. Dapatkan diskon 20% 
            untuk paket foto tertentu. Jangan lewatkan kesempatan ini untuk mengabadikan
            momen berharga Anda dengan harga terbaik.
          </p>
          
          {/* Button */}
          <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Lihat Promo
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image 
            src="/img/banner/banner2.png" 
            alt="Promo Camera Studio" 
            className="rounded-lg shadow-lg object-cover" 
            width={600} 
            height={350} 
          />
        </div>
      </section>


      <section className="py-20 text-black">
        <div className="text-center">
          <small className="text-gray-500 mb-3 block uppercase tracking-widest">BOKING SUPPORT</small>
          <h1 className="text-3xl mb-6 font-bold">Layanan Kami</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 md:px-20">
            {[
              { title: "Studio Foto", img: "/img/foto/foto.png", desc: "Studio foto dengan berbagai macam tema yang bisa Anda pilih sesuai keinginan." },
              { title: "Sewa Kamera", img: "/img/foto/foto2.png", desc: "Sewa kamera profesional dengan kualitas terbaik untuk setiap kebutuhan fotografi Anda." },
              { title: "Foto Box", img: "/img/foto/foto3.png", desc: "Abadikan momen seru Anda dengan teman-teman dalam sesi foto box yang menyenangkan." },
              { title: "Frame Foto", img: "/img/foto/foto4.png", desc: "Bingkai foto custom untuk kenangan spesial Anda dengan berbagai pilihan desain." },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center">
                <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-black mb-8">
            Boking Mudah Menggunakan Website
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full mb-4">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Tentukan Jadwal</h3>
              <p className="text-gray-600 text-sm">
                Kamu bisa menentukan kapan kamu ingin menyewa atau booking studio foto melalui website.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
              <div className="bg-red-600 text-white p-4 rounded-full mb-4">
                <FontAwesomeIcon icon={faShieldAlt} className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Keamanan Terjamin</h3>
              <p className="text-gray-600 text-sm">
                Jangan takut atau ragu memesan dan boking melalui website kami karena kami menjaga keamanan dan privasi anda.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
              <div className="bg-orange-400 text-white p-4 rounded-full mb-4">
                <FontAwesomeIcon icon={faBookmark} className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Tentukan Pilihanmu</h3>
              <p className="text-gray-600 text-sm">
                Kamu bisa memilih kategori apa yang ingin kamu pesan melalui website, kami akan melayani anda dengan senang hati.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bagian Teks */}
          <div>
            <h2 className="text-xl font-bold text-black mb-2">
              Hasil Foto Memuaskan
            </h2>
            <p className="text-gray-600 mb-6">
              Kami selalu menjaga kualitas dari produk yang kita berikan, demi mendapatkan kepuasan dari anda.
            </p>

            <h2 className="text-xl font-bold text-black mb-2">
              Pengalaman Tak Terlupakan
            </h2>
            <p className="text-gray-600 mb-6">
              Ayo datanglah ke studio foto Singaraja dan rasakan sensasi yang tak terlupakan dari pelayanan kami.
            </p>

            <h2 className="text-xl font-bold text-black mb-2">
              Harga Terjangkau
            </h2>
            <p className="text-gray-600">
              Kami memberikan harga yang murah dan kualitas terjamin. Jadi tunggu apa lagi? Segera booking studio foto Singaraja.
            </p>
          </div>

          {/* Bagian Gambar */}
          <div className="flex justify-center mt-6 md:mt-0 p-10">
              <img
                  src="/img/image.png"
                  alt="Click Kamera"
                  className="w-48 md:w-full"
              />
          </div>
        </div>
      </section>
    </>
  );
}
