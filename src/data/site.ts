export const profile = {
  name: 'Anton Loparev',
  nameLocal: 'Антон Лопарёв',
  role: 'Data / Marketing Analyst',
  headline: 'Marketing Analytics × Data × AI',
  location: 'Saint Petersburg',
  summary:
    'Working at the intersection of marketing, data, product and automation.',
  tags: ['SQL', 'Python', 'BI', 'Attribution', 'Product Analytics', 'AI'],
  cvPath: './cv.pdf',
} as const

export const contacts = {
  email: 'sikoin@bk.ru',
  telegram: 'https://t.me/disko_stew',
  telegramLabel: '@disko_stew',
  linkedin: 'https://www.linkedin.com/in/антон-лопарёв-55299338a',
    linkedinLabel: 'Anton Loparev',
  phone: '+7 (996) 497-18-39',
  phoneHref: 'tel:+79964971839',
} as const

export const metrics = [
  {
    id: 'campaigns',
    value: 180,
    prefix: '',
    suffix: '+',
    label: 'Campaigns optimized',
  },
  {
    id: 'cpl',
    value: 30,
    prefix: '−',
    suffix: '%',
    label: 'Cost per Lead',
  },
  {
    id: 'roi',
    value: 15,
    prefix: '+',
    suffix: '%',
    label: 'ROI',
  },
  {
    id: 'retention',
    value: 10,
    prefix: '+',
    suffix: '%',
    label: 'D7 Retention',
  },
  {
    id: 'manual',
    value: 80,
    prefix: '−',
    suffix: '%',
    label: 'Manual BI work',
  },
  {
    id: 'turnover',
    value: 600,
    prefix: '~$',
    suffix: 'K',
    label: 'Monthly project turnover',
  },
] as const

export const about = {
  title: 'I work where marketing meets data.',
  paragraphs: [
    'I am a Data / Marketing Analyst with experience at the intersection of analytics, Data Engineering, marketing and business economics.',
    'I work the full analytics cycle: from data preparation and exploration to hypotheses and recommendations for the business.',
    'I care not only about analytics as reporting, but about building tools around data — automation, BI, AI/LLM, small applications and prototypes.',
  ],
} as const

export type CaseKind = 'commercial' | 'experiment'

export type CaseItem = {
  id: string
  number: string
  title: string
  category: string
  kind: CaseKind
  result: string[]
  tags: string[]
  summary: string
  href?: string
}

export const commercialCases: CaseItem[] = [
  {
    id: 'campaigns',
    number: '01',
    title: 'Optimizing 180+ marketing campaigns',
    category: 'Marketing Analytics',
    kind: 'commercial',
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
    kind: 'commercial',
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
    kind: 'commercial',
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
    kind: 'commercial',
    result: ['Multi-million row MySQL', 'ETL · Data marts · Data quality'],
    tags: ['MySQL', 'ETL', 'Data transformation', 'Data marts', 'SQL optimization', 'Data quality'],
    summary:
      'Designed and optimized MySQL databases at multi-million row scale, built ETL pipelines, analytical marts and data-quality automation. I understand not only the dashboard, but where the data comes from.',
  },
]

export const experiments = [
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
    summary:
      'Automating recurring analytics and reporting workflows on top of existing BI practice.',
  },
  {
    id: 'data-products',
    slug: '/projects/data-products',
    title: 'Data Products',
    status: 'EXPERIMENTAL',
    summary:
      'Small tools on top of analytical data — prototypes, bots and lightweight product surfaces.',
  },
] as const

export const experience = [
  {
    id: 'smartfocus',
    period: '3 years',
    company: 'Digital Agency',
    role: 'Analyst',
    kind: 'role' as const,
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
    kind: 'status' as const,
    focus: [
      'Data / Marketing Analyst',
      'Remote · Full-time',
    ],
  },
] as const

export type SkillGroup = 'analytics' | 'marketing' | 'data' | 'ai'

export type Skill = {
  name: string
  groups: SkillGroup[]
}

export const skills: Skill[] = [
  { name: 'SQL', groups: ['analytics', 'data'] },
  { name: 'Python', groups: ['analytics', 'ai'] },
  { name: 'pandas', groups: ['analytics'] },
  { name: 'Excel', groups: ['analytics'] },
  { name: 'Data Analysis', groups: ['analytics'] },
  { name: 'Cohort Analysis', groups: ['analytics', 'marketing'] },
  { name: 'Funnel Analysis', groups: ['analytics', 'marketing'] },
  { name: 'LTV', groups: ['analytics', 'marketing'] },
  { name: 'Retention', groups: ['analytics', 'marketing'] },
  { name: 'ROI', groups: ['analytics', 'marketing'] },
  { name: 'CPA', groups: ['analytics', 'marketing'] },
  { name: 'Marketing Analytics', groups: ['marketing'] },
  { name: 'Attribution', groups: ['marketing'] },
  { name: 'Traffic Quality', groups: ['marketing'] },
  { name: 'Campaign Analysis', groups: ['marketing'] },
  { name: 'Google Ads', groups: ['marketing'] },
  { name: 'Яндекс.Метрика', groups: ['marketing'] },
  { name: 'AppsFlyer', groups: ['marketing'] },
  { name: 'Adjust', groups: ['marketing'] },
  { name: 'Everflow', groups: ['marketing'] },
  { name: 'Power BI', groups: ['analytics'] },
  { name: 'Tableau', groups: ['analytics'] },
  { name: 'Superset', groups: ['analytics'] },
  { name: 'Data Visualization', groups: ['analytics'] },
  { name: 'MySQL', groups: ['data'] },
  { name: 'ETL', groups: ['data'] },
  { name: 'Data Modeling', groups: ['data'] },
  { name: 'Database Architecture', groups: ['data'] },
  { name: 'Big Data', groups: ['data'] },
  { name: 'SQL Optimization', groups: ['data'] },
  { name: 'Data Quality', groups: ['data'] },
  { name: 'AI / LLM', groups: ['ai'] },
  { name: 'Claude', groups: ['ai'] },
  { name: 'Cursor', groups: ['ai'] },
  { name: 'HTML', groups: ['ai'] },
  { name: 'Telegram Bots', groups: ['ai'] },
  { name: 'Rapid Prototyping', groups: ['ai'] },
  { name: 'Automation', groups: ['ai', 'data'] },
]

export const skillFilters: { id: 'all' | SkillGroup; label: string }[] = [
  { id: 'all', label: 'ALL' },
  { id: 'analytics', label: 'ANALYTICS' },
  { id: 'marketing', label: 'MARKETING' },
  { id: 'data', label: 'DATA' },
  { id: 'ai', label: 'AI' },
]

export const aiFlow = ['DATA', 'ANALYSIS', 'LLM', 'AUTOMATION', 'PRODUCT'] as const

export const heroFlow = ['Marketing', 'Data', 'Insight', 'Decision', 'Impact'] as const

export const marquee = [
  'MARKETING',
  'DATA',
  'AI',
  'PERFORMANCE',
  'ANALYTICS',
  'ATTRIBUTION',
  'RETENTION',
  'LTV',
] as const
