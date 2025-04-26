import React, { useState } from "react";

function ImageSlider({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-t-xl">
      {/* Imagen principal */}
      <img
        src={currentImage}
        alt=""
        className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
      />

      {/* Puntos de navegación */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-sm rounded-full px-2 py-1 flex gap-1 shadow-sm">
        {images.map((img, index) => {
          const isSelected = currentImage === img;
          return (
            <button
              key={index}
              onClick={() => setCurrentImage(img)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                isSelected ? "bg-green-900" : "bg-gray-400"
              }`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;
