import { useEffect, useState } from "react";
import img1 from "../images/imag1.jpg";
import img2 from "../images/imag2.jpg";
import img3 from "../images/imag3.jpg";

const images = [img1, img2, img3];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden p-10 px-4 mt-4 rounded-xl mb-4">
      <img
        src={images[currentIndex]}
        alt={`Banner ${currentIndex + 1}`}
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 text-white p-4 rounded-md">
        <p className="text-lg font-semibold mb-4">
          Bienvenido a nuestra tienda. Explora recetas exclusivas!
        </p>
        <button className="hover:transition-colors hover:duration-500 hover:bg-cyan-800 bg-cyan-100 text-black ease-in-out font-semibold py-2 px-4 rounded">
          Ver mas
        </button>
      </div>
    </div>
  );
};
