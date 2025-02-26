import { useTranslations } from 'next-intl';

export const NavbarItemLinks = () => {
  const t = useTranslations('Header');

  return [
    { id: 1, title: t('doctor'), href: '/doctors' },
    { id: 2, title: t('clinics'), href: '/clinick' },
    { id: 3, title: t('service'), href: '/services' },
  ];
};
