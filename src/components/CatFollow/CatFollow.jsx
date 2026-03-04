import { useEffect, useRef } from 'react';
import './CatFollow.scss';

const CatFollow = () => {
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const leftBlinkRef = useRef(null);
  const rightBlinkRef = useRef(null);
  
  const eyePosition = useRef({ leftX: 0, leftY: 0, rightX: 0, rightY: 0 });
  const targetPosition = useRef({ leftX: 0, leftY: 0, rightX: 0, rightY: 0 });
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      
      const mouseX = (e.clientX / innerWidth - 0.5) * 2;
      const mouseY = (e.clientY / innerHeight - 0.5) * 2;
      
      const maxMove = 8;
      
      targetPosition.current = {
        leftX: mouseX * maxMove,
        leftY: mouseY * maxMove,
        rightX: mouseX * maxMove,
        rightY: mouseY * maxMove
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      const smoothness = 0.15;
      
      eyePosition.current.leftX += (targetPosition.current.leftX - eyePosition.current.leftX) * smoothness;
      eyePosition.current.leftY += (targetPosition.current.leftY - eyePosition.current.leftY) * smoothness;
      eyePosition.current.rightX += (targetPosition.current.rightX - eyePosition.current.rightX) * smoothness;
      eyePosition.current.rightY += (targetPosition.current.rightY - eyePosition.current.rightY) * smoothness;

      if (leftPupilRef.current) {
        leftPupilRef.current.setAttribute('cx', 75 + eyePosition.current.leftX);
        leftPupilRef.current.setAttribute('cy', 90 + eyePosition.current.leftY);
      }
      if (rightPupilRef.current) {
        rightPupilRef.current.setAttribute('cx', 125 + eyePosition.current.rightX);
        rightPupilRef.current.setAttribute('cy', 90 + eyePosition.current.rightY);
      }

      if (leftBlinkRef.current) {
        leftBlinkRef.current.setAttribute('cx', 75 + eyePosition.current.leftX + 3);
        leftBlinkRef.current.setAttribute('cy', 90 + eyePosition.current.leftY - 3);
      }
      if (rightBlinkRef.current) {
        rightBlinkRef.current.setAttribute('cx', 125 + eyePosition.current.rightX + 3);
        rightBlinkRef.current.setAttribute('cy', 90 + eyePosition.current.rightY - 3);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="cat-follow">
      <svg viewBox="0 0 200 200" className="cat-svg">
        <path 
          d="M 35 76 L 55 25 L 85 55 Z" 
          fill="#14b8a6"
          strokeLinejoin="round"
        />
        <path 
          d="M 165 76 L 145 25 L 115 55 Z" 
          fill="#14b8a6"
          strokeLinejoin="round"
        />

        <path 
          d="M 42 68 L 56 35 L 78 57 Z" 
          fill="#5eead4"
        />
        <path 
          d="M 158 68 L 144 35 L 122 57 Z" 
          fill="#5eead4"
        />
        
        <ellipse cx="100" cy="100" rx="70" ry="60" fill="#14b8a6" />
        <ellipse cx="100" cy="100" rx="55" ry="45" fill="#5eead4" />
        
        <ellipse cx="75" cy="90" rx="18" ry="22" fill="#ffffff" />
        <ellipse cx="125" cy="90" rx="18" ry="22" fill="#ffffff" />
        
        <circle 
          ref={leftPupilRef}
          cx="75" 
          cy="90" 
          r="10" 
          fill="#1e293b"
          className="pupil"
        />
        <circle 
          ref={rightPupilRef}
          cx="125" 
          cy="90" 
          r="10" 
          fill="#1e293b"
          className="pupil"
        />
        
        <circle 
          ref={leftBlinkRef}
          cx="78" 
          cy="87" 
          r="3" 
          fill="#ffffff"
          opacity="0.9"
        />
        <circle 
          ref={rightBlinkRef}
          cx="128" 
          cy="87" 
          r="3" 
          fill="#ffffff"
          opacity="0.9"
        />

        <ellipse cx="100" cy="115" rx="8" ry="6" fill="#f790c5" />
        
        <path d="M 100 121 Q 90 130 80 125" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 100 121 Q 110 130 120 125" stroke="#1e293b" strokeWidth="2" fill="none" strokeLinecap="round" />

        <line x1="60" y1="110" x2="30" y2="106" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="60" y1="115" x2="30" y2="116" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="60" y1="120" x2="30" y2="126" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        
        <line x1="140" y1="110" x2="170" y2="106" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="140" y1="115" x2="170" y2="116" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="140" y1="120" x2="170" y2="126" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

        <ellipse cx="57" cy="113" rx="10" ry="6" fill="#f472b6" opacity="0.4" />
        <ellipse cx="140" cy="113" rx="10" ry="6" fill="#f472b6" opacity="0.4" />
      </svg>
    </div>
  );
};

export default CatFollow;