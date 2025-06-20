import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const glassFadeIn = keyframes`
  from { opacity: 0; transform: translateY(-18px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const GlassHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background: linear-gradient(90deg, rgba(10,37,64,0.72) 60%, rgba(0,150,255,0.10) 100%);
  box-shadow: 0 4px 32px 0 rgba(0,150,255,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.08);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 68px;
  padding: 0 48px;
  animation: ${glassFadeIn} 0.8s cubic-bezier(.4,0,.2,1);
  @media (max-width: 900px) {
    height: 54px;
    padding: 0 18px;
  }
  @media (max-width: 600px) {
    height: 38px;
    padding: 0 4px;
  }
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  @media (max-width: 900px) {
    gap: 18px;
  }
  @media (max-width: 600px) {
    gap: 8px;
  }
`;

const HeaderLink = styled(Link)`
  color: #eaf6ff;
  font-size: 1.08rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.04em;
  padding: 7px 18px;
  border-radius: 8px;
  background: none;
  transition: color 0.18s, background 0.18s, box-shadow 0.18s, transform 0.18s;
  position: relative;
  overflow: hidden;
  &:hover {
    color: #6a67ce;
    background: rgba(106,103,206,0.10);
    box-shadow: 0 2px 12px 0 rgba(0,150,255,0.10);
    transform: translateY(-2px) scale(1.04);
  }
  @media (max-width: 900px) {
    font-size: 0.92rem;
    padding: 4px 10px;
    border-radius: 6px;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 2px 6px;
    border-radius: 4px;
  }
`;

const HeaderA = styled.a`
  color: #eaf6ff;
  font-size: 1.08rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.04em;
  padding: 7px 18px;
  border-radius: 8px;
  background: none;
  transition: color 0.18s, background 0.18s, box-shadow 0.18s, transform 0.18s;
  position: relative;
  overflow: hidden;
  &:hover {
    color: #00c9b1;
    background: rgba(0,201,177,0.10);
    box-shadow: 0 2px 12px 0 rgba(0,201,177,0.10);
    transform: translateY(-2px) scale(1.04);
  }
  @media (max-width: 900px) {
    font-size: 0.92rem;
    padding: 4px 10px;
    border-radius: 6px;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 2px 6px;
    border-radius: 4px;
  }
`;

const CenterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  min-width: 0;
  pointer-events: none;
  user-select: none;
  opacity: 0.98;
  @media (max-width: 900px) {
    transform: scale(0.8);
  }
  @media (max-width: 600px) {
    transform: scale(0.6);
  }
`;

const LangWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  min-width: 120px;
  justify-content: flex-end;
  background: rgba(10,37,64,0.18);
  border-radius: 12px;
  box-shadow: 0 2px 8px 0 rgba(0,150,255,0.08);
  padding: 2px 10px;
  transition: background 0.18s, box-shadow 0.18s;
  @media (max-width: 900px) {
    gap: 4px;
    height: 22px;
    min-width: 80px;
    border-radius: 8px;
    padding: 1px 6px;
  }
  @media (max-width: 600px) {
    gap: 2px;
    height: 16px;
    min-width: 54px;
    border-radius: 6px;
    padding: 0 3px;
  }
`;

const LangButton = styled.button<{active?: boolean}>`
  padding: 3px 14px;
  border-radius: 7px;
  border: none;
  background: ${({active}) => active ? 'linear-gradient(90deg, #0096ff 0%, #6a67ce 100%)' : 'rgba(10, 37, 64, 0.10)'};
  color: ${({active}) => active ? '#fff' : 'rgba(234,246,255,0.38)'};
  font-weight: 700;
  font-size: 0.98rem;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, transform 0.18s, box-shadow 0.18s;
  outline: none;
  box-shadow: ${({active}) => active ? '0 0 8px 0 rgba(0,150,255,0.18)' : 'none'};
  display: flex;
  align-items: center;
  height: 28px;
  opacity: 0.96;
  &:hover {
    background: linear-gradient(90deg, #6a67ce 0%, #0096ff 100%);
    color: #fff;
    opacity: 1;
    transform: scale(1.08);
    box-shadow: 0 2px 12px 0 rgba(0,150,255,0.18);
  }
  @media (max-width: 900px) {
    padding: 2px 8px;
    font-size: 0.82rem;
    border-radius: 6px;
    height: 18px;
  }
  @media (max-width: 600px) {
    padding: 1px 5px;
    font-size: 0.68rem;
    border-radius: 5px;
    height: 12px;
  }
`;

interface HeaderProps {
  language?: 'ru' | 'en';
  onLanguageChange?: (lang: 'ru' | 'en') => void;
}

const Header: React.FC<HeaderProps> = ({ language = 'en', onLanguageChange }) => {
  return (
    <GlassHeader>
      <HeaderContent>
        <LeftBlock>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderA href="mailto:hello@getaura.tech">Contacts</HeaderA>
        </LeftBlock>
        <CenterLogo>
          <Logo width={120} height={36} />
        </CenterLogo>
        <LangWrapper>
          <LangButton
            active={language === 'ru'}
            onClick={() => onLanguageChange && onLanguageChange('ru')}
            aria-label="Русский"
          >RU</LangButton>
          <LangButton
            active={language === 'en'}
            onClick={() => onLanguageChange && onLanguageChange('en')}
            aria-label="English"
          >EN</LangButton>
        </LangWrapper>
      </HeaderContent>
    </GlassHeader>
  );
};

export default Header; 