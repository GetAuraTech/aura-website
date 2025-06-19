import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
`;

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

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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
    height: 340px;
    min-width: 0;
    max-width: 100vw;
  }
`;

const AuraEffect = styled.div<{bg: string}>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  animation: ${pulse} 6s infinite ease-in-out;
  filter: blur(20px);
  z-index: 1;
  transition: background 2s;
`;

const Ring = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(0, 201, 177, 0.3);
  z-index: 2;
  animation: ${rotate} 20s linear infinite;
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
    font-size: 38px;
    letter-spacing: 2px;
  }
`;

const Particles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const particleMove = keyframes`
  0% { transform: rotate(0deg) translateX(260px) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: rotate(360deg) translateX(260px) rotate(-360deg); opacity: 0; }
`;

const Particle = styled.div<{
  top: number;
  left: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}>`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${({ color }) => color};
  border-radius: 50%;
  animation: ${particleMove} ${({ duration }) => duration}s linear ${({ delay }) => delay}s infinite;
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

const AURA_COLORS = [
  'rgba(0, 150, 255, 0.3)'  // только синий
];

const PARTICLE_COLORS = [
  '#0096ff',
  'rgba(0,150,255,0.8)'
];

const PARTICLE_COUNT = 80;

interface AuraLogo3DProps {
  subtitle?: string;
  subtitleButtonText?: string;
}

const AuraLogo3D: React.FC<AuraLogo3DProps> = ({ subtitle, subtitleButtonText }) => {
  const [auraColorIdx, setAuraColorIdx] = useState(0);
  const [auraBg, setAuraBg] = useState(
    `radial-gradient(circle at center, ${AURA_COLORS[0]} 0%, rgba(106, 103, 206, 0.15) 40%, transparent 70%)`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAuraColorIdx((idx) => (idx + 1) % AURA_COLORS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAuraBg(
      `radial-gradient(circle at center, ${AURA_COLORS[auraColorIdx]} 0%, rgba(106, 103, 206, 0.15) 40%, transparent 70%)`
    );
  }, [auraColorIdx]);

  // Генерируем частицы один раз
  const particles = useRef(
    Array.from({ length: PARTICLE_COUNT }).map(() => {
      const size = Math.random() * 4 + 2;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
      const angle = Math.random() * 360;
      // Для равномерного распределения по окружности
      const top = 50 + 45 * Math.sin((angle * Math.PI) / 180);
      const left = 50 + 45 * Math.cos((angle * Math.PI) / 180);
      return { size, duration, delay, color, top, left };
    })
  );

  return (
    <AuraContainer>
      <AuraEffect bg={auraBg} />
      <Ring />
      <Particles>
        {particles.current.map((p, i) => (
          <Particle
            key={i}
            size={p.size}
            duration={p.duration}
            delay={p.delay}
            color={p.color}
            top={p.top}
            left={p.left}
          />
        ))}
      </Particles>
      <LogoMain>AURA</LogoMain>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {subtitleButtonText && (
        <LogoButton href="https://t.me/getaura_bot" target="_blank" rel="noopener noreferrer">{subtitleButtonText}</LogoButton>
      )}
    </AuraContainer>
  );
};

export default AuraLogo3D; 