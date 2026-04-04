import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import en from '@/messages/en.json';
import id from '@/messages/id.json';
import projectsEn from '@/messages/projects.en.json';
import projectsId from '@/messages/projects.id.json';

const messages = {
  en: { ...en, projects: projectsEn },
  id: { ...id, projects: projectsId },
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as keyof typeof messages],
  };
});
