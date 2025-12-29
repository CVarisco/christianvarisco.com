import type { Lang } from './index';

// Import all data files
import siteEn from '../data/en/site.json';
import siteIt from '../data/it/site.json';
import heroEn from '../data/en/hero.json';
import heroIt from '../data/it/hero.json';
import servicesEn from '../data/en/services.json';
import servicesIt from '../data/it/services.json';
import testimonialsEn from '../data/en/testimonials.json';
import testimonialsIt from '../data/it/testimonials.json';
import timelineEn from '../data/en/timeline.json';
import timelineIt from '../data/it/timeline.json';
import faqEn from '../data/en/faq.json';
import faqIt from '../data/it/faq.json';
import resultsEn from '../data/en/results.json';
import resultsIt from '../data/it/results.json';
import navigationEn from '../data/en/navigation.json';
import navigationIt from '../data/it/navigation.json';
import challengesEn from '../data/en/challenges.json';
import challengesIt from '../data/it/challenges.json';

const translations = {
  en: {
    site: siteEn,
    hero: heroEn,
    services: servicesEn,
    testimonials: testimonialsEn,
    timeline: timelineEn,
    faq: faqEn,
    results: resultsEn,
    navigation: navigationEn,
    challenges: challengesEn,
  },
  it: {
    site: siteIt,
    hero: heroIt,
    services: servicesIt,
    testimonials: testimonialsIt,
    timeline: timelineIt,
    faq: faqIt,
    results: resultsIt,
    navigation: navigationIt,
    challenges: challengesIt,
  },
} as const;

export type TranslationNamespace = keyof typeof translations.en;

export function getTranslations<T extends TranslationNamespace>(
  lang: Lang,
  namespace: T
): (typeof translations)[Lang][T] {
  return translations[lang][namespace];
}

export function getAllTranslations(lang: Lang) {
  return translations[lang];
}
