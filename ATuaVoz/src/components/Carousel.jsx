import React, { useState } from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";

// Import your local images (adjust the paths to match your project structure)
import lona from '../assets/Lander.jpg';
import cfj from '../assets/CFJ_post.png';
import mag from '../assets/MAG_post.png';

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

  return (
    <Carousel 
      autoplay={true}
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {images.map((image, index) => (
        <CarouselImage 
          key={index}
          picture_url={image.url}
          title={image.title}
          description={image.description}
          className={image.className}
        />
      ))}
    </Carousel>
  );
}

const CarouselImage = ({ picture_url, title, description, className }) => {
  return (
    <div className="relative h-full w-full flex justify-center items-center">
      <img
        src={picture_url}
        alt={title}
        className={`max-h-[600px] ${className}`}
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80"
          >
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};