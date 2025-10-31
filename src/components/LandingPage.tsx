import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import AuraLogo3D from './AuraLogo3D';
import Footer from './Footer';
import { locales, LocaleKey } from '../locales';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Orb from './Orb';
import PillNav from './PillNav';
import ElectricBorder from './ElectricBorder';

const GlobalStyle = createGlobalStyle`
  :root {
    --deep-blue: #0A2540;
    --orb-purple: #9C43FE;
    --orb-cyan: #4CC2E9;
    --orb-dark-blue: #101499;
    --gold: #FFD700;
  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    background: #000000;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;

const headerFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-24px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 1.2rem 0;
  animation: ${headerFadeIn} 0.7s cubic-bezier(0.4,0,0.2,1);

  @media (max-width: 900px) {
    padding: 0.8rem 0;
  }
  @media (max-width: 600px) {
    padding: 0.5rem 0;
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

const HeaderCenter = styled.div`
  flex: 1 1 auto;
  @media (max-width: 900px) {
    flex: none;
  }
  @media (max-width: 600px) {
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

const NavLink = styled(Link)<{ $active?: boolean }>`
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
    color: #4CC2E9;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 2px;
    background: linear-gradient(to right, #4CC2E9, #9C43FE);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &:hover::after {
    width: 100%;
  }
  ${({ $active }) =>
    $active &&
    `
      color: #4CC2E9;
      opacity: 1;
      font-weight: 700;
      &::after {
        width: 100%;
      }
    `}
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
    color: #4CC2E9;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #4CC2E9, #9C43FE);
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

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  z-index: 1;
`;

const OrbBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

const MainContent = styled.div`
  position: relative;
  width: 100%;
  background: #000000;
  z-index: 1;
`;

const ContentSection = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 40px;
  @media (max-width: 900px) {
    padding: 80px 30px;
  }
  @media (max-width: 600px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #4CC2E9 0%, #9C43FE 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #b6d6ff;
  margin-bottom: 60px;
  @media (max-width: 900px) {
    font-size: 1.1rem;
    margin-bottom: 50px;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 40px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px 30px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  backdrop-filter: blur(10px);
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-10px);
  }
  @media (max-width: 600px) {
    padding: 30px 20px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #4CC2E9;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #b6d6ff;
  line-height: 1.6;
  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 40px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const BenefitCard = styled.div`
  text-align: center;
  padding: 30px;
  background: rgba(156, 67, 254, 0.1);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: scale(1.05);
    background: rgba(156, 67, 254, 0.15);
  }
`;

const BenefitValue = styled.div`
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(135deg, #4CC2E9 0%, #9C43FE 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

const BenefitLabel = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: #f8f9fa;
  margin-bottom: 0.5rem;
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const BenefitDescription = styled.p`
  font-size: 1rem;
  color: #b6d6ff;
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  position: relative;
  padding: 30px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`;

const StepNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: rgba(76, 194, 233, 0.3);
  margin-bottom: 1rem;
`;

const StepTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  color: #4CC2E9;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #b6d6ff;
  line-height: 1.6;
  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

const CTASection = styled(ContentSection)`
  text-align: center;
  background: linear-gradient(135deg, rgba(76, 194, 233, 0.1) 0%, rgba(156, 67, 254, 0.1) 100%);
  border-radius: 30px;
  border: 1px solid rgba(76, 194, 233, 0.2);
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 18px 50px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #060010;
  background: linear-gradient(135deg, #4CC2E9 0%, #9C43FE 100%);
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 0 10px 30px rgba(76, 194, 233, 0.3);
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(76, 194, 233, 0.5);
  }
  @media (max-width: 600px) {
    padding: 15px 40px;
    font-size: 1.1rem;
  }
`;

const LANGS = [
  { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'ru', label: 'RU', flag: 'https://flagcdn.com/w40/ru.png' },
];

interface LandingPageProps {
  language: LocaleKey;
  onLanguageChange: (lang: LocaleKey) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ language, onLanguageChange }) => {
  const [langMenu, setLangMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const messages = locales[language];
  const currentLang = LANGS.find(l => l.code === language) || LANGS[0];
  const langSwitcherRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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
      <HeaderBar id="header">
        <PillNav
          logo="/aura-logo-static.svg"
          logoAlt="AURA Logo"
          items={[
            { label: language === 'ru' ? 'Главная' : 'Main', href: '/' },
            { label: language === 'ru' ? 'О проекте' : 'About', href: '/about' },
            { label: messages.contacts, href: 'mailto:hello@getaura.tech' }
          ]}
          activeHref={location.pathname}
          baseColor="#ffffff"
          pillColor="#060010"
          hoveredPillTextColor="#060010"
          ease="power3.out"
          initialLoadAnimation={false}
        />
      </HeaderBar>
      <GlobalStyle />

      <HeroSection>
        <OrbBackground>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </OrbBackground>
        <Centered>
          <AuraLogo3D subtitle={messages.subtitle} subtitleButtonText={messages.subtitleButtonText} />
        </Centered>
      </HeroSection>

      <MainContent>
        {/* Features Section */}
        <ContentSection>
          <SectionTitle>{messages.featuresTitle}</SectionTitle>
          <SectionSubtitle>{messages.featuresSubtitle}</SectionSubtitle>
          <FeaturesGrid>
            {messages.features.map((feature, index) => (
              <ElectricBorder key={index} color="#4CC2E9" speed={0.3} chaos={0.15} thickness={1} style={{ borderRadius: '20px' }}>
                <FeatureCard>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              </ElectricBorder>
            ))}
          </FeaturesGrid>
        </ContentSection>

        {/* Benefits Section */}
        <ContentSection>
          <SectionTitle>{messages.benefitsTitle}</SectionTitle>
          <SectionSubtitle>{messages.benefitsSubtitle}</SectionSubtitle>
          <BenefitsGrid>
            {messages.benefits.map((benefit, index) => (
              <ElectricBorder key={index} color="#9C43FE" speed={0.3} chaos={0.15} thickness={1} style={{ borderRadius: '20px' }}>
                <BenefitCard>
                  <BenefitValue>{benefit.value}</BenefitValue>
                  <BenefitLabel>{benefit.label}</BenefitLabel>
                  <BenefitDescription>{benefit.description}</BenefitDescription>
                </BenefitCard>
              </ElectricBorder>
            ))}
          </BenefitsGrid>
        </ContentSection>

        {/* How It Works Section */}
        <ContentSection>
          <SectionTitle>{messages.howItWorksTitle}</SectionTitle>
          <SectionSubtitle>{messages.howItWorksSubtitle}</SectionSubtitle>
          <StepsContainer>
            {messages.steps.map((step, index) => (
              <ElectricBorder key={index} color="#4CC2E9" speed={0.3} chaos={0.15} thickness={1} style={{ borderRadius: '20px' }}>
                <StepCard>
                  <StepNumber>{step.number}</StepNumber>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepCard>
              </ElectricBorder>
            ))}
          </StepsContainer>
        </ContentSection>

        {/* CTA Section */}
        <CTASection>
          <SectionTitle>{messages.ctaTitle}</SectionTitle>
          <SectionSubtitle>{messages.ctaSubtitle}</SectionSubtitle>
          <CTAButton href="https://t.me/getaura_bot" target="_blank" rel="noopener noreferrer">
            {messages.ctaButton}
          </CTAButton>
        </CTASection>

        <Footer
          message={messages.footer}
          showLangToggle={true}
          language={language}
          onLanguageChange={onLanguageChange}
        />
      </MainContent>
    </>
  );
};

export default LandingPage; 