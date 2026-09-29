# @apuesta-total/design-system

Design system oficial de Apuesta Total: los tokens de diseño y los componentes oficiales de React, construidos 1:1 desde Figma. Esta guía es para los equipos que consumen el paquete desde su propia app de Next.js.

El catálogo visual de cada componente (variantes, tamaños y estados) está en el Storybook de este mismo repositorio.

## Instalación

Durante la fase de pruebas el paquete se distribuye como un tarball generado con `npm pack`; todavía no está publicado en ningún registro.

El Owner team genera el tarball desde este repositorio:

```sh
npm run build
npm pack
```

Eso produce `apuesta-total-design-system-<versión>.tgz`. Cópialo a tu proyecto e instálalo como una dependencia más:

```sh
pnpm add ./apuesta-total-design-system-0.1.0.tgz
# o
npm install ./apuesta-total-design-system-0.1.0.tgz
```

En Windows, pnpm guarda la ruta en `package.json` con `\`; cámbiala a `/` (`"file:../../vendor/apuesta-total-design-system-0.1.0.tgz"`) para que la instalación funcione en cualquier sistema operativo. Cada vez que recibas un tarball nuevo con la misma versión, vuelve a ejecutar el `pnpm add` para que se actualice el lockfile.

El paquete usa el React de tu app (`react` y `react-dom` `^19` son `peerDependencies`), así que nunca vas a tener dos copias de React.

## Configuración del layout raíz

Importa los tokens **una sola vez**, en `app/layout.tsx`, y fija el tema claro en `<html>`:

```tsx
import '@apuesta-total/design-system/tokens.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
```

- `tokens.css` define todos los tokens como custom properties de CSS y un reset base (`box-sizing`, tipografía y colores de `body`). Todos los módulos de la web comparten esa misma base.
- `data-theme="light"` es obligatorio: sin él, los tokens siguen la preferencia del sistema operativo y tu módulo podría verse en modo oscuro mientras el resto de la web se ve en claro. Por ahora solo se usa el tema claro.

## Uso de componentes

```tsx
import { Button } from '@apuesta-total/design-system';

export default function Page() {
  return <Button variant="primary" size="md" label="Apostar" />;
}
```

El CSS de cada componente se carga automáticamente al importarlo: no hay hojas de estilo por componente que importar a mano. Los componentes funcionan en Server Components.

El paquete incluye los tipos de TypeScript de cada componente y sus props, así que el editor autocompleta `variant` y `size` y rechaza valores inválidos.

## Fuentes

El paquete **no carga fuentes**: eso le toca a tu app. Los tokens declaran las familias por su nombre literal, así que tu app debe registrarlas exactamente con estos nombres:

| Familia  | Pesos              | Uso                                   |
| -------- | ------------------ | ------------------------------------- |
| `Rubik`  | 400, 500, 600, 700 | Fuente oficial (`--font-family-primary`) |
| `Inter`  | 400, 500, 600, 700 | Token `--font-family-inter`           |

Recomendamos `@fontsource`, que registra las fuentes con su nombre literal:

```sh
pnpm add @fontsource/rubik @fontsource/inter
```

```tsx
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/600.css';
import '@fontsource/rubik/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@apuesta-total/design-system/tokens.css';
```

> **Ojo con `next/font`:** genera nombres de familia con hash (por ejemplo `__Rubik_a1b2c3`), que no coinciden con `'Rubik'` ni `'Inter'`. Por sí solo no sirve para este paquete.

No necesitas ninguna otra fuente. El token de display (`--font-family-display`) declara una fuente que el paquete no distribuye y cae automáticamente a Rubik.

## Tokens Contract

Si construyes componentes propios (los de tu Team library o los de tu app), sus valores de diseño salen **solo de los tokens semánticos** de `tokens.css`:

```css
.promo-card {
  background-color: var(--color-bg-neutral-primary);
  color: var(--color-text-neutral-primary);
  padding: var(--spacing-l);
  border-radius: var(--radius-s);
}
```

- Nunca uses los tokens primitivos (por ejemplo `--color-brand-rojo-principal` o `--color-neutral-900`): son valores crudos sin propósito y pueden cambiar sin aviso.
- Nunca escribas valores fijos (`#fb3333`, `16px`): así tu componente sigue alineado con el sistema cuando cambian los tokens.
- Los componentes oficiales solo se personalizan con sus props (`variant`, `size`, atributos HTML nativos). No se copian ni se editan por dentro.

## Versionado

El paquete sigue semver:

- **Major:** renombrar o eliminar un token, o cambiar o eliminar una prop o un valor de `variant`/`size`.
- **Minor:** un componente, variante o token nuevo.
- **Patch:** una corrección visual para ajustarse a Figma.

La versión empieza en `0.1.0` y pasa a `1.0.0` cuando el primer equipo salga a producción. Todos los módulos de la web deben converger a la última versión dentro del plazo acordado, para que la misma web no muestre dos versiones de un componente.
