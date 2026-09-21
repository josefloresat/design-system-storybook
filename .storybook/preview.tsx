import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          '01 Introducción',
          ['Bienvenida'],
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