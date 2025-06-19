import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeaderBar = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: none;
  box-shadow: none;
  backdrop-filter: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  animation: ${fadeIn} 0.7s cubic-bezier(.4,0,.2,1);
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 32px 0 0;
  position: relative;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
`;

const NavLink = styled.a`
  color: #eaf6ff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 0.04em;
  position: relative;
  transition: color 0.2s;
  padding: 10px 0;
  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 0;
    background: linear-gradient(90deg, #0096ff, #6a67ce);
    transition: width 0.3s;
    border-radius: 2px;
    margin-top: 2px;
  }
  &:hover {
    color: #6a67ce;
  }
  &:hover:after {
    width: 100%;
  }
`;

const RightBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const LangToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 72px;
  height: 26px;
  background: rgba(10, 37, 64, 0.38);
  border-radius: 13px;
  user-select: none;
  @media (max-width: 900px) {
    width: 60px;
    height: 22px;
  }
  @media (max-width: 600px) {
    width: 48px;
    height: 18px;
  }
`;

const LangSlider = styled.div<{active: 'ru' | 'en'}>`
  position: absolute;
  top: 2px;
  left: ${({active}) => active === 'ru' ? '3px' : '37px'};
  width: 32px;
  height: 22px;
  background: linear-gradient(90deg, rgba(0,150,255,0.18) 0%, rgba(106,103,206,0.13) 100%);
  border-radius: 11px;
  transition: left 0.22s cubic-bezier(.4,0,.2,1);
  z-index: 1;
  @media (max-width: 900px) {
    left: ${({active}) => active === 'ru' ? '2px' : '30px'};
    width: 24px;
    height: 16px;
    border-radius: 8px;
  }
  @media (max-width: 600px) {
    left: ${({active}) => active === 'ru' ? '1px' : '19px'};
    width: 14px;
    height: 10px;
    border-radius: 5px;
  }
`;

const LangToggleButton = styled.button<{active?: boolean}>`
  position: relative;
  z-index: 2;
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  color: ${({active}) => active ? '#eaf6ff' : 'rgba(234,246,255,0.38)'};
  font-weight: 600;
  font-size: 0.92rem;
  cursor: pointer;
  border-radius: 11px;
  transition: color 0.18s;
  outline: none;
  @media (max-width: 900px) {
    font-size: 0.82rem;
    border-radius: 8px;
  }
  @media (max-width: 600px) {
    font-size: 0.7rem;
    border-radius: 5px;
  }
`;

interface HeaderProps {
  language?: 'ru' | 'en';
  onLanguageChange?: (lang: 'ru' | 'en') => void;
  messages: {
    contacts: string;
    getAura: string;
  };
}

const Header: React.FC<HeaderProps> = ({ language = 'en', onLanguageChange, messages }) => {
  return (
    <HeaderBar>
      <Nav style={{flex: '1 1 0', justifyContent: 'center'}}>
        <LangToggleWrapper>
          <LangSlider active={language} />
          <LangToggleButton
            active={language === 'ru'}
            onClick={() => onLanguageChange && onLanguageChange('ru')}
            aria-label="Русский"
          >RU</LangToggleButton>
          <LangToggleButton
            active={language === 'en'}
            onClick={() => onLanguageChange && onLanguageChange('en')}
            aria-label="English"
          >EN</LangToggleButton>
        </LangToggleWrapper>
      </Nav>
    </HeaderBar>
  );
};

export default Header; 