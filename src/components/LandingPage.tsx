import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import AuraLogo3D from './AuraLogo3D';
import Footer from './Footer';
import { locales, LocaleKey } from '../locales';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  :root {
    --deep-blue: #0A2540;
    --teal: #00C9B1;
    --purple: #6A67CE;
    --gold: #FFD700;
  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    background: linear-gradient(135deg, #070a13 0%, #101326 100%);
    min-height: 100vh;
    overflow: hidden;
  }
`;

const headerFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 70vw;
  max-width: 900px;
  min-width: 0;
  margin: 0 auto;
  padding: 1.2rem 0;
  background: transparent;
  display: flex;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transform: translateY(0);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation: ${headerFadeIn} 0.7s cubic-bezier(0.4,0,0.2,1);
  &.scrolled {
    padding: 0.8rem 0;
    background: rgba(10, 37, 64, 0.75);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
  @media (max-width: 900px) {
    width: 96vw;
    max-width: 100vw;
    margin: 0 auto;
    padding: 0.8rem 12px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
  @media (max-width: 600px) {
    width: 99vw;
    max-width: 100vw;
    margin: 0 auto;
    padding: 0.5rem 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;
  flex: 0 0 auto;
  @media (max-width: 900px) {
    gap: 6vw;
    flex: none;
  }
  @media (max-width: 600px) {
    gap: 6vw;
    flex: none;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  @media (max-width: 900px) {
    flex: none;
  }
  @media (max-width: 600px) {
    flex: none;
  }
`;

const HeaderCenter = styled.div`
  flex: 1 1 auto;
  @media (max-width: 900px) {
    flex: none;
  }
  @media (max-width: 600px) {
    flex: none;
  }
`;

const Logo = styled(Link)`
  color: #f8f9fa;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  background: linear-gradient(to right, #00c9b1, #6a67ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    text-shadow: 0 0 15px rgba(106, 103, 206, 0.5);
    transform: scale(1.05);
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2.2rem;
  align-items: center;
  @media (max-width: 900px) {
    gap: 6vw;
  }
  @media (max-width: 600px) {
    gap: 6vw;
  }
`;

const NavLink = styled(Link)`
  color: #f8f9fa;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  position: relative;
  padding: 0.2rem 0;
  opacity: 0.9;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  @media (max-width: 900px) {
    font-size: 0.98rem;
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.1rem 0;
  }
  &:hover {
    opacity: 1;
    color: #00c9b1;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #00c9b1, #6a67ce);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &:hover::after {
    width: 100%;
  }
`;

const NavA = styled.a`
  color: #f8f9fa;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  position: relative;
  padding: 0.2rem 0;
  opacity: 0.9;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  @media (max-width: 900px) {
    font-size: 0.98rem;
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.1rem 0;
  }
  &:hover {
    opacity: 1;
    color: #00c9b1;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #00c9b1, #6a67ce);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &:hover::after {
    width: 100%;
  }
`;

const LangSwitcher = styled.div`
  position: relative;
  display: inline-block;
  @media (max-width: 900px) {
    margin-left: 6vw;
  }
  @media (max-width: 600px) {
    margin-left: 8vw;
  }
`;

const LangBtn = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #f8f9fa;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  backdrop-filter: blur(10px);
  font-weight: 500;
  font-size: 0.9rem;
  @media (max-width: 900px) {
    padding: 0.4rem 0.9rem;
    font-size: 0.88rem;
  }
  @media (max-width: 600px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.82rem;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 15px rgba(106, 103, 206, 0.3);
  }
`;

const LangOptions = styled.div`
  position: absolute;
  top: 120%;
  right: 0;
  background: rgba(25, 20, 60, 0.97);
  border-radius: 12px;
  overflow: hidden;
  width: 110px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 100;
  pointer-events: none;
  ${LangSwitcher}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }
`;

const LangOption = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 0.6rem 1.2rem;
  color: #f8f9fa;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    padding-left: 1.8rem;
  }
`;

const LangFlag = styled.img`
  width: 20px;
  height: 15px;
  border-radius: 2px;
  object-fit: cover;
  @media (max-width: 900px) {
    width: 18px;
    height: 13px;
  }
  @media (max-width: 600px) {
    width: 15px;
    height: 11px;
  }
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const LANGS = [
  { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'ru', label: 'RU', flag: 'https://flagcdn.com/w40/ru.png' },
];

const LandingPage: React.FC = () => {
  const [language, setLanguage] = useState<LocaleKey>('en');
  const [langMenu, setLangMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const messages = locales[language];
  const currentLang = LANGS.find(l => l.code === language) || LANGS[0];
  const langSwitcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!langMenu) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (langSwitcherRef.current && !langSwitcherRef.current.contains(event.target as Node)) {
        setLangMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [langMenu]);

  return (
    <>
      <HeaderBar id="header" className={scrolled ? 'scrolled' : ''}>
        <HeaderLeft>
          <NavLinks style={{gap: '2.2rem'}}>
            <NavLink to="/about">{language === 'ru' ? 'О проекте' : 'About'}</NavLink>
            <NavA href="mailto:hello@getaura.tech">{language === 'ru' ? 'Контакт' : 'Contact'}</NavA>
          </NavLinks>
        </HeaderLeft>
        <HeaderCenter />
        <HeaderRight>
          <LangSwitcher ref={langSwitcherRef}>
            <LangBtn onClick={() => setLangMenu(v => !v)}>
              <LangFlag src={currentLang.flag} alt={currentLang.label} />
              {currentLang.label}
            </LangBtn>
            <LangOptions style={{ opacity: langMenu ? 1 : 0, visibility: langMenu ? 'visible' : 'hidden', pointerEvents: langMenu ? 'auto' : 'none' }}>
              {LANGS.filter(l => l.code !== language).map(l => (
                <LangOption key={l.code} onClick={() => { setLanguage(l.code as LocaleKey); setLangMenu(false); }}>
                  <LangFlag src={l.flag} alt={l.label} />
                  {l.label}
                </LangOption>
              ))}
            </LangOptions>
          </LangSwitcher>
        </HeaderRight>
      </HeaderBar>
      <GlobalStyle />
      <Centered>
        <AuraLogo3D subtitle={messages.subtitle} subtitleButtonText={messages.subtitleButtonText} />
      </Centered>
      <Footer message={messages.footer} />
    </>
  );
};

export default LandingPage; 