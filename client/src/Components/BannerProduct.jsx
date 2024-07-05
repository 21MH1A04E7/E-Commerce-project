import React, { useEffect, useState } from "react";
import image1 from "../assets/banner/img1.webp";
import image2 from "../assets/banner/img2.webp";
import image3 from "../assets/banner/img3.jpg";
import image4 from "../assets/banner/img4.jpg";
import image5 from "../assets/banner/img5.webp";

import image1Mobile from "../assets/banner/img1_mobile.jpg";
import image2Mobile from "../assets/banner/img2_mobile.webp";
import image3Mobile from "../assets/banner/img3_mobile.jpg";
import image4Mobile from "../assets/banner/img4_mobile.jpg";
import image5Mobile from "../assets/banner/img5_mobile.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

// Banner Product Component
function BannerProduct() {
  const [currentImage, setCurrentImage] = useState(0);
  const desktopImages = [image1, image2, image3, image4, image5];
  const mobileImages = [
    image1Mobile,
    image2Mobile,
    image3Mobile,
    image4Mobile,
    image5Mobile,
  ];

  const nextImage = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentImage !== 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (desktopImages.length - 1 > currentImage) {
        nextImage();
      } else {
        setCurrentImage(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="container mx-auto px-4 rounded-lg overflow-hidden">
      <div className="relative h-56 md:h-72 w-full bg-slate-200">
        <div className="absolute inset-0 z-10 items-center justify-between px-4 md:flex hidden">
          <button
            onClick={prevImage}
            className="bg-white shadow-md rounded-full p-1 hover:bg-gray-100"
          >
            <FaAngleLeft className="text-gray-700" />
          </button>
          <button
            onClick={nextImage}
            className="bg-white shadow-md rounded-full p-1 hover:bg-gray-100"
          >
            <FaAngleRight className="text-gray-700" />
          </button>
        </div>

        {/* Desktop and Tablet Version */}
        <div className="hidden md:flex h-full w-full overflow-hidden">
          {desktopImages.map((imageURL, index) => (
            <div
              className="w-full h-full min-w-full transition-transform duration-500"
              key={index}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img src={imageURL} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Mobile Version */}
        <div className="flex h-full w-full overflow-hidden md:hidden">
          {mobileImages.map((imageURL, index) => (
            <div
              className="w-full h-full min-w-full transition-transform duration-500"
              key={index}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <img src={imageURL} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerProduct;
