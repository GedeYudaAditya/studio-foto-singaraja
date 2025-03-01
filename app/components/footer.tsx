import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
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
            <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i}>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    Informasi
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>Studio Foto Singaraja</li>
                    <li>Foto Box Singaraja</li>
                    <li>Frame Foto Singaraja</li>
                    <li>Sewa Kamera Singaraja</li>
                    <li>Foto Prewedding</li>
                    <li>Foto Wisuda</li>
                  </ul>
                </div>
              ))}
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
  