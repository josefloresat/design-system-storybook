import React, { useState } from 'react';
import { DOCS_RENDERED, STORY_RENDERED } from 'storybook/internal/core-events';
import { useChannel } from 'storybook/manager-api';
import { styled } from 'storybook/theming';

import { themeChannelEvent, themeLabels, themes, type Theme } from './themes';

const SwitchButton = styled.button(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  height: 28,
  padding: '0 8px',
  border: 0,
  borderRadius: 4,
  background: 'transparent',
  color: theme.color.defaultText,
  fontFamily: 'inherit',
  fontSize: theme.typography.size.s2,
  fontWeight: theme.typography.weight.bold,
  cursor: 'pointer',
  '&:hover': { background: theme.background.hoverable },
  '&:focus-visible': { outline: `2px solid ${theme.color.secondary}`, outlineOffset: 1 },
}));

const Track = styled.span<{ checked: boolean }>(({ checked, theme }) => ({
  position: 'relative',
  width: 28,
  height: 16,
  borderRadius: 8,
  background: checked ? theme.color.secondary : theme.appBorderColor,
  transition: 'background 150ms ease',
}));

const Thumb = styled.span<{ checked: boolean }>(({ checked }) => ({
  position: 'absolute',
  top: 2,
  left: checked ? 14 : 2,
  width: 12,
  height: 12,
  borderRadius: '50%',
  background: '#ffffff',
  transition: 'left 150ms ease',
}));

let currentTheme: Theme = themes.light;

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>(currentTheme);
  const emit: ReturnType<typeof useChannel> = useChannel({
    [STORY_RENDERED]: () => emit(themeChannelEvent, currentTheme),
    [DOCS_RENDERED]: () => emit(themeChannelEvent, currentTheme),
  });
  const checked = theme === themes.dark;

  const toggle = () => {
    currentTheme = checked ? themes.light : themes.dark;
    setTheme(currentTheme);
    emit(themeChannelEvent, currentTheme);
  };

  return (
    <SwitchButton type="button" role="switch" aria-checked={checked} onClick={toggle}>
      <Track checked={checked}>
        <Thumb checked={checked} />
      </Track>
      {themeLabels.switch}
    </SwitchButton>
  );
};
