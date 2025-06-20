import React from 'react';
import styled from 'styled-components';
import { locales, LocaleKey } from '../locales';

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
  width: 100%;
  text-align: center;
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

const LangSimpleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  height: 28px;
  margin-left: auto;
  pointer-events: auto;
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

interface FooterProps {
  message: string;
  showLangToggle?: boolean;
  language?: 'ru' | 'en';
  onLanguageChange?: (lang: 'ru' | 'en') => void;
}

const Footer: React.FC<FooterProps> = ({ message, showLangToggle, language = 'en', onLanguageChange }) => (
  <FooterBar>
    <FooterText>{message}</FooterText>
    {showLangToggle && (
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
    )}
  </FooterBar>
);

export default Footer; 