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
  background: linear-gradient(135deg, #00c9b1 0%, #6a67ce 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(106, 103, 206, 0.4);
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
  margin-top: 18px;
  background: linear-gradient(90deg, #0096ff 0%, #6a67ce 100%);
  color: #fff;
  font-weight: 700;
  font-size: 0.98rem;
  padding: 10px 32px;
  border-radius: 24px;
  text-decoration: none;
  box-shadow: none;
  transition: transform 0.16s, background 0.3s, box-shadow 0.2s;
  letter-spacing: 0.08em;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 5;
  animation: ${buttonFadeIn} 1.2s cubic-bezier(.4,0,.2,1) 1s both, ${buttonFloat} 4.2s ease-in-out infinite;
  &:hover {
    transform: translateY(-2px) scale(1.04);
    background: linear-gradient(90deg, #6a67ce 0%, #0096ff 100%);
    box-shadow: 0 4px 24px 0 rgba(0,150,255,0.18);
  }
  margin-bottom: 0;

  @media (max-width: 900px) {
    font-size: 0.88rem;
    padding: 8px 22px;
  }
  @media (max-width: 600px) {
    font-size: 0.78rem;
    padding: 7px 14px;
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