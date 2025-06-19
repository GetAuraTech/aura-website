import React from 'react';
import styled from 'styled-components';

const FooterBar = styled.footer`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: none;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  pointer-events: none;
  @media (max-width: 900px) {
    height: 38px;
  }
  @media (max-width: 600px) {
    height: 28px;
  }
`;

const FooterText = styled.div`
  color: rgba(255,255,255,0.45);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  font-weight: 400;
  user-select: none;
  pointer-events: auto;
  @media (max-width: 900px) {
    font-size: 0.74rem;
    letter-spacing: 0.06em;
  }
  @media (max-width: 600px) {
    font-size: 0.62rem;
    letter-spacing: 0.04em;
  }
`;

interface FooterProps {
  message: string;
}

const Footer: React.FC<FooterProps> = ({ message }) => (
  <FooterBar>
    <FooterText>{message}</FooterText>
  </FooterBar>
);

export default Footer; 