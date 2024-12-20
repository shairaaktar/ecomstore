// import React, { useState } from 'react';

// const CustomCarousel = ({ slides }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="relative overflow-hidden">
//       <div
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             <img src={slide} alt={`Slide ${index}`} />
//           </div>
//         ))}
//       </div>
//       <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2">Prev</button>
//       <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2">Next</button>
//     </div>
//   );
// };

// export default CustomCarousel;

// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// // import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS

// const CustomCarousel = () => (
//   <Carousel>
//     <div>
//       <img src="https://example.com/image1.jpg" alt="Image 1" />
//     </div>
//     <div>
//       <img src="https://example.com/image2.jpg" alt="Image 2" />
//     </div>
//   </Carousel>
// );

// export default CustomCarousel;

import React, { useState } from 'react';


const CustomCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="mt-6 grid gap-y-7 lg:grid-cols-2 lg:gap-x-10">
      {images && images.length ? (
        <div className="relative">
          {/* Carousel Image */}
          <div
            className="relative w-full h-55 object-cover rounded-lg"
            style={{
              backgroundImage: `url(${images[currentIndex].url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
           
              <img
                src={images[currentIndex].url}
                alt={title}
                className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
           
          </div>

          {/* Carousel Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
          >
            Next
          </button>

          {/* Optional: Indicator dots */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-white' : 'bg-gray-500'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>No images available</div>
      )}
    </div>
  );
};

export default CustomCarousel;
