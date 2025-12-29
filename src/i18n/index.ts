export const languages = {
  en: 'English',
  it: 'Italiano',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string) {
    return lang === defaultLang ? path : `/${lang}${path}`;
  };
}

export function getAlternatePath(currentLang: Lang, currentPath: string): Record<Lang, string> {
  const cleanPath = currentPath.replace(/^\/it/, '') || '/';

  return {
    en: cleanPath,
    it: `/it${cleanPath === '/' ? '' : cleanPath}`,
  };
}
