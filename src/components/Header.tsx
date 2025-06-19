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
  padding: 0 0;
  @media (max-width: 900px) {
    height: 46px;
  }
  @media (max-width: 600px) {
    height: 38px;
    padding: 0 0;
  }
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;
  @media (max-width: 900px) {
    padding: 0 0;
  }
  @media (max-width: 600px) {
    padding: 0 0;
  }
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

const LangSimpleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 28px;
  margin: 0 auto;
  @media (max-width: 900px) {
    gap: 3px;
    height: 22px;
  }
  @media (max-width: 600px) {
    gap: 2px;
    height: 18px;
  }
`;

const LangSimpleButton = styled.button<{active?: boolean}>`
  padding: 2px 10px;
  border-radius: 7px;
  border: none;
  background: ${({active}) => active ? 'linear-gradient(90deg, #0096ff 0%, #6a67ce 100%)' : 'rgba(10, 37, 64, 0.10)'};
  color: ${({active}) => active ? '#fff' : 'rgba(234,246,255,0.38)'};
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  outline: none;
  box-shadow: ${({active}) => active ? '0 0 4px 0 rgba(0,150,255,0.10)' : 'none'};
  display: flex;
  align-items: center;
  height: 24px;
  @media (max-width: 900px) {
    padding: 1px 7px;
    font-size: 0.74rem;
    border-radius: 6px;
    height: 18px;
  }
  @media (max-width: 600px) {
    padding: 0 5px;
    font-size: 0.68rem;
    border-radius: 5px;
    height: 14px;
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
        <LangSimpleWrapper>
          <LangSimpleButton
            active={language === 'ru'}
            onClick={() => onLanguageChange && onLanguageChange('ru')}
            aria-label="Русский"
          >RU</LangSimpleButton>
          <LangSimpleButton
            active={language === 'en'}
            onClick={() => onLanguageChange && onLanguageChange('en')}
            aria-label="English"
          >EN</LangSimpleButton>
        </LangSimpleWrapper>
      </Nav>
    </HeaderBar>
  );
};

export default Header; 