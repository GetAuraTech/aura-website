import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AuraLogo3D from './AuraLogo3D';
import Header from './Header';
import Footer from './Footer';
import { locales, LocaleKey } from '../locales';

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

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const LandingPage: React.FC = () => {
  const [language, setLanguage] = useState<LocaleKey>('en');
  const messages = locales[language];

  return (
    <>
      <GlobalStyle />
      <Header language={language} onLanguageChange={setLanguage} messages={messages} />
      <Centered>
        <AuraLogo3D subtitle={messages.subtitle} subtitleButtonText={messages.subtitleButtonText} />
      </Centered>
      <Footer message={messages.footer} />
    </>
  );
};

export default LandingPage; 