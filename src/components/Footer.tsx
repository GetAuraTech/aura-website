import React from 'react';
import styled from 'styled-components';
import { locales, LocaleKey } from '../locales';

const FooterBar = styled.footer`
  width: 100%;
  background: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 60px 40px;
  margin-top: 0;
  @media (max-width: 900px) {
    padding: 50px 30px;
  }
  @media (max-width: 600px) {
    padding: 40px 20px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  &:hover {
    color: #00c9b1;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const FooterText = styled.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const LangSimpleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LangSimpleButton = styled.button<{active?: boolean}>`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background: ${({active}) => active ? 'linear-gradient(135deg, #00c9b1 0%, #6a67ce 100%)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${({active}) => active ? '#fff' : 'rgba(255, 255, 255, 0.6)'};
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  &:hover {
    background: ${({active}) => active ? 'linear-gradient(135deg, #00c9b1 0%, #6a67ce 100%)' : 'rgba(255, 255, 255, 0.1)'};
    color: #fff;
  }
  @media (max-width: 600px) {
    padding: 6px 12px;
    font-size: 0.85rem;
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
    <FooterContent>
      <FooterTop>
        <FooterLinks>
          <FooterLink href="https://getaura.tech" target="_blank" rel="noopener noreferrer">
            GetAura.tech
          </FooterLink>
          <FooterLink href="mailto:hello@getaura.tech">
            hello@getaura.tech
          </FooterLink>
        </FooterLinks>
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
      </FooterTop>
      <FooterBottom>
        <FooterText>{message}</FooterText>
      </FooterBottom>
    </FooterContent>
  </FooterBar>
);

export default Footer; 