import { projects } from './projects';
import { projectTranslations } from './projectTranslations';
import { normalizeLanguage } from '../utils/language';

const mergeProject = (project, translation = {}) => {
  return {
    ...project,
    ...translation,
    sections: project.sections.map((section, index) => ({
      ...section,
      ...(translation.sections?.[index] || {}),
    })),
    links: translation.links || project.links,
  };
};

export const getProjects = (language = 'ja') => {
  const normalizedLanguage = normalizeLanguage(language);

  if (normalizedLanguage === 'ja') {
    return projects;
  }

  const translations = projectTranslations[normalizedLanguage] || {};

  return projects.map((project) => mergeProject(project, translations[project.slug]));
};

export const getProjectBySlug = (slug, language = 'ja') => {
  return getProjects(language).find((project) => project.slug === slug);
};
