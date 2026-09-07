export type Locale = 'en' | 'ru'

const en = {
  skip: 'Skip to work',
  nav: {
    work: 'Work',
    experience: 'Experience',
    stack: 'Stack',
    contact: 'Contact',
    download: 'Download CV',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    primary: 'Primary',
    mobile: 'Mobile',
  },
  profile: {
    name: 'Anton Loparev',
    role: 'Data / Marketing Analyst',
    headline: 'Marketing Analytics × Data × AI',
    location: 'Saint Petersburg',
    remote: 'Remote',
    summary: 'Working at the intersection of marketing, data, product and automation.',
    tags: ['SQL', 'Python', 'BI', 'Attribution', 'Product Analytics', 'AI'],
  },
  hero: {
    viewCases: 'View cases',
    download: 'Download CV',
    flowTitle: 'How the work moves',
    flowNote: 'Marketing data into decisions',
    flow: ['Marketing', 'Data', 'Insight', 'Decision', 'Impact'],
    marquee: [
      'MARKETING',
      'DATA',
      'AI',
      'PERFORMANCE',
      'ANALYTICS',
      'ATTRIBUTION',
      'RETENTION',
      'LTV',
    ],
  },
  metrics: {
    aria: 'Key results',
    labels: {
      campaigns: 'Campaigns optimized',
      cpl: 'Cost per Lead',
      roi: 'ROI',
      retention: 'D7 Retention',
      manual: 'Manual BI work',
      turnover: 'Monthly project turnover',
    },
  },
  about: {
    eyebrow: 'About',
    title: 'I work where marketing meets data.',
    paragraphs: [
      'I am a Data / Marketing Analyst with experience at the intersection of analytics, Data Engineering, marketing and business economics.',
      'I work the full analytics cycle: from data preparation and exploration to hypotheses and recommendations for the business.',
      'I care not only about analytics as reporting, but about building tools around data — automation, BI, AI/LLM, small applications and prototypes.',
    ],
  },
  cases: {
    eyebrow: 'Selected work',
    title: 'Commercial experience',
    description:
      'Results taken from production work. No synthetic case studies presented as client delivery.',
    caseLabel: 'Case',
    items: [
      {
        id: 'campaigns',
        number: '01',
        title: 'Optimizing 180+ marketing campaigns',
        category: 'Marketing Analytics',
        result: ['−30% CPL', '+15% ROI'],
        tags: ['CPA', 'ROI', 'Traffic quality', 'Attribution', 'Funnel', 'Cohorts'],
        summary:
          'Campaign performance analysis across 180+ advertising campaigns: CPA, ROI, traffic quality and mobile attribution. Confirmed outcomes on selected projects: lower cost per lead and higher ROI.',
      },
      {
        id: 'funnel',
        number: '02',
        title: 'Finding growth points in the user funnel',
        category: 'Product Analytics',
        result: ['+10% D7 Retention'],
        tags: ['Funnel', 'Cohorts', 'LTV', 'Retention'],
        summary:
          'Funnel, cohort and attribution analysis to find growth points. User segmentation and cohort work contributed to a +10% increase in D7 Retention.',
      },
      {
        id: 'bi',
        number: '03',
        title: 'From manual reporting to automated BI',
        category: 'BI / Automation',
        result: ['~80% less manual reporting work'],
        tags: ['Power BI', 'SQL', 'Python', 'Automation'],
        summary:
          'Automated BI reporting in Power BI and reduced manual work for the marketing team by about 80%. Data → SQL / Python → BI → dashboard → decision.',
      },
      {
        id: 'data-layer',
        number: '04',
        title: 'Building the data layer',
        category: 'Data Engineering',
        result: ['Multi-million row MySQL', 'ETL · Data marts · Data quality'],
        tags: ['MySQL', 'ETL', 'Data transformation', 'Data marts', 'SQL optimization', 'Data quality'],
        summary:
          'Designed and optimized MySQL databases at multi-million row scale, built ETL pipelines, analytical marts and data-quality automation. I understand not only the dashboard, but where the data comes from.',
      },
    ],
    viz: {
      campaignTitle: 'Campaign performance',
      beforeAfter: 'Before → after · approx.',
      before: 'Before',
      after: 'After',
      campaignNote:
        'Approximate figures based on confirmed results (−30% CPL, +15% ROI). Not a campaign-level dataset.',
      funnel: ['Acquisition', 'Install', 'Activation', 'Purchase', 'Retention'],
      funnelTags: ['Funnel', 'Cohorts', 'LTV', 'Retention'],
      illustrative: 'Illustrative visualization',
      biFlow: ['Data', 'SQL / Python', 'Power BI', 'Dashboard', 'Decision'],
      dataLayer: ['MySQL', 'ETL', 'Transformation', 'Data marts', 'SQL optimization', 'Data quality'],
    },
  },
  experiments: {
    eyebrow: 'Experimental',
    title: 'Currently exploring',
    description:
      'Separate from commercial experience. These are learning directions and future pet-project slots — not claimed as shipped client work.',
    items: [
      {
        id: 'performance-simulator',
        slug: '/projects/performance-simulator',
        title: 'Performance Marketing',
        status: 'EXPLORING',
        summary:
          'Hands-on study of performance analysis: campaign reading, budget allocation and optimization logic. Not claimed as commercial performance-marketing experience.',
      },
      {
        id: 'ai-marketing-analyst',
        slug: '/projects/ai-marketing-analyst',
        title: 'AI for Marketing Analytics',
        status: 'EXPERIMENTAL',
        summary:
          'LLM tools for reading data, spotting anomalies and drafting analytical takeaways. Future pet project slot.',
      },
      {
        id: 'marketing-dashboard',
        slug: '/projects/marketing-dashboard',
        title: 'Marketing Automation',
        status: 'EXPLORING',
        summary: 'Automating recurring analytics and reporting workflows on top of existing BI practice.',
      },
      {
        id: 'data-products',
        slug: '/projects/data-products',
        title: 'Data Products',
        status: 'EXPERIMENTAL',
        summary:
          'Small tools on top of analytical data — prototypes, bots and lightweight product surfaces.',
      },
    ],
  },
  ai: {
    eyebrow: 'AI / build',
    title: "I don't just use AI. I build with it.",
    body: 'Claude for analysis and coding. Cursor for development and prototyping. I also ship small programs, Telegram bots, landings and automation tools around the analytics workflow.',
    flowTitle: 'From data to product',
    flow: ['DATA', 'ANALYSIS', 'LLM', 'AUTOMATION', 'PRODUCT'],
  },
  experience: {
    eyebrow: 'Now',
    title: 'Experience',
    items: [
      {
        id: 'smartfocus',
        period: '3 years',
        company: 'Digital Agency',
        role: 'Analyst',
        kind: 'role',
        focus: [
          'Marketing and financial analytics for mobile projects',
          'Funnels, cohorts, LTV, Retention, CPA, ROI',
          'Channel efficiency, traffic quality, mobile attribution',
          'SQL / Python analysis, BI dashboards, reporting automation',
        ],
      },
      {
        id: 'open-to-work',
        period: 'Now',
        company: 'Open to work',
        role: 'Open to new roles',
        kind: 'status',
        focus: ['Data / Marketing Analyst', 'Remote · Full-time'],
      },
    ],
  },
  toolbox: {
    eyebrow: 'Toolbox',
    title: 'Stack',
    description: 'Tools used in analytics, marketing measurement, data engineering and AI-assisted building.',
    filtersAria: 'Skill filters',
    filters: [
      { id: 'all', label: 'ALL' },
      { id: 'analytics', label: 'ANALYTICS' },
      { id: 'marketing', label: 'MARKETING' },
      { id: 'data', label: 'DATA' },
      { id: 'ai', label: 'AI' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's work with data.",
    line: 'Data Analytics · Marketing Analytics · AI · Automation',
  },
}

const ru: Copy = {
  skip: 'К кейсам',
  nav: {
    work: 'Кейсы',
    experience: 'Опыт',
    stack: 'Стек',
    contact: 'Контакты',
    download: 'Скачать CV',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    primary: 'Основная навигация',
    mobile: 'Мобильная навигация',
  },
  profile: {
    name: 'Антон Лопарёв',
    role: 'Data / Marketing Analyst',
    headline: 'Marketing Analytics × Data × AI',
    location: 'Санкт-Петербург',
    remote: 'Удалённо',
    summary: 'Работаю на стыке маркетинга, данных, продукта и автоматизации.',
    tags: ['SQL', 'Python', 'BI', 'Attribution', 'Product Analytics', 'AI'],
  },
  hero: {
    viewCases: 'Смотреть кейсы',
    download: 'Скачать CV',
    flowTitle: 'Как устроена работа',
    flowNote: 'Из маркетинговых данных — в решения',
    flow: ['Маркетинг', 'Данные', 'Инсайт', 'Решение', 'Эффект'],
    marquee: [
      'MARKETING',
      'DATA',
      'AI',
      'PERFORMANCE',
      'ANALYTICS',
      'ATTRIBUTION',
      'RETENTION',
      'LTV',
    ],
  },
  metrics: {
    aria: 'Ключевые результаты',
    labels: {
      campaigns: 'Кампаний оптимизировано',
      cpl: 'Стоимость лида',
      roi: 'ROI',
      retention: 'D7 Retention',
      manual: 'Ручная работа в BI',
      turnover: 'Оборот проектов в месяц',
    },
  },
  about: {
    eyebrow: 'О себе',
    title: 'Я работаю там, где маркетинг встречается с данными.',
    paragraphs: [
      'Я Data / Marketing Analyst с опытом на стыке аналитики, Data Engineering, маркетинга и экономики бизнеса.',
      'Работаю с полным циклом аналитики: от подготовки и исследования данных до формирования гипотез и рекомендаций для бизнеса.',
      'Мне интересна не только аналитика как отчётность, но и создание инструментов вокруг данных — автоматизация, BI, AI/LLM, небольшие приложения и прототипы.',
    ],
  },
  cases: {
    eyebrow: 'Избранные работы',
    title: 'Коммерческий опыт',
    description:
      'Результаты из реальной работы. Учебные и синтетические кейсы не выдаются за клиентскую поставку.',
    caseLabel: 'Кейс',
    items: [
      {
        id: 'campaigns',
        number: '01',
        title: 'Оптимизация 180+ маркетинговых кампаний',
        category: 'Маркетинговая аналитика',
        result: ['−30% CPL', '+15% ROI'],
        tags: ['CPA', 'ROI', 'Качество трафика', 'Атрибуция', 'Воронка', 'Когорты'],
        summary:
          'Анализ эффективности 180+ рекламных кампаний: CPA, ROI, качество трафика и мобильная атрибуция. Подтверждённые результаты на отдельных проектах: ниже стоимость лида и выше ROI.',
      },
      {
        id: 'funnel',
        number: '02',
        title: 'Точки роста в пользовательской воронке',
        category: 'Продуктовая аналитика',
        result: ['+10% D7 Retention'],
        tags: ['Воронка', 'Когорты', 'LTV', 'Retention'],
        summary:
          'Анализ воронки, когорт и атрибуции для поиска точек роста. Сегментация пользователей и работа с когортами помогли увеличить D7 Retention на 10%.',
      },
      {
        id: 'bi',
        number: '03',
        title: 'От ручной отчётности к автоматическому BI',
        category: 'BI / Автоматизация',
        result: ['~80% меньше ручной отчётности'],
        tags: ['Power BI', 'SQL', 'Python', 'Автоматизация'],
        summary:
          'Автоматизировал BI-отчётность в Power BI и сократил объём ручной работы маркетинговой команды примерно на 80%. Данные → SQL / Python → BI → дашборд → решение.',
      },
      {
        id: 'data-layer',
        number: '04',
        title: 'Слой данных',
        category: 'Data Engineering',
        result: ['MySQL на миллионах строк', 'ETL · Витрины · Data quality'],
        tags: ['MySQL', 'ETL', 'Трансформация', 'Витрины', 'Оптимизация SQL', 'Качество данных'],
        summary:
          'Проектировал и оптимизировал базы MySQL с многомиллионными объёмами данных, строил ETL, аналитические витрины и контроль качества. Понимаю не только дашборд, но и то, откуда берутся данные.',
      },
    ],
    viz: {
      campaignTitle: 'Эффективность кампаний',
      beforeAfter: 'До → после · оценка',
      before: 'До',
      after: 'После',
      campaignNote:
        'Примерные показатели на основе подтверждённых результатов (−30% CPL, +15% ROI). Это не датасет по отдельным кампаниям.',
      funnel: ['Acquisition', 'Install', 'Activation', 'Purchase', 'Retention'],
      funnelTags: ['Воронка', 'Когорты', 'LTV', 'Retention'],
      illustrative: 'Иллюстративная визуализация',
      biFlow: ['Данные', 'SQL / Python', 'Power BI', 'Дашборд', 'Решение'],
      dataLayer: ['MySQL', 'ETL', 'Трансформация', 'Витрины', 'Оптимизация SQL', 'Качество данных'],
    },
  },
  experiments: {
    eyebrow: 'Эксперименты',
    title: 'Сейчас изучаю',
    description:
      'Отдельно от коммерческого опыта. Это направления развития и слоты для будущих pet-проектов — не заявленный клиентский опыт.',
    items: [
      {
        id: 'performance-simulator',
        slug: '/projects/performance-simulator',
        title: 'Performance Marketing',
        status: 'ИЗУЧАЮ',
        summary:
          'Практическое изучение performance-подхода: чтение кампаний, распределение бюджета и логика оптимизации. Не заявлено как коммерческий опыт performance-маркетинга.',
      },
      {
        id: 'ai-marketing-analyst',
        slug: '/projects/ai-marketing-analyst',
        title: 'AI для маркетинговой аналитики',
        status: 'ЭКСПЕРИМЕНТ',
        summary:
          'LLM-инструменты для чтения данных, поиска аномалий и черновиков аналитических выводов. Слот для будущего pet-проекта.',
      },
      {
        id: 'marketing-dashboard',
        slug: '/projects/marketing-dashboard',
        title: 'Маркетинговая автоматизация',
        status: 'ИЗУЧАЮ',
        summary: 'Автоматизация регулярной аналитики и отчётности на базе существующей BI-практики.',
      },
      {
        id: 'data-products',
        slug: '/projects/data-products',
        title: 'Data-продукты',
        status: 'ЭКСПЕРИМЕНТ',
        summary:
          'Небольшие инструменты поверх аналитических данных — прототипы, боты и лёгкие продуктовые поверхности.',
      },
    ],
  },
  ai: {
    eyebrow: 'AI / сборка',
    title: 'Я не просто использую AI. Я собираю на нём инструменты.',
    body: 'Claude — для анализа и кода. Cursor — для разработки и прототипирования. Также делаю небольшие программы, Telegram-ботов, лендинги и автоматизацию вокруг аналитического процесса.',
    flowTitle: 'От данных к продукту',
    flow: ['DATA', 'ANALYSIS', 'LLM', 'AUTOMATION', 'PRODUCT'],
  },
  experience: {
    eyebrow: 'Сейчас',
    title: 'Опыт',
    items: [
      {
        id: 'smartfocus',
        period: '3 года',
        company: 'Digital Agency',
        role: 'Аналитик',
        kind: 'role',
        focus: [
          'Маркетинговая и финансовая аналитика мобильных проектов',
          'Воронки, когорты, LTV, Retention, CPA, ROI',
          'Эффективность каналов, качество трафика, мобильная атрибуция',
          'SQL / Python, BI-дашборды, автоматизация отчётности',
        ],
      },
      {
        id: 'open-to-work',
        period: 'Сейчас',
        company: 'Открыт к вакансиям',
        role: 'Рассматриваю предложения',
        kind: 'status',
        focus: ['Data / Marketing Analyst', 'Удалённо · Полная занятость'],
      },
    ],
  },
  toolbox: {
    eyebrow: 'Инструменты',
    title: 'Стек',
    description: 'Инструменты аналитики, маркетинговых измерений, data engineering и сборки с AI.',
    filtersAria: 'Фильтры навыков',
    filters: [
      { id: 'all', label: 'ВСЕ' },
      { id: 'analytics', label: 'АНАЛИТИКА' },
      { id: 'marketing', label: 'МАРКЕТИНГ' },
      { id: 'data', label: 'ДАННЫЕ' },
      { id: 'ai', label: 'AI' },
    ],
  },
  contact: {
    eyebrow: 'Контакты',
    title: 'Давайте работать с данными.',
    line: 'Data Analytics · Marketing Analytics · AI · Автоматизация',
  },
}

export type Copy = typeof en

export const copy: Record<Locale, Copy> = {
  en,
  ru,
}
