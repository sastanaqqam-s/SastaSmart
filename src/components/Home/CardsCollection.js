import React, { useRef, useEffect, useState } from 'react';
import mobile from "../../Assets/mobile.webp";

function ImageRow({ images }) {
  const imageRowRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldScroll(!entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    observer.observe(imageRowRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!shouldScroll) {
      const scrollInterval = setInterval(() => {
        imageRowRef.current.scrollLeft += 1; // Adjust scroll speed as needed
      }, 10); // Adjust interval as needed

      return () => clearInterval(scrollInterval);
    }
  }, [shouldScroll]);

  return (
    <div
      ref={imageRowRef}
      style={{ overflowX: 'scroll', whiteSpace: 'nowrap',overflow:'hidden' }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={mobile}
          alt={image.alt}
          style={{ width: '200px', height: 'auto', marginRight: '10px' }}
        />
      ))}
    </div>
  );
}

// Example usage:
const images = [
  { src: 'image1.jpg', alt: 'Image 1' },
  { src: 'image2.jpg', alt: 'Image 2' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  { src: 'image3.jpg', alt: 'Image 3' },
  // Add more image objects as needed
];

function App() {
  return (
    <div style={{marginTop:"100px"}}>
     
      <ImageRow images={images} />
      
    </div>
  );
}

export default App;
