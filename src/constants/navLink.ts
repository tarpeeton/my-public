import { useTranslations } from 'next-intl';

export const NavbarItemLinks = () => {
  const t = useTranslations('Header');

  return [
    { id: 1, title: t('doctor'), href: '/doctor' },
    { id: 2, title: t('clinics'), href: '/clinics' },
    { id: 3, title: t('service'), href: '/services' },
  ];
};
