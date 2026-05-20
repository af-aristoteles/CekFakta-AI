'use client';

import { useState, useEffect } from 'react';

export function useTypewriter(fullText: string, speed = 80, pauseDuration = 3000) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing mode
        const nextText = fullText.substring(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === fullText) {
          // Finished typing, pause
          timer = setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        // Deleting mode
        const nextText = fullText.substring(0, displayText.length - 1);
        setDisplayText(nextText);

        if (nextText === '') {
          setIsDeleting(false);
        }
      }

      // Deleting is twice as fast for dynamic feel
      const nextSpeed = isDeleting ? speed / 2 : speed;
      timer = setTimeout(handleTyping, nextSpeed);
    };

    // Calculate delay based on state
    const currentDelay = isDeleting && displayText === fullText ? pauseDuration : speed;
    timer = setTimeout(handleTyping, currentDelay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, fullText, speed, pauseDuration]);

  return { displayText, isDeleting };
}
