import "@fontsource-variable/nunito";
import { useState, useEffect } from "react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import ib from "../assets/islas-ballestas.jpg";
import rnp from "../assets/roja.JPG";
import huacachina from "../assets/huacachina.jpeg";

const images = [ib.src, rnp.src, huacachina.src];

const texts = [
  "Explora las Islas Ballestas, un paraíso natural",
  "Reserva Nacional de Paracas",
  "Vive la aventura en el oasis de la Huacachina",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[50rem]">
      {/* Fondo oscuro encima */}
      <div className="absolute w-full h-full bg-black/8 z-10" />

      {/* Carrusel de imágenes */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Background ${index + 1}`}
          className={`absolute w-full h-full left-0 object-cover transition-opacity duration-1000 ease-in-out ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Texto sobre las imágenes */}
      <div className="absolute z-20 bottom-10 left-10 text-white max-w-xl">
        <h1 className="text-5xl font-medium leading-tight drop-shadow-lg nunito-script">
          {texts[currentIndex]}
        </h1>
        <button className="mt-6 px-6 py-3 bg-green-800 shadow-lg text-white font-semibold rounded-full hover:bg-green-950 transition nunito-script">
          Reservar Ahora
        </button>
      </div>

      <div className="absolute right-5 bottom-10 z-30 flex flex-col gap-6 text-white text-2xl">
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 hover:bg-white/90 transition"
        >
          <FaTiktok className="text-green-900" />
        </a>
        <a
          href="https://www.tripadvisor.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 hover:bg-white/90 transition"
        >
          <SiTripadvisor className="text-green-900" />
        </a>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/70 hover:bg-white/90 transition"
        >
          <FaWhatsapp className="text-green-900" />
        </a>
      </div>
    </div>
  );
}
