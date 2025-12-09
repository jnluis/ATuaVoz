import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import lona from '../assets/carousel_images/Lander.webp';
import cfj from '../assets/carousel_images/CFJ_post.webp';
import mag from '../assets/carousel_images/MAG_post.webp';

export default function CarouselWithContent() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of your local images with additional scaling options
  const images = [
    { 
      url: lona, 
      className: "object-cover" // full image
    },
    { 
      url: cfj, 
      className: "object-scale-down h-fit w-full" // scaled down to fit height
    },
    { 
      url: mag, 
      className: "object-contain h-fit w-full" // contained within dimensions
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 6500); // Change slide every 6.5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => 
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    // Tá com altura específica de acordo com as imagens que temos
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Carousel Images */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <CarouselImage 
              picture_url={image.url}
              title={image.title}
              description={image.description}
              className={image.className}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <FaArrowLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <FaArrowRight size={24} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-2 left-1/2 z-50 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`block h-2 cursor-pointer rounded-2xl transition-all ${
              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const CarouselImage = ({ picture_url, title, description, className }) => {
  return (
    <div className="relative h-full w-full flex justify-center items-center">
      <img
        src={picture_url}
        alt={title || "Carousel image"}
        className={`max-h-[600px] ${className}`}
      />
      {(title || description) && (
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
          <div className="w-3/4 text-center md:w-2/4">
            {title && (
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {title}
              </h1>
            )}
            {description && (
              <p className="mb-12 text-lg text-white opacity-80">
                {description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

CarouselImage.propTypes = {
  picture_url: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string
};

CarouselImage.defaultProps = {
  title: '',
  description: '',
  className: ''
};