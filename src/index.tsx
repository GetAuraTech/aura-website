import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './components/LandingPage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LocaleKey } from './locales';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App: React.FC = () => {
  const [language, setLanguage] = useState<LocaleKey>(() => {
    return (localStorage.getItem('aura-lang') as LocaleKey) || 'en';
  });
  useEffect(() => {
    localStorage.setItem('aura-lang', language);
  }, [language]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage language={language} onLanguageChange={setLanguage} />} />
        <Route path="/about" element={<AboutPage language={language} onLanguageChange={setLanguage} />} />
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);