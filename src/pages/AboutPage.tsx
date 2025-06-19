import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { locales, LocaleKey } from '../locales';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    background: linear-gradient(135deg, #070a13 0%, #101326 100%);
    min-height: 100vh;
    overflow: hidden;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 70px;
  padding-bottom: 60px;
  @media (max-width: 900px) {
    padding-top: 56px;
    padding-bottom: 40px;
  }
  @media (max-width: 600px) {
    padding-top: 40px;
    padding-bottom: 28px;
  }
`;

const Title = styled.h1`
  color: #eaf6ff;
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 0;
  letter-spacing: 0.04em;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 1.1rem;
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
  }
  @media (max-width: 600px) {
    font-size: 0.82rem;
    max-width: 98vw;
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
    margin-bottom: 18px;
  }
  @media (max-width: 600px) {
    font-size: 0.74rem;
    margin-bottom: 12px;
  }
`;

const BlockList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  @media (max-width: 900px) {
    gap: 14px;
    max-width: 96vw;
  }
  @media (max-width: 600px) {
    gap: 10px;
    max-width: 99vw;
  }
`;

const Block = styled.div`
  background: rgba(10, 37, 64, 0.38);
  border-radius: 18px;
  padding: 22px 32px;
  color: #eaf6ff;
  box-shadow: 0 2px 16px 0 rgba(0,150,255,0.06);
  @media (max-width: 900px) {
    padding: 14px 16px;
    border-radius: 13px;
  }
  @media (max-width: 600px) {
    padding: 8px 6px;
    border-radius: 8px;
  }
`;

const BlockTitle = styled.h2`
  color: #00c9b1;
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

const BlockText = styled.div`
  color: #eaf6ff;
  font-size: 1rem;
  font-weight: 400;
  @media (max-width: 900px) {
    font-size: 0.88rem;
  }
  @media (max-width: 600px) {
    font-size: 0.74rem;
  }
`;

const AboutPage: React.FC = () => {
  const [language, setLanguage] = useState<LocaleKey>('en');
  const messages = locales[language];

  return (
    <>
      <GlobalStyle />
      <Header language={language} onLanguageChange={setLanguage} messages={messages} />
      <PageContainer>
        <Title>{messages.aboutTitle}</Title>
        <Project>{messages.aboutProject}</Project>
        <Mission>{messages.aboutMission}</Mission>
        <BlockList>
          {messages.aboutBlocks.map((block: any, idx: number) => (
            <Block key={idx}>
              <BlockTitle>{block.title}</BlockTitle>
              <BlockText>{block.text}</BlockText>
            </Block>
          ))}
        </BlockList>
      </PageContainer>
      <Footer message={messages.footer} />
    </>
  );
};

export default AboutPage; 