export const themeChannelEvent = 'sportbook/theme-changed';

export const themeParameterKey = 'themeSwitch';

export const themes = {
  light: 'light',
  dark: 'dark',
} as const;

export type Theme = (typeof themes)[keyof typeof themes];

export const docsStorySelector = '.docs-story';

export const themeLabels = {
  switch: 'Tema oscuro',
} as const;

export const resolveTheme = (value: unknown): Theme =>
  value === themes.dark ? themes.dark : themes.light;

export const applyTheme = (theme: Theme) => {
  const blocks = document.querySelectorAll(docsStorySelector);
  if (!blocks.length) {
    document.documentElement.dataset.theme = theme;
    return;
  }
  blocks.forEach((block) => block.setAttribute('data-theme', theme));
  document.documentElement.dataset.theme = themes.light;
};
