'use client'
import React, { useState, useEffect, useRef } from "react";

const Banner = ({ items, autoPlaySpeed = 3000 }) => {
  // 1. Clone first item to the end, and last item to the beginning
  const extendedItems = [
    items[items.length - 1],
    ...items,
    items[0]
  ];

  // Start at index 1 (the actual first item)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  // 2. Handle automatic scrolling
  useEffect(() => {
    if (isHovered) return; // Pause on hover

    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }, autoPlaySpeed);

    return () => clearInterval(timerRef.current);
  }, [isHovered, autoPlaySpeed]);

  // 3. Handle infinite loop snap logic without a visible glitch
  const handleTransitionEnd = () => {
    // If we transition past the last real item into the cloned first item
    if (currentIndex === extendedItems.length - 1) {
      setIsTransitioning(false); // Turn off transition animation
      setCurrentIndex(1);       // Snap instantly back to real first item
    }
    // If we transition backward past the first real item into cloned last item
    else if (currentIndex === 0) {
      setIsTransitioning(false); // Turn off transition animation
      setCurrentIndex(extendedItems.length - 2); // Snap instantly to real last item
    }
  };

  return (
    <div 
      className="carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedItems.map((item, index) => (
          <div className="carousel-slide" key={index}>
            <img src={item} alt={`Slide ${index}`}  className="w-[100%] h-[70%] md:h-[50%] block m-auto rounded-lg object-cover md:object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;