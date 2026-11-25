import { useState } from 'react';

export default function LocalImage({ src, fallback, alt, className = '', loading = 'lazy' }) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading={loading}
      className={className}
      onError={() => {
        if (fallback && imageSrc !== fallback) setImageSrc(fallback);
      }}
    />
  );
}
