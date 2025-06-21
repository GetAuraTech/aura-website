export const locales = {
  en: {
    contacts: 'Contact',
    getAura: 'GET AURA',
    footer: '© 2025 AURA | GetAura.tech | hello@getaura.tech',
    subtitle: 'Business processes gain intelligence',
    subtitleButtonText: 'GET AURA',
    aboutTitle: 'WHAT IS AURA',
    aboutProject: '',
    aboutMission: '',
    aboutBlocks: [
      {
        title: 'What is AURA?',
        text: 'AURA is your partner in intelligent business process automation. We don\'t just deliver technology — we analyze, design, and implement tailored solutions that free your teams from routine, making your business smarter, faster, and more efficient.'
      },
      {
        title: 'Your Benefits in Numbers',
        text: 'You get: up to 60% savings on manual tasks, 2-4x faster operations, up to 99.9% accuracy, and up to 30% of your employees\' time freed for strategic and development tasks.'
      },
      {
        title: 'Why do we do it?',
        text: 'AURA was founded on the belief that modern business can and should work differently. We saw the huge potential of automation and AI being left untapped due to implementation complexity or lack of understanding.'
      },
      {
        title: 'Our Values',
        text: 'We constantly seek and implement the most advanced and effective approaches to automation. Our solutions are based on deep analysis, best practices, and up-to-date technologies (such as AI, machine learning, RPA), adapted to your specific needs.'
      },
      {
        title: 'Approach',
        text: 'Our strength is in understanding both business challenges and technological opportunities. We are not just techies — we think like business partners, striving to find the most effective and practical solution for your challenges.'
      },
      {
        title: 'Partnership & Support',
        text: 'Our collaboration doesn\'t end with implementation. We provide training, technical support, and ongoing optimization as your business evolves.'
      }
    ]
  },
  ru: {
    contacts: 'Контакт',
    getAura: 'ПОЛУЧИТЬ AURA',
    footer: '© 2025 AURA | GetAura.tech | hello@getaura.tech',
    subtitle: 'Бизнес-процессы обретают интеллект',
    subtitleButtonText: 'ПОЛУЧИТЬ AURA',
    aboutTitle: 'ЧТО ТАКОЕ AURA',
    aboutProject: '',
    aboutMission: '',
    aboutBlocks: [
      {
        title: 'Что такое AURA?',
        text: 'AURA — это ваш партнер в интеллектуальной автоматизации бизнес-процессов. Мы не просто поставляем технологии — мы анализируем, проектируем и внедряем индивидуальные решения, которые освобождают до 30% времени сотрудников от рутины, делая ваш бизнес умнее, быстрее и эффективнее.'
      },
      {
        title: 'Ваша выгода в цифрах',
        text: 'Вы получите: экономию до 60% на ручных задачах, ускорение работы в 2-4 раза, точность операций до 99.9%, и до 30% времени ваших сотрудников для важных задач для стратегии и развития.'
      },
      {
        title: 'Почему мы это делаем?',
        text: 'AURA была основана с убеждением, что современный бизнес может и должен работать по-новому. Мы увидели, как огромный потенциал автоматизации и искусственного интеллекта остается неиспользованным из-за сложности внедрения или непонимания возможностей.'
      },
      {
        title: 'Наши ценности',
        text: 'Мы постоянно ищем и внедряем самые передовые и эффективные подходы к автоматизации. Наши решения строятся на глубоком анализе, лучших практиках и актуальных технологиях (таких как Искусственный Интеллект, машинное обучение, RPA), адаптированных под ваши конкретные нужды.'
      },
      {
        title: 'Подход',
        text: 'Наша сила — в понимании как бизнес-задач, так и технологических возможностей. Мы не просто технари — мы мыслим как бизнес-партнеры, стремясь найти самое эффективное и практичное решение для ваших вызовов.'
      },
      {
        title: 'Партнерство и поддержка',
        text: 'Наше сотрудничество не заканчивается внедрением. Мы обеспечиваем обучение, техническую поддержку и постоянную оптимизацию решений по мере развития вашего бизнеса.'
      }
    ]
  },
};

export type LocaleKey = keyof typeof locales; 