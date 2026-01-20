import { useEffect, useState } from "react";

function LocationBubble({ images, loading }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 500);

    return () => clearInterval(interval);
  }, [images]);

  if (loading) {
    return (
      <></>
    );
  }

  if (!images.length) return null;

  return (
    <div className="absolute z-50 bg-white rounded-xl shadow-lg w-[125px] h-[125px] overflow-hidden flex items-center justify-center">
      <img
        key={images[currentIndex]}
        src={images[currentIndex]}
        className="w-[200px] h-[200px] object-cover rounded-xl transition-opacity duration-300"
        style={{ opacity: 1 }}
        alt="Location preview"
      />
    </div>
  );
}

export default LocationBubble
