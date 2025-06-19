export const locales = {
  en: {
    contacts: 'Contacts',
    getAura: 'GET AURA',
    footer: '© 2025 AURA | GetAura.tech | hello@getaura.tech',
    subtitle: 'Business processes gain intelligence',
    subtitleButtonText: 'GET AURA',
    aboutTitle: 'About Us',
    aboutProject: 'AURA is an intelligent automation platform for business processes.',
    aboutMission: 'Our mission is to make business smarter, faster, and more efficient.',
    aboutBlocks: [
      {
        title: 'What is AURA?',
        text: 'AURA is a platform that helps companies automate routine tasks and focus on growth.'
      },
      {
        title: 'Our Values',
        text: 'Innovation, transparency, and care for our clients are at the heart of everything we do.'
      },
      {
        title: 'Team',
        text: 'Our team consists of experts in AI, business, and technology.'
      }
    ]
  },
  ru: {
    contacts: 'Контакты',
    getAura: 'ПОЛУЧИТЬ AURA',
    footer: '© 2025 AURA | GetAura.tech | hello@getaura.tech',
    subtitle: 'Бизнес-процессы обретают интеллект',
    subtitleButtonText: 'ПОЛУЧИТЬ AURA',
    aboutTitle: 'О нас',
    aboutProject: 'AURA — это платформа интеллектуальной автоматизации бизнес-процессов.',
    aboutMission: 'Наша миссия — сделать бизнес умнее, быстрее и эффективнее.',
    aboutBlocks: [
      {
        title: 'Что такое AURA?',
        text: 'AURA — это платформа, которая помогает компаниям автоматизировать рутину и сосредоточиться на росте.'
      },
      {
        title: 'Наши ценности',
        text: 'Инновации, прозрачность и забота о клиентах — основа нашей работы.'
      },
      {
        title: 'Команда',
        text: 'Наша команда — это эксперты в области ИИ, бизнеса и технологий.'
      }
    ]
  },
};

export type LocaleKey = keyof typeof locales; 