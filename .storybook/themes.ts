export const themeGlobalKey = 'theme';

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
