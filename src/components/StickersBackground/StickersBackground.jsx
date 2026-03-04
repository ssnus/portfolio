import { useEffect, useRef, useState } from 'react';
import './StickersBackground.scss';

const HeartSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const lerp = (start, end, factor) => start + (end - start) * factor;

const StickersBackground = ({ count = 35 }) => {
  const containerRef = useRef(null);
  const stickersRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  
  const [stickers] = useState(() => 
    Array.from({ length: count }, (_, i) => {
      const hue = Math.random() > 0.5 ? 340 : 320;
      const saturation = Math.random() * 30 + 70;
      const lightness = Math.random() * 20 + 75;
      
      return {
        id: i,
        baseX: Math.random() * 100,
        baseY: Math.random() * 100,
        size: Math.random() * 25 + 20,
        opacity: Math.random() * 0.3 + 0.2,
        repelStrength: Math.random() * 100 + 150,
        offsetX: 0,
        offsetY: 0,
        hue,
        saturation,
        lightness,
        floatSpeed: Math.random() * 0.02 + 0.01,
        floatOffset: Math.random() * Math.PI * 2
      };
    })
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;
    let startTime = Date.now();

    const animate = () => {
      const { x: mouseX, y: mouseY } = mouseRef.current;
      const container = containerRef.current;
      const elapsed = (Date.now() - startTime) / 1000;
      
      if (!container) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      const containerRect = container.getBoundingClientRect();

      stickersRef.current.forEach((el, index) => {
        if (!el) return;
        const sticker = stickers[index];

        const floatY = Math.sin(elapsed * sticker.floatSpeed + sticker.floatOffset) * 8;
        const floatX = Math.cos(elapsed * sticker.floatSpeed * 0.7 + sticker.floatOffset) * 4;

        if (mouseX !== null && mouseY !== null) {
          const baseScreenX = containerRect.left + (sticker.baseX / 100) * containerRect.width;
          const baseScreenY = containerRect.top + (sticker.baseY / 100) * containerRect.height;

          const dx = mouseX - baseScreenX;
          const dy = mouseY - baseScreenY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repelRadius = 350;

          if (distance < repelRadius && distance > 1) {
            const force = Math.pow((repelRadius - distance) / repelRadius, 2);
            const angle = Math.atan2(dy, dx);
            
            const targetX = -Math.cos(angle) * force * sticker.repelStrength;
            const targetY = -Math.sin(angle) * force * sticker.repelStrength;
            
            sticker.offsetX = lerp(sticker.offsetX, targetX, 0.12);
            sticker.offsetY = lerp(sticker.offsetY, targetY, 0.12);
          }
        }

        el.style.transform = `translate(${sticker.offsetX + floatX}px, ${sticker.offsetY + floatY}px)`;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [stickers]);

  return (
    <div className="stickers-background" ref={containerRef}>
      {stickers.map((sticker) => (
        <div
          key={sticker.id}
          ref={(el) => (stickersRef.current[sticker.id] = el)}
          className="sticker"
          style={{
            left: `${sticker.baseX}%`,
            top: `${sticker.baseY}%`,
            width: `${sticker.size}px`,
            height: `${sticker.size}px`,
            opacity: sticker.opacity,
            color: `hsl(${sticker.hue}, ${sticker.saturation}%, ${sticker.lightness}%)`,
            '--bubble-hue': sticker.hue,
            '--bubble-sat': sticker.saturation,
            '--bubble-light': sticker.lightness,
            willChange: 'transform, opacity'
          }}
        >
          <HeartSVG />
        </div>
      ))}
    </div>
  );
};

export default StickersBackground;