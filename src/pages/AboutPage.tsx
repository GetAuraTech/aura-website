import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Footer from '../components/Footer';
import { locales, LocaleKey } from '../locales';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    background: linear-gradient(135deg, #070a13 0%, #101326 100%);
    min-height: 100vh;
    /* overflow: hidden; */
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 48px;
  padding-bottom: 60px;
  box-sizing: border-box;
  @media (max-width: 900px) {
    padding-top: 32px;
    padding-bottom: 40px;
  }
  @media (max-width: 600px) {
    padding-top: 28px;
    padding-bottom: 28px;
    min-height: 100dvh;
  }
`;

const GradientTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 0;
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(135deg, #00c9b1 0%, #6a67ce 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  text-shadow: 0 0 18px rgba(106, 103, 206, 0.22);
  @media (max-width: 900px) {
    font-size: 2.8rem;
    margin-bottom: 10px;
    margin-top: 0;
  }
  @media (max-width: 600px) {
    font-size: 2.6rem;
    margin-bottom: 10px;
    margin-top: 0;
  }
`;

const Project = styled.div`
  color: #b6d6ff;
  font-size: 1.1rem;
  margin-bottom: 10px;
  text-align: center;
  max-width: 600px;
  @media (max-width: 900px) {
    font-size: 0.95rem;
    max-width: 90vw;
    margin-bottom: 8px;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
    max-width: 98vw;
    margin-bottom: 6px;
  }
`;

const Mission = styled.div`
  color: #6a67ce;
  font-size: 1rem;
  margin-bottom: 24px;
  text-align: center;
  max-width: 600px;
  font-weight: 500;
  @media (max-width: 900px) {
    font-size: 0.88rem;
    margin-bottom: 16px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    font-size: 0.7rem;
    margin-bottom: 10px;
    max-width: 99vw;
  }
`;

const BlockList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  @media (max-width: 900px) {
    gap: 22px;
    max-width: 96vw;
  }
  @media (max-width: 600px) {
    gap: 18px;
    max-width: 96vw;
  }
`;

const Block = styled.div`
  background: rgba(10, 37, 64, 0.38);
  border-radius: 28px;
  padding: 28px 40px;
  color: #eaf6ff;
  box-shadow: 0 4px 32px 0 rgba(0,150,255,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.08);
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 900px) {
    padding: 18px 6vw;
    border-radius: 20px;
  }
  @media (max-width: 600px) {
    padding: 20px 5vw;
    border-radius: 18px;
    box-shadow: 0 2px 12px 0 rgba(0,150,255,0.10), 0 1px 4px 0 rgba(0,0,0,0.08);
  }
`;

const BlockTitle = styled.h2`
  color: #00c9b1;
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  @media (max-width: 900px) {
    font-size: 1rem;
    margin-bottom: 4px;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 4px;
  }
`;

const BlockText = styled.div`
  color: #eaf6ff;
  font-size: 1rem;
  font-weight: 400;
  @media (max-width: 900px) {
    font-size: 0.98rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const BlockListStyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;

  li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    color: #eaf6ff;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 900px) {
      font-size: 0.98rem;
    }
    @media (max-width: 600px) {
      font-size: 1rem;
    }
    svg {
      color: #00c9b1;
      flex-shrink: 0;
      margin-top: 2px;
      font-size: 1.1em;
      filter: drop-shadow(0 0 4px #00c9b1aa);
    }
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
  position: static;
  width: 70vw;
  max-width: 900px;
  min-width: 0;
  margin: 0 auto;
  padding: 1.2rem 0;
  background: transparent;
  display: flex;
  align-items: center;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transform: translateY(0);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  animation: ${headerFadeIn} 0.7s cubic-bezier(0.4,0,0.2,1);
  &.scrolled {
    padding: 0.8rem 0;
    background: transparent;
    box-shadow: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
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

const NavLink = styled(Link)<{active?: boolean}>`
  color: ${({active}) => active ? '#00c9b1' : '#f8f9fa'};
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
    width: ${({active}) => active ? '100%' : '0'};
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

const LANGS = [
  { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'ru', label: 'RU', flag: 'https://flagcdn.com/w40/ru.png' },
];

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AnimatedSection = styled.div<{delay?: number}>`
  animation: ${fadeInUp} 0.7s cubic-bezier(.4,0,.2,1);
  animation-fill-mode: both;
  animation-delay: ${({delay}) => (delay || 0)}ms;
`;

const GetAuraButton = styled.a`
  display: inline-block;
  margin: 64px auto 0 auto;
  margin-bottom: 64px;
  background: linear-gradient(90deg, #0096ff 0%, #6a67ce 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 12px 38px;
  border-radius: 24px;
  text-decoration: none;
  box-shadow: none;
  transition: transform 0.16s, background 0.3s, box-shadow 0.2s;
  letter-spacing: 0.08em;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 5;
  text-align: center;
  &:hover {
    transform: translateY(-2px) scale(1.04);
    background: linear-gradient(90deg, #6a67ce 0%, #0096ff 100%);
    box-shadow: 0 4px 24px 0 rgba(0,150,255,0.18);
  }
  @media (max-width: 900px) {
    font-size: 0.95rem;
    padding: 10px 22px;
    margin-top: 44px;
    margin-bottom: 44px;
  }
  @media (max-width: 600px) {
    font-size: 0.82rem;
    padding: 8px 12px;
    margin-top: 28px;
    margin-bottom: 28px;
  }
`;

interface AboutPageProps {
  language: LocaleKey;
  onLanguageChange: (lang: LocaleKey) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ language, onLanguageChange }) => {
  const [langMenu, setLangMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const messages = locales[language];
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
            <NavLink to="/">{language === 'ru' ? 'Главная' : 'Main'}</NavLink>
            <NavLink to="/about" active>{language === 'ru' ? 'О проекте' : 'About'}</NavLink>
            <NavA href="mailto:hello@getaura.tech">{messages.contacts}</NavA>
          </NavLinks>
        </HeaderLeft>
        <HeaderCenter />
        <HeaderRight>
          <LangSwitcher ref={langSwitcherRef}>
            <LangBtn onClick={() => setLangMenu(v => !v)}>
              <LangFlag src={LANGS.find(l => l.code === language)?.flag || LANGS[0].flag} alt={LANGS.find(l => l.code === language)?.label || 'EN'} />
              {LANGS.find(l => l.code === language)?.label || 'EN'}
            </LangBtn>
            <LangOptions style={{ opacity: langMenu ? 1 : 0, visibility: langMenu ? 'visible' : 'hidden', pointerEvents: langMenu ? 'auto' : 'none' }}>
              {LANGS.filter(l => l.code !== language).map(l => (
                <LangOption key={l.code} onClick={() => { onLanguageChange(l.code as LocaleKey); setLangMenu(false); }}>
                  <LangFlag src={l.flag} alt={l.label} />
                  {l.label}
                </LangOption>
              ))}
            </LangOptions>
          </LangSwitcher>
        </HeaderRight>
      </HeaderBar>
      <GlobalStyle />
      <PageContainer>
        <AnimatedSection delay={100}>
          <GradientTitle>{messages.aboutTitle}</GradientTitle>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <Project>{messages.aboutProject}</Project>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <Mission>{messages.aboutMission}</Mission>
        </AnimatedSection>
        <BlockList>
          {messages.aboutBlocks.map((block: any, idx: number) => (
            <AnimatedSection key={idx} delay={400 + idx * 120}>
              <Block>
                <BlockTitle>{block.title}</BlockTitle>
                <BlockText>{block.text}</BlockText>
              </Block>
            </AnimatedSection>
          ))}
        </BlockList>
        <GetAuraButton
          href="https://t.me/getaura_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          {language === 'ru' ? 'ПОЛУЧИТЬ AURA' : 'GET AURA'}
        </GetAuraButton>
      </PageContainer>
      <AnimatedSection delay={400 + messages.aboutBlocks.length * 120}>
        <Footer message={messages.footer} />
      </AnimatedSection>
    </>
  );
};

export default AboutPage; 