import React from 'react';
import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0% {
    d: path('M90,25 C110,15 130,35 150,25');
  }
  50% {
    d: path('M90,30 C110,20 130,40 150,30');
  }
  100% {
    d: path('M90,25 C110,15 130,35 150,25');
  }
`;

const LogoContainer = styled.div`
  display: inline-block;
  
  svg {
    #wave {
      animation: ${waveAnimation} 3s ease-in-out infinite;
    }
    
    text {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 32px;
    }
    
    #auraGradient {
      animation: gradientShift 3s ease infinite;
    }
  }
  
  @keyframes gradientShift {
    0% {
      stop-color: #00C9B1;
    }
    50% {
      stop-color: #6A67CE;
    }
    100% {
      stop-color: #00C9B1;
    }
  }
`;

interface LogoProps {
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ width = 200, height = 60 }) => {
  return (
    <LogoContainer>
      <svg width={width} height={height} viewBox="0 0 200 60">
        {/* Только AURA */}
        <text x="50" y="40" fill="url(#auraGradient)">AURA</text>
        <defs>
          <linearGradient id="auraGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C9B1">
              <animate
                attributeName="stop-color"
                values="#00C9B1;#6A67CE;#00C9B1"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#6A67CE">
              <animate
                attributeName="stop-color"
                values="#6A67CE;#00C9B1;#6A67CE"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          <path
            id="wave"
            d="M90,25 C110,15 130,35 150,25"
            stroke="url(#auraGradient)"
            strokeWidth="3"
            fill="none"
          />
        </defs>
        <circle cx="188" cy="18" r="5" fill="#FFD700">
          <animate
            attributeName="opacity"
            values="1;0.7;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </LogoContainer>
  );
};

export default Logo; 