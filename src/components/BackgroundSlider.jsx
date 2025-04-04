import { useState, useEffect } from "react";
import ib from "../assets/islas-ballestas.jpg";
import rnp from "../assets/roja.jpeg";
import huacachina from "../assets/huacachina.jpeg";

const images= [ib.src, rnp.src, huacachina.src];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[90rem] flex flex-row justify-between p-4 items-center">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Background ${index + 1}`}
          className={`absolute w-full h-full left-0 object-cover transition-opacity duration-500 ease-in-out ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <button
        className="bg-black text-white rounded-full p-2 z-10"
        aria-label="Previous Slide"
        onClick={prevImage}
      >
        &lt;
      </button>

      <button
        className="bg-black text-white rounded-full p-2 z-10"
        aria-label="Next Slide"
        onClick={nextImage}
      >
        &gt;
      </button>
    </div>
  );
}
