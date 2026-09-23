import type { Preview } from '@storybook/react-vite'
import { addons } from 'storybook/preview-api'
import { DOCS_RENDERED } from 'storybook/internal/core-events'

import '../src/index.css'
import './docs-theme.css'
import { ThemeBoundary } from './theme-boundary'
import { resolveTheme, themeGlobalKey, themes } from './themes'

addons.getChannel().on(DOCS_RENDERED, () => {
  document.documentElement.dataset.theme = themes.light
})

const preview: Preview = {
  initialGlobals: { [themeGlobalKey]: themes.light },
  decorators: [
    (Story, { globals, viewMode }) => (
      <ThemeBoundary theme={resolveTheme(globals[themeGlobalKey])} isDocs={viewMode === 'docs'}>
        <Story />
      </ThemeBoundary>
    ),
  ],
  parameters: {
    backgrounds: { disabled: true },
    options: {
      storySort: {
        order: [
          '01 Introducción',
          ['Bienvenida', 'Consumo entre equipos'],
          '02 Foundations',
          [
            'Colors',
            ['Documentación', 'Primitivos', 'Semánticos'],
            'Typography',
            ['Documentación', 'Familias y pesos', 'Escala'],
            'Effects & Borders',
            ['Documentación', 'Shadows', 'Borders'],
            'Layout & Shape',
            ['Documentación', 'Spacing', 'Border Radius', 'Icon Size', 'Grid'],
          ],
          '03 Componentes',
          [
            'Actions',
            'Selections',
            'Navigation',
            'Feedback',
            'Text Field',
          ],
          '04 Páginas',
        ],
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;