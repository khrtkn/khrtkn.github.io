export const defaultLanguage = 'ja';
export const englishLanguage = 'en';

export const normalizeLanguage = (language) => {
  return language === englishLanguage ? englishLanguage : defaultLanguage;
};

export const alternateLanguage = (language) => {
  return normalizeLanguage(language) === englishLanguage ? defaultLanguage : englishLanguage;
};

export const localizedRoute = (language, path = '/') => {
  const normalizedLanguage = normalizeLanguage(language);
  const normalizedPath = path === '/' ? '' : path;

  return normalizedLanguage === englishLanguage ? `/en${normalizedPath}` : normalizedPath || '/';
};

export const localizedCurrentPath = (pathname, targetLanguage) => {
  const pathWithoutEnglishPrefix =
    pathname === '/en' ? '/' : pathname.startsWith('/en/') ? pathname.slice(3) : pathname;

  return localizedRoute(targetLanguage, pathWithoutEnglishPrefix);
};
