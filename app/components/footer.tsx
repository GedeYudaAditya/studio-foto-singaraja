"use client";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname(); // Ambil path halaman saat ini
    const isAdminPage = pathname.startsWith("/dashboard"); // Cek apakah path mengandung "/admin"
  
    if (isAdminPage) {
      return null;
    }
    return (
      <footer className="bg-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
            {/* Logo dan Sosial Media */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/img/logo.png"
                alt="Logo"
                className="w-16 h-16 mb-3"
              />
              <p className="text-gray-600 text-center md:text-left">
                Ayo tunggu apa lagi, segera booking iya kawan
              </p>
              <div className="flex space-x-3 mt-4">
                <span className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
                <span className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </span>
                <span className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faFacebook} />
                </span>
              </div>
            </div>
  
            {/* Informasi */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Informasi</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Studio Foto Singaraja</li>
                <li>Foto Box Singaraja</li>
                <li>Frame Foto Singaraja</li>
                <li>Sewa Kamera Singaraja</li>
                <li>Foto Prawedding</li>
                <li>Foto Wisuda</li>
              </ul>
            </div>

            {/* Sosial Media */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Sosial Media</h3>
              <ul className="text-gray-600 space-y-2">
                <li>@Studio_Foto_Singaraja</li>
                <li>@Foto_Box_Singaraja</li>
                <li>@Frame_Foto_Singaraja</li>
                <li>@Sewa_Kamera_Singaraja</li>
                <li>@Dwi_saputra</li>
                <li>@Triana_putra</li>
              </ul>
            </div>

            {/* Lainnya */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Lainnya</h3>
              <ul className="text-gray-600 space-y-2">
                <li>FotoBooth Pernikahan</li>
                <li>VideoBooth Acara</li>
                <li>Dokumentasi Pernikahan</li>
                <li>Foto Outdoor</li>
                <li>Foto Keluarga</li>
                <li>Foto Selfi</li>
              </ul>
            </div>
          </div>
  
          {/* Garis Bawah & Credit */}
          <div className="border-t border-gray-400 mt-6 pt-4 text-center text-gray-700">
            Desainer UI/UX
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  