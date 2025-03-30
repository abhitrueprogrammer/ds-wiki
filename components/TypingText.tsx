// components/TypingText.tsx
'use client';

import { useEffect, useState } from 'react';

export default function TypingText({
  text,
  speed = 30,
  className = '',
  onComplete = () => {}
}: {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}) {
  const [displayedText, setDisplayedText] = useState<React.ReactNode[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const currentChar = text[currentIndex];
      const timeout = setTimeout(() => {
        setDisplayedText(prev => {
          // Handle newline characters
          if (currentChar === '\n') {
            return [...prev, <br key={currentIndex} />];
          } else {
            // For normal characters, add them to the last element if it's a string
            if (prev.length > 0 && typeof prev[prev.length - 1] === 'string') {
              const newPrev = [...prev];
              newPrev[newPrev.length - 1] += currentChar;
              return newPrev;
            }
            return [...prev, currentChar];
          }
        });
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <div className={`${className}`}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
}