export const contacts = {
  email: 'sikoin@bk.ru',
  telegram: 'https://t.me/disko_stew',
  telegramLabel: '@disko_stew',
  linkedin: 'https://www.linkedin.com/in/антон-лопарёв-55299338a',
  linkedinLabel: 'Anton Loparev',
  phone: '+7 (996) 497-18-39',
  phoneHref: 'tel:+79964971839',
} as const

export const cvPath = './cv.pdf'

export const metrics = [
  { id: 'campaigns', value: 180, prefix: '', suffix: '+' },
  { id: 'cpl', value: 30, prefix: '−', suffix: '%' },
  { id: 'roi', value: 15, prefix: '+', suffix: '%' },
  { id: 'retention', value: 10, prefix: '+', suffix: '%' },
  { id: 'manual', value: 80, prefix: '−', suffix: '%' },
  { id: 'turnover', value: 600, prefix: '~$', suffix: 'K' },
] as const

export type MetricId = (typeof metrics)[number]['id']

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
