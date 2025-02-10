// app/routing.ts
import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // Список поддерживаемых локалей
  locales: ['ru', 'uz', 'en'],

  // Локаль по умолчанию
  defaultLocale: 'ru',
});

// Можно сразу экспортировать Link, useRouter, etc.:
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
