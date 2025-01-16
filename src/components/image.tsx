import { useState } from 'react';
import { defaultImages } from '../assets/images';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: keyof typeof defaultImages;
  withBlur?: boolean;
}

export const Image = ({ 
  src, 
  alt, 
  fallbackType = 'profile',
  withBlur = true,
  className = '',
  ...props 
}: ImageProps) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleError = () => {
    setError(true);
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  const actualSrc = error ? defaultImages[fallbackType] : src;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {withBlur && !loaded && (
        <div className="absolute inset-0 bg-background/20 animate-pulse" />
      )}
      <img
        src={actualSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
};
