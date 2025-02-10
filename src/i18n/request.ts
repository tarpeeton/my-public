import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(
  async ({ requestLocale }: { requestLocale: Promise<string | undefined> }) => {
    const locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as 'ru' | 'uz' | 'en')) {
      notFound();
    }

    return {
      locale: locale as 'ru' | 'uz' | 'en',
      messages: (await import(`../locales/${locale}.json`)).default,
    };
  }
);
