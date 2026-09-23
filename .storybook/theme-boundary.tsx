import { useLayoutEffect, useRef } from 'react';
import type { ReactNode } from 'react';

import { docsStorySelector, type Theme, themes } from './themes';

interface ThemeBoundaryProps {
  theme: Theme;
  isDocs: boolean;
  children: ReactNode;
}

export const ThemeBoundary = ({ theme, isDocs, children }: ThemeBoundaryProps) => {
  const anchorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isDocs) {
      anchorRef.current?.closest(docsStorySelector)?.setAttribute('data-theme', theme);
      document.documentElement.dataset.theme = themes.light;
      return;
    }
    document.documentElement.dataset.theme = theme;
  }, [theme, isDocs]);

  return (
    <div ref={anchorRef} style={{ display: 'contents' }}>
      {children}
    </div>
  );
};
