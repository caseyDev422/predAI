import { useState, useRef } from "react";

const useDebouncedHover = (callback: (heroId: number) => Promise<void> | void, delay = 500) => {
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (heroId: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(heroId);
      setIsHovering(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovering(false);
  };

  return { isHovering, handleMouseEnter, handleMouseLeave };
};

export default useDebouncedHover;