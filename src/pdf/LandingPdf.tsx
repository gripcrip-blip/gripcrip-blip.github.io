import { Document, Font, Link, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import type { Copy, Locale } from '../data/copy'
import { contacts, metrics, skills } from '../data/site'
import plexMedium from '../assets/fonts/IBMPlexSans-Medium.ttf'
import plexRegular from '../assets/fonts/IBMPlexSans-Regular.ttf'

Font.register({
  family: 'Plex',
  fonts: [
    { src: plexRegular, fontWeight: 400 },
    { src: plexMedium, fontWeight: 500 },
  ],
})

Font.registerHyphenationCallback((word) => [word])

const colors = {
  bg: '#070708',
  card: '#121214',
  line: '#2A2A2E',
  text: '#F5F5F4',
  muted: '#A1A1AA',
  accent: '#8FCBB3',
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg,
    color: colors.text,
    fontFamily: 'Plex',
    fontSize: 9.5,
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 36,
  },
  kicker: {
    color: colors.accent,
    fontSize: 8,
    letterSpacing: 2.4,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  name: {
    fontSize: 11,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: colors.accent,
    marginBottom: 10,
  },
  headline: {
    fontSize: 22,
    fontWeight: 500,
    lineHeight: 1.2,
    marginBottom: 8,
  },
  role: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 6,
  },
  muted: {
    color: colors.muted,
    lineHeight: 1.45,
  },
  tags: {
    color: colors.muted,
    fontSize: 8,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginTop: 10,
  },
  contacts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12,
    marginBottom: 18,
  },
  contactLink: {
    color: colors.accent,
    fontSize: 8.5,
    textDecoration: 'none',
  },
  metrics: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.line,
    marginBottom: 18,
  },
  metric: {
    width: '33.33%',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRightWidth: 1,
    borderColor: colors.line,
  },
  metricValue: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 4,
  },
  metricLabel: {
    color: colors.muted,
    fontSize: 7.5,
    lineHeight: 1.3,
  },
  section: {
    marginBottom: 14,
  },
  h2: {
    fontSize: 13,
    fontWeight: 500,
    marginBottom: 6,
  },
  flow: {
    marginTop: 10,
    marginBottom: 16,
  },
  flowItem: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  caseMeta: {
    color: colors.accent,
    fontSize: 7.5,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  caseTitle: {
    fontSize: 11,
    fontWeight: 500,
    marginBottom: 4,
  },
  pills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 6,
  },
  pill: {
    color: colors.accent,
    fontSize: 8,
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  expRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 10,
  },
  expPeriod: {
    width: 70,
    color: colors.muted,
    fontSize: 8,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  skillWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skill: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 4,
    paddingVertical: 3,
    paddingHorizontal: 6,
    fontSize: 8,
    color: colors.muted,
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    left: 36,
    right: 36,
    color: colors.muted,
    fontSize: 7.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

type LandingPdfProps = {
  t: Copy
  locale: Locale
}

export function LandingPdf({ t, locale }: LandingPdfProps) {
  const siteLabel = locale === 'ru' ? 'Портфолио' : 'Portfolio'

  return (
    <Document
      title={`${t.profile.name} — ${t.profile.role}`}
      author={t.profile.name}
      language={locale}
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{t.profile.name}</Text>
        <Text style={styles.headline}>{t.profile.headline}</Text>
        <Text style={styles.role}>{t.profile.role}</Text>
        <Text style={styles.muted}>{t.profile.summary}</Text>
        <Text style={styles.tags}>{t.profile.tags.join('  ·  ')}</Text>

        <View style={styles.contacts}>
          <Link src={`mailto:${contacts.email}`} style={styles.contactLink}>
            {contacts.email}
          </Link>
          <Link src={contacts.telegram} style={styles.contactLink}>
            Telegram {contacts.telegramLabel}
          </Link>
          <Link src={contacts.linkedin} style={styles.contactLink}>
            LinkedIn
          </Link>
          <Text style={{ color: colors.muted, fontSize: 8.5 }}>
            {t.profile.location} · {t.profile.remote}
          </Text>
        </View>

        <View style={styles.metrics}>
          {metrics.map((metric, index) => (
            <View
              key={metric.id}
              style={[styles.metric, index % 3 === 2 ? { borderRightWidth: 0 } : {}]}
            >
              <Text style={styles.metricValue}>
                {metric.prefix}
                {metric.value}
                {metric.suffix}
              </Text>
              <Text style={styles.metricLabel}>{t.metrics.labels[metric.id]}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.kicker}>{t.about.eyebrow}</Text>
          <Text style={styles.h2}>{t.about.title}</Text>
          {t.about.paragraphs.map((p) => (
            <Text key={p} style={[styles.muted, { marginBottom: 5 }]}>
              {p}
            </Text>
          ))}
        </View>

        <View style={styles.flow}>
          <Text style={[styles.kicker, { marginBottom: 6 }]}>{t.hero.flowTitle}</Text>
          {t.hero.flow.map((step, index) => (
            <View key={step} style={styles.flowItem}>
              <Text>{step}</Text>
              <Text style={{ color: colors.muted, fontSize: 8 }}>0{index + 1}</Text>
            </View>
          ))}
        </View>

        <View style={styles.footer} fixed>
          <Text>
            {t.profile.name} · {siteLabel}
          </Text>
          <Text>gripcrip-blip.github.io</Text>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <Text style={styles.kicker}>{t.cases.eyebrow}</Text>
        <Text style={[styles.h2, { marginBottom: 10 }]}>{t.cases.title}</Text>
        {t.cases.items.map((item) => (
          <View key={item.id} style={styles.card} wrap={false}>
            <Text style={styles.caseMeta}>
              {t.cases.caseLabel} {item.number} · {item.category}
            </Text>
            <Text style={styles.caseTitle}>{item.title}</Text>
            <Text style={styles.muted}>{item.summary}</Text>
            <View style={styles.pills}>
              {item.result.map((result) => (
                <Text key={result} style={styles.pill}>
                  {result}
                </Text>
              ))}
            </View>
          </View>
        ))}

        <View style={[styles.section, { marginTop: 8 }]}>
          <Text style={styles.kicker}>{t.experience.eyebrow}</Text>
          <Text style={[styles.h2, { marginBottom: 10 }]}>{t.experience.title}</Text>
          {t.experience.items.map((item) => (
            <View key={item.id} style={styles.expRow} wrap={false}>
              <Text style={styles.expPeriod}>{item.period}</Text>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 500, marginBottom: 2 }}>{item.company}</Text>
                <Text style={[styles.muted, { marginBottom: 4 }]}>{item.role}</Text>
                {item.focus.map((line) => (
                  <Text key={line} style={styles.muted}>
                    • {line}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.kicker}>{t.ai.eyebrow}</Text>
          <Text style={styles.h2}>{t.ai.title}</Text>
          <Text style={styles.muted}>{t.ai.body}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.kicker}>{t.toolbox.eyebrow}</Text>
          <Text style={[styles.h2, { marginBottom: 8 }]}>{t.toolbox.title}</Text>
          <View style={styles.skillWrap}>
            {skills.map((skill) => (
              <Text key={skill.name} style={styles.skill}>
                {skill.name}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.kicker}>{t.contact.eyebrow}</Text>
          <Text style={styles.h2}>{t.contact.title}</Text>
          <Text style={styles.muted}>{t.contact.line}</Text>
        </View>

        <View style={styles.footer} fixed>
          <Text>
            {t.profile.name} · {siteLabel}
          </Text>
          <Text>gripcrip-blip.github.io</Text>
        </View>
      </Page>
    </Document>
  )
}
