export type Locale = 'en' | 'vi';

export const locales: Locale[] = ['en', 'vi'];
export const defaultLocale: Locale = 'en';

export async function getTranslations(locale: Locale) {
  try {
    const translations = await import(`@/messages/${locale}.json`);
    return translations.default;
  } catch {
    const translations = await import(`@/messages/${defaultLocale}.json`);
    return translations.default;
  }
}

