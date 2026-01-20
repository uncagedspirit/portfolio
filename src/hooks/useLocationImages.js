import { useRef, useState } from "react";

export function useLocationImages() {
  const cache = useRef({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (location) => {
    if (!location) return;
    if (cache.current[location]) {
      setImages(cache.current[location]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          location
        )}&per_page=10`,
        {
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
          },
        }
      );

      const data = await res.json();
      const urls = data.results.map((img) => img.urls.small);

      cache.current[location] = urls;
      setImages(urls);
    } catch {
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  return { images, loading, fetchImages };
}
