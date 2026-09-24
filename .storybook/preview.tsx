import type { Preview } from '@storybook/react-vite'
import { addons } from 'storybook/preview-api'
import { DOCS_RENDERED, STORY_RENDERED } from 'storybook/internal/core-events'

import '../src/index.css'
import './docs-theme.css'
import { ThemeBoundary } from './theme-boundary'
import { applyTheme, resolveTheme, themeChannelEvent, themeParameterKey, themes, type Theme } from './themes'

let activeTheme: Theme = themes.light
let locked = false

const syncTheme = () => applyTheme(locked ? themes.light : activeTheme)

const channel = addons.getChannel()
channel.on(themeChannelEvent, (theme: unknown) => {
  activeTheme = resolveTheme(theme)
  syncTheme()
})
channel.on(DOCS_RENDERED, syncTheme)
channel.on(STORY_RENDERED, syncTheme)

const preview: Preview = {
  decorators: [
    (Story, { viewMode, parameters }) => {
      locked = Boolean(parameters[themeParameterKey]?.disable)
      return (
        <ThemeBoundary theme={locked ? themes.light : activeTheme} isDocs={viewMode === 'docs'}>
          <Story />
        </ThemeBoundary>
      )
    },
  ],
  parameters: {
    backgrounds: { options: {} },
    options: {
      storySort: {
        order: [
          '01 Introducción',
          ['Bienvenida', 'Consumo entre equipos'],
          '02 Foundations',
          [
            'Colors',
            ['Primitivos', 'Semánticos'],
            'Typography',
            ['Familias y pesos', 'Escala'],
            'Effects & Borders',
            ['Shadows', 'Borders'],
            'Layout & Shape',
            ['Spacing', 'Border Radius', 'Icon Size', 'Grid'],
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