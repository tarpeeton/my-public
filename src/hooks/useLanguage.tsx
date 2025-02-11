'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState<string>('ru');

  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean);
    const currentLocale = segments[0];

    if (['ru', 'uz', 'en'].includes(currentLocale)) {
      setLanguage(currentLocale);
      localStorage.setItem('language', currentLocale);
    } else {
      const savedLanguage = localStorage.getItem('language') || 'ru';
      const newUrl = makeLocalePath(savedLanguage, pathname);
      router.replace(newUrl);
    }
  }, [pathname, router]);

  // Смена языка
  const changeLanguage = (lang: 'ru' | 'uz' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);

    const newUrl = makeLocalePath(lang, pathname);
    router.push(newUrl);
  };

  return { language, changeLanguage };
};

function makeLocalePath(lang: string, currentPath: string) {
  const segments = currentPath.split('/').filter(Boolean);

  if (segments.length > 0 && ['ru', 'uz', 'en'].includes(segments[0])) {
    segments[0] = lang;
  } else {
    segments.unshift(lang);
  }

  return `/${segments.join('/')}`;
}
