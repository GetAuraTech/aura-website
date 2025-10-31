import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

const buttonFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-4px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(4px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(7px); }
  to { opacity: 1; transform: translateY(0); }
`;

const buttonFadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(76, 194, 233, 0.4),
                0 0 40px rgba(156, 67, 254, 0.3),
                0 4px 20px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(76, 194, 233, 0.6),
                0 0 60px rgba(156, 67, 254, 0.5),
                0 6px 30px rgba(0, 0, 0, 0.3);
  }
`;

const AuraContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 600px) {
    width: 98vw;
    height: 520px;
    min-width: 0;
    max-width: 100vw;
  }
`;

const LogoMain = styled.div`
  position: relative;
  font-size: 120px;
  font-weight: 700;
  background: linear-gradient(135deg, #4CC2E9 0%, #9C43FE 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(156, 67, 254, 0.4);
  z-index: 3;
  letter-spacing: 5px;
  animation: ${float} 3s infinite ease-in-out;
  user-select: none;
  margin-bottom: 8px;

  @media (max-width: 900px) {
    font-size: 70px;
  }
  @media (max-width: 600px) {
    font-size: 74px;
    letter-spacing: 4px;
  }
`;

const Subtitle = styled.div`
  margin-top: 0;
  margin-bottom: 14px;
  color: rgba(255,255,255,0.44);
  font-size: 0.92rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: center;
  max-width: 90%;
  line-height: 1.35;
  z-index: 4;
  animation: ${fadeIn} 1.1s cubic-bezier(.4,0,.2,1) 0.4s both, ${float} 3.5s ease-in-out infinite;
  user-select: none;

  @media (max-width: 900px) {
    font-size: 0.82rem;
  }
  @media (max-width: 600px) {
    font-size: 0.74rem;
    line-height: 1.25;
  }
`;

const LogoButton = styled.a`
  display: inline-block;
  position: relative;
  margin-top: 18px;
  background: linear-gradient(270deg, #4CC2E9, #9C43FE, #4CC2E9, #9C43FE);
  background-size: 400% 400%;
  color: #fff;
  font-weight: 700;
  font-size: 0.98rem;
  padding: 12px 36px;
  border-radius: 50px;
  text-decoration: none;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  letter-spacing: 0.08em;
  border: 2px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  outline: none;
  z-index: 5;
  animation:
    ${buttonFadeIn} 1.2s cubic-bezier(.4,0,.2,1) 1s both,
    ${buttonFloat} 4.2s ease-in-out infinite,
    ${gradientShift} 8s ease infinite,
    ${glowPulse} 3s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    padding: 2px;
    background: linear-gradient(270deg, #4CC2E9, #9C43FE, #4CC2E9);
    background-size: 400% 400%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
    animation: ${gradientShift} 8s ease infinite;
  }

  &:hover {
    transform: translateY(-4px) scale(1.05);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &:hover::before {
    opacity: 1;
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }

  margin-bottom: 0;

  @media (max-width: 900px) {
    font-size: 0.88rem;
    padding: 10px 28px;
  }
  @media (max-width: 600px) {
    font-size: 0.78rem;
    padding: 8px 20px;
  }
`;

interface AuraLogo3DProps {
  subtitle?: string;
  subtitleButtonText?: string;
}

const AuraLogo3D: React.FC<AuraLogo3DProps> = ({ subtitle, subtitleButtonText }) => {
  return (
    <AuraContainer>
      <LogoMain>AURA</LogoMain>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {subtitleButtonText && (
        <LogoButton href="https://t.me/getaura_bot" target="_blank" rel="noopener noreferrer">{subtitleButtonText}</LogoButton>
      )}
    </AuraContainer>
  );
};

export default AuraLogo3D; 