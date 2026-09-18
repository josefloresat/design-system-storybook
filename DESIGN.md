# Design System

Documentación generada a partir de los tokens de diseño exportados de Figma en `references/design-system/`. Los tokens siguen el formato estándar de Figma Variables (W3C Design Tokens), organizados en dos niveles: **primitivos** (valores base reutilizables) y **semánticos** (alias con propósito, que referencian primitivos y varían según modo/tema).

## Índice

- [Primitivos: Color](#primitivos-color)
- [Primitivos: Tipografía](#primitivos-tipografía)
- [Primitivos: Unidades](#primitivos-unidades)
- [Semánticos: Color (Light)](#semánticos-color-light)
- [Semánticos: Color (Dark)](#semánticos-color-dark)
- [Semánticos: Tipografía (Desktop)](#semánticos-tipografía-desktop)
- [Semánticos: Tipografía (Small Device)](#semánticos-tipografía-small-device)
- [Semánticos: Unidades (Mobile min 360)](#semánticos-unidades-mobile-min-360)

## Primitivos: Color

Fuente: `primitive-color.zip`

### brand

| Token | Valor |
| --- | --- |
| `rojo-principal` | #FB3333 |
| `Rojo-Secundario-01` | #FF0000 |
| `Rojo-Secundario-02` | #B80000 |
| `Amarillo-100` | #FCF3E3 |
| `Amarillo-400` | #FFC700 |
| `Amarillo-500` | #FFAE00 |
| `Amarillo-900` | #FC7D11 |
| `Verde-100` | #E9F4EC |
| `Verde-400` | #2BA24C |
| `Verde-900` | #03702C |
| `Azul-100` | #E9F6FF |
| `Azul-500` | #215FD4 |
| `Azul-900` | #002F9A |

### green

| Token | Valor |
| --- | --- |
| `green-50` | #EDFEE5 |
| `green-100` | #BBF8C5 |
| `green-200` | #8EF4A0 |
| `green-300` | #60F27C |
| `green-400` | #31F25A |
| `green-500` | #51BB27 |
| `green-600` | #00DA32 |
| `green-700` | #00C22D |
| `green-800` | #00A927 |
| `green-900` | #26660C |

### yellow

| Token | Valor |
| --- | --- |
| `yellow-50` | #FCF1E7 |
| `yellow-100` | #FEF3E4 |
| `yellow-200` | #F4C48E |
| `yellow-300` | #F2B060 |
| `yellow-400` | #F29E31 |
| `yellow-500` | #F59E0B |
| `yellow-600` | #DA8000 |
| `yellow-700` | #C27200 |
| `yellow-800` | #A96300 |
| `yellow-900` | #7A3A00 |

### blue

| Token | Valor |
| --- | --- |
| `blue-50` | #EAF2FF |
| `blue-100` | #BCE3FB |
| `blue-200` | #8FCEFA |
| `blue-300` | #60B9FA |
| `blue-400` | #31A1FC |
| `blue-500` | #2F80ED |
| `blue-600` | #007AE6 |
| `blue-700` | #006DCC |
| `blue-800` | #005FB3 |
| `blue-900` | #0F3B66 |

### red

| Token | Valor |
| --- | --- |
| `red-50` | #FCE9EA |
| `red-100` | #FDECEC |
| `red-200` | #F59999 |
| `red-300` | #F3716F |
| `red-400` | #F24A44 |
| `red-500` | #D64545 |
| `red-600` | #DA2016 |
| `red-700` | #C21D13 |
| `red-800` | #A91911 |
| `red-900` | #7A1212 |

### neutral

| Token | Valor |
| --- | --- |
| `0` | #FFFFFF |
| `10` | #F1F1F1 |
| `20` | #EEEEEE |
| `100` | #FBFBFB |
| `200` | #F4F4F4 |
| `300` | #DADADA |
| `400` | #D3D3D3 |
| `500` | #A4A4A4 |
| `600` | #A0A0A0 |
| `700` | #5E5E5E |
| `800` | #404040 |
| `900` | #222222 |

### opacity

| Token | Valor |
| --- | --- |
| `10%` | #000000 (alpha 0.10) |
| `20%` | #000000 (alpha 0.20) |
| `30%` | #000000 (alpha 0.30) |
| `40%` | #000000 (alpha 0.40) |
| `50%` | #000000 (alpha 0.50) |
| `60%` | #000000 (alpha 0.60) |
| `70%` | #000000 (alpha 0.70) |
| `80%` | #000000 (alpha 0.80) |
| `90%` | #000000 (alpha 0.90) |

## Primitivos: Tipografía

Fuente: `primitive-type.zip`

### family

| Token | Valor |
| --- | --- |
| `Rubik` | Rubik |
| `Gobold Bold Italic` | Gobold Bold Italic |

### weight

| Token | Valor |
| --- | --- |
| `Regular` | Regular |
| `Medium` | Medium |
| `SemiBold` | SemiBold |
| `Bold` | Bold |

### size

| Token | Valor |
| --- | --- |
| `6` | 6 |
| `8` | 8 |
| `10` | 10 |
| `12` | 12 |
| `14` | 14 |
| `16` | 16 |
| `18` | 18 |
| `20` | 20 |
| `24` | 24 |
| `28` | 28 |
| `32` | 32 |
| `36` | 36 |
| `40` | 40 |
| `48` | 48 |
| `56` | 56 |
| `64` | 64 |

### line-height

| Token | Valor |
| --- | --- |
| `0` | 0 |
| `1` | 1 |
| `2` | 2 |
| `3` | 3 |
| `4` | 4 |
| `5` | 5 |
| `6` | 6 |
| `7` | 7 |
| `8` | 8 |
| `9` | 9 |
| `10` | 10 |
| `11` | 11 |
| `12` | 12 |
| `14` | 14 |
| `16` | 16 |
| `17` | 17 |
| `18` | 18 |
| `19` | 19 |
| `20` | 20 |
| `21` | 21 |
| `22` | 22 |
| `24` | 24 |
| `26` | 26 |
| `28` | 28 |
| `32` | 32 |
| `33` | 33 |
| `36` | 36 |
| `40` | 40 |
| `43` | 43 |
| `44` | 44 |
| `48` | 48 |
| `52` | 52 |
| `56` | 56 |
| `64` | 64 |
| `100` | 100 |
| `Auto` | Auto |

### letter-spacing

| Token | Valor |
| --- | --- |
| `XS` | -1 |
| `S` | -0.5 |
| `M` | 0.5 |
| `None` | 0 |

## Primitivos: Unidades

Fuente: `primitive-units.zip`

| Token | Valor |
| --- | --- |
| `0` | 0 |
| `1` | 1 |
| `2` | 2 |
| `4` | 4 |
| `6` | 6 |
| `8` | 8 |
| `10` | 10 |
| `11` | 11 |
| `12` | 12 |
| `14` | 14 |
| `16` | 16 |
| `18` | 18 |
| `20` | 20 |
| `22` | 22 |
| `24` | 24 |
| `26` | 26 |
| `28` | 28 |
| `32` | 32 |
| `33` | 33 |
| `36` | 36 |
| `40` | 40 |
| `44` | 44 |
| `48` | 48 |
| `56` | 56 |
| `64` | 64 |
| `72` | 72 |
| `80` | 80 |
| `88` | 88 |
| `96` | 96 |
| `104` | 104 |
| `112` | 112 |
| `120` | 120 |
| `999` | 999 |
| `05` | 0.5 |

## Semánticos: Color (Light)

### Overlay

| Token | Valor | Referencia (primitivo) |
| --- | --- | --- |
| `10` | #000000 (alpha 0.10) | `opacity/10%` |
| `20` | #000000 (alpha 0.20) | `opacity/20%` |
| `30` | #000000 (alpha 0.30) | `opacity/30%` |
| `50` | #000000 (alpha 0.50) | `opacity/50%` |
| `60` | #000000 (alpha 0.60) | `opacity/60%` |
| `70` | #000000 (alpha 0.70) | `opacity/70%` |
| `80` | #000000 (alpha 0.80) | `opacity/80%` |
| `90` | #000000 (alpha 0.90) | `opacity/90%` |
| `overlay` | #000000 (alpha 0.40) | `opacity/40%` |

### Background

| Token | Valor | Referencia (primitivo) |
| --- | --- | --- |
| `Brand/Default` | #FB3333 | `brand/rojo-principal` |
| `Brand/Hover` | #FF0000 | `brand/Rojo-Secundario-01` |
| `Brand/Pressed` | #B80000 | `brand/Rojo-Secundario-02` |
| `Brand/Comp-amarillo` | #FCF3E3 | `brand/Amarillo-100` |
| `Brand/Comp-amarillo2` | #FFC700 | `brand/Amarillo-400` |
| `Brand/Comp-amarillo3` | #FFAE00 | `brand/Amarillo-500` |
| `Brand/Comp-amarillo4` | #FC7D11 | `brand/Amarillo-900` |
| `Brand/Comp-azul` | #E9F6FF | `brand/Azul-100` |
| `Brand/Comp-azul2` | #215FD4 | `brand/Azul-500` |
| `Brand/Comp-azul3` | #002F9A | `brand/Azul-900` |
| `Brand/Comp-verde` | #E9F4EC | `brand/Verde-100` |
| `Brand/Comp-verde2` | #2BA24C | `brand/Verde-400` |
| `Brand/Comp-verde3` | #03702C | `brand/Verde-900` |
| `feedbackBold/success` | #51BB27 | `green/green-500` |
| `feedbackBold/alert` | #F59E0B | `yellow/yellow-500` |
| `feedbackBold/informative` | #2F80ED | `blue/blue-500` |
| `feedbackBold/error` | #D64545 | `red/red-500` |
| `feedbackMedium/success` | #8EF4A0 | `green/green-200` |
| `feedbackMedium/alert` | #F4C48E | `yellow/yellow-200` |
| `feedbackMedium/informative` | #8FCEFA | `blue/blue-200` |
| `feedbackMedium/error` | #F59999 | `red/red-200` |
| `feedbackLight/success` | #BBF8C5 | `green/green-100` |
| `feedbackLight/alert` | #FEF3E4 | `yellow/yellow-100` |
| `feedbackLight/informative` | #EAF2FF | `blue/blue-50` |
| `feedbackLight/error` | #FDECEC | `red/red-100` |
| `Neutral/primary` | #FFFFFF | `neutral/0` |
| `Neutral/secondary` | #FBFBFB | `neutral/100` |
| `Neutral/gris1` | #F4F4F4 | `neutral/200` |
| `Neutral/gris2` | #EEEEEE | `neutral/20` |
| `Neutral/disabled` | #DADADA | `neutral/300` |
| `Neutral/skeleton` | #F4F4F4 | `neutral/200` |
| `Neutral/inverse` | #222222 | `neutral/900` |
| `Neutral/inverse2` | #5E5E5E | `neutral/700` |
| `Neutral/inverse3` | #A4A4A4 | `neutral/500` |

### Border

| Token | Valor | Referencia (primitivo) |
| --- | --- | --- |
| `Brand/default` | #FB3333 | `brand/rojo-principal` |
| `Brand/hover` | #FF0000 | `brand/Rojo-Secundario-01` |
| `Brand/pressed` | #B80000 | `brand/Rojo-Secundario-02` |
| `Brand/Comp-amarillo` | #FCF3E3 | `brand/Amarillo-100` |
| `Brand/Comp-amarillo2` | #FFC700 | `brand/Amarillo-400` |
| `Brand/Comp-amarillo3` | #FFAE00 | `brand/Amarillo-500` |
| `Brand/Comp-amarillo4` | #FC7D11 | `brand/Amarillo-900` |
| `Brand/Comp-verde` | #E9F4EC | `brand/Verde-100` |
| `Brand/Comp-verde2` | #2BA24C | `brand/Verde-400` |
| `Brand/Comp-verde3` | #03702C | `brand/Verde-900` |
| `Brand/Comp-azul` | #E9F6FF | `brand/Azul-100` |
| `Brand/Comp-azul2` | #215FD4 | `brand/Azul-500` |
| `Brand/Comp-azul3` | #002F9A | `brand/Azul-900` |
| `Neutral/primary` | #222222 | `neutral/900` |
| `Neutral/secondary` | #5E5E5E | `neutral/700` |
| `Neutral/gris1` | #A4A4A4 | `neutral/500` |
| `Neutral/gris2` | #D3D3D3 | `neutral/400` |
| `Neutral/gris3` | #F1F1F1 | `neutral/10` |
| `Neutral/gris4` | #EEEEEE | `neutral/20` |
| `Neutral/disabled` | #DADADA | `neutral/300` |
| `Neutral/skeleton` | #F4F4F4 | `neutral/200` |
| `Neutral/invert` | #FFFFFF | `neutral/0` |
| `feedbackBold/success` | #26660C | `green/green-900` |
| `feedbackBold/alert` | #7A3A00 | `yellow/yellow-900` |
| `feedbackBold/error` | #7A1212 | `red/red-900` |
| `feedbackBold/informative` | #0F3B66 | `blue/blue-900` |

### Text

| Token | Valor | Referencia (primitivo) |
| --- | --- | --- |
| `Brand/primary` | #FB3333 | `brand/rojo-principal` |
| `Brand/secondary` | #FF0000 | `brand/Rojo-Secundario-01` |
| `Brand/tertiary` | #B80000 | `brand/Rojo-Secundario-02` |
| `Brand/disabled` | #F59999 | `red/red-200` |
| `Brand/Comp-amarillo` | #FFC700 | `brand/Amarillo-400` |
| `Brand/Comp-amarillo2` | #FFAE00 | `brand/Amarillo-500` |
| `Brand/Comp-amarillo3` | #FC7D11 | `brand/Amarillo-900` |
| `Brand/Comp-azul` | #215FD4 | `brand/Azul-500` |
| `Brand/Comp-azul2` | #002F9A | `brand/Azul-900` |
| `Brand/Comp-verde` | #2BA24C | `brand/Verde-400` |
| `Brand/Comp-verde2` | #03702C | `brand/Verde-900` |
| `Neutral/primary` | #222222 | `neutral/900` |
| `Neutral/secondary` | #5E5E5E | `neutral/700` |
| `Neutral/gris1` | #A0A0A0 | `neutral/600` |
| `Neutral/disabled` | #DADADA | `neutral/300` |
| `Neutral/invert` | #FFFFFF | `neutral/0` |
| `feedbackBold/success` | #26660C | `green/green-900` |
| `feedbackBold/alert` | #7A3A00 | `yellow/yellow-900` |
| `feedbackBold/informative` | #0F3B66 | `blue/blue-900` |
| `feedbackBold/error` | #7A1212 | `red/red-900` |

## Semánticos: Color (Dark)

### Overlay

| Token | Valor | Referencia (primitivo) |
| --- | --- | --- |
| `10` | #000000 (alpha 0.10) | `opacity/10%` |
| `20` | #000000 (alpha 0.20) | `opacity/20%` |
| `30` | #000000 (alpha 0.30) | `opacity/30%` |
| `50` | #000000 (alpha 0.50) | `opacity/50%` |
| `60` | #000000 (alpha 0.60) | `opacity/60%` |
| `70` | #000000 (alpha 0.70) | `opacity/70%` |
| `80` | #000000 (alpha 0.80) | `opacity/80%` |
| `90` | #000000 (alpha 0.90) | `opacity/90%` |
| `overlay` | #000000 (alpha 0.40) | `opacity/40%` |

### Background

| Token | Valor | Referencia (primitivo) |
| --- | --- | --- |
| `Brand/Default` | #FB3333 | `brand/rojo-principal` |
| `Brand/Hover` | #FF0000 | `brand/Rojo-Secundario-01` |
| `Brand/Pressed` | #B80000 | `brand/Rojo-Secundario-02` |
| `Brand/Comp-amarillo` | #FCF3E3 | `brand/Amarillo-100` |
| `Brand/Comp-amarillo2` | #FFC700 | `brand/Amarillo-400` |
| `Brand/Comp-amarillo3` | #FFAE00 | `brand/Amarillo-500` |
| `Brand/Comp-amarillo4` | #FC7D11 | `brand/Amarillo-900` |
| `Brand/Comp-azul` | #E9F6FF | `brand/Azul-100` |
| `Brand/Comp-azul2` | #215FD4 | `brand/Azul-500` |
| `Brand/Comp-azul3` | #002F9A | `brand/Azul-900` |
| `Brand/Comp-verde` | #E9F4EC | `brand/Verde-100` |
| `Brand/Comp-verde2` | #2BA24C | `brand/Verde-400` |
| `Brand/Comp-verde3` | #03702C | `brand/Verde-900` |
| `feedbackBold/success` | #51BB27 | `green/green-500` |
| `feedbackBold/alert` | #F59E0B | `yellow/yellow-500` |
| `feedbackBold/informative` | #2F80ED | `blue/blue-500` |
| `feedbackBold/error` | #D64545 | `red/red-500` |
| `feedbackMedium/success` | #8EF4A0 | `green/green-200` |
| `feedbackMedium/alert` | #F4C48E | `yellow/yellow-200` |
| `feedbackMedium/informative` | #8FCEFA | `blue/blue-200` |
| `feedbackMedium/error` | #F59999 | `red/red-200` |
| `feedbackLight/success` | #BBF8C5 | `green/green-100` |
| `feedbackLight/alert` | #FEF3E4 | `yellow/yellow-100` |
| `feedbackLight/informative` | #EAF2FF | `blue/blue-50` |
| `feedbackLight/error` | #FDECEC | `red/red-100` |
| `Neutral/primary` | #222222 | `neutral/900` |
| `Neutral/secondary` | #FBFBFB | `neutral/100` |
| `Neutral/gris1` | #F4F4F4 | `neutral/200` |
| `Neutral/gris2` | #EEEEEE | `neutral/20` |
| `Neutral/disabled` | #DADADA | `neutral/300` |
| `Neutral/skeleton` | #F4F4F4 | `neutral/200` |
| `Neutral/inverse` | #FFFFFF | `neutral/0` |
| `Neutral/inverse2` | #5E5E5E | `neutral/700` |
| `Neutral/inverse3` | #A4A4A4 | `neutral/500` |

### Border

| Token | Valor | Referencia (primitivo) |
| --- | --- | --- |
| `Brand/default` | #FB3333 | `brand/rojo-principal` |
| `Brand/hover` | #FF0000 | `brand/Rojo-Secundario-01` |
| `Brand/pressed` | #B80000 | `brand/Rojo-Secundario-02` |
| `Brand/Comp-amarillo` | #FCF3E3 | `brand/Amarillo-100` |
| `Brand/Comp-amarillo2` | #FFC700 | `brand/Amarillo-400` |
| `Brand/Comp-amarillo3` | #FFAE00 | `brand/Amarillo-500` |
| `Brand/Comp-amarillo4` | #FC7D11 | `brand/Amarillo-900` |
| `Brand/Comp-verde` | #E9F4EC | `brand/Verde-100` |
| `Brand/Comp-verde2` | #2BA24C | `brand/Verde-400` |
| `Brand/Comp-verde3` | #03702C | `brand/Verde-900` |
| `Brand/Comp-azul` | #E9F6FF | `brand/Azul-100` |
| `Brand/Comp-azul2` | #215FD4 | `brand/Azul-500` |
| `Brand/Comp-azul3` | #002F9A | `brand/Azul-900` |
| `Neutral/primary` | #222222 | `neutral/900` |
| `Neutral/secondary` | #5E5E5E | `neutral/700` |
| `Neutral/gris1` | #A4A4A4 | `neutral/500` |
| `Neutral/gris2` | #D3D3D3 | `neutral/400` |
| `Neutral/gris3` | #F1F1F1 | `neutral/10` |
| `Neutral/gris4` | #EEEEEE | `neutral/20` |
| `Neutral/disabled` | #DADADA | `neutral/300` |
| `Neutral/skeleton` | #F4F4F4 | `neutral/200` |
| `Neutral/invert` | #FFFFFF | `neutral/0` |
| `feedbackBold/success` | #26660C | `green/green-900` |
| `feedbackBold/alert` | #7A3A00 | `yellow/yellow-900` |
| `feedbackBold/error` | #7A1212 | `red/red-900` |
| `feedbackBold/informative` | #0F3B66 | `blue/blue-900` |

### Text

| Token | Valor | Referencia (primitivo) |
| --- | --- | --- |
| `Brand/primary` | #FB3333 | `brand/rojo-principal` |
| `Brand/secondary` | #FF0000 | `brand/Rojo-Secundario-01` |
| `Brand/tertiary` | #B80000 | `brand/Rojo-Secundario-02` |
| `Brand/disabled` | #F59999 | `red/red-200` |
| `Brand/Comp-amarillo` | #FFC700 | `brand/Amarillo-400` |
| `Brand/Comp-amarillo2` | #FFAE00 | `brand/Amarillo-500` |
| `Brand/Comp-amarillo3` | #FC7D11 | `brand/Amarillo-900` |
| `Brand/Comp-azul` | #215FD4 | `brand/Azul-500` |
| `Brand/Comp-azul2` | #002F9A | `brand/Azul-900` |
| `Brand/Comp-verde` | #2BA24C | `brand/Verde-400` |
| `Brand/Comp-verde2` | #03702C | `brand/Verde-900` |
| `Neutral/primary` | #FFFFFF | `neutral/0` |
| `Neutral/secondary` | #5E5E5E | `neutral/700` |
| `Neutral/gris1` | #A0A0A0 | `neutral/600` |
| `Neutral/disabled` | #DADADA | `neutral/300` |
| `Neutral/invert` | #222222 | `neutral/900` |
| `feedbackBold/success` | #26660C | `green/green-900` |
| `feedbackBold/alert` | #7A3A00 | `yellow/yellow-900` |
| `feedbackBold/informative` | #0F3B66 | `blue/blue-900` |
| `feedbackBold/error` | #7A1212 | `red/red-900` |

## Semánticos: Tipografía (Desktop)

### Headings

| Estilo | Weight | Size (px) | Line Height (px) | Letter Spacing |
| --- | --- | --- | --- | --- |
| **H1** | SemiBold | 36 | 43 | 0 |
| **H2** | SemiBold | 28 | 33 | -0.5 |
| **H3** | SemiBold | 24 | 28 | 0 |
| **H4** | SemiBold | 20 | 24 | 0 |
| **Main** | SemiBold | 24 | 28 | 0 |

### Subtitles

| Estilo | Weight | Size (px) | Line Height (px) | Letter Spacing |
| --- | --- | --- | --- | --- |
| **Subtitle1** | SemiBold | 18 | 21 | 0 |
| **Subtitle2** | SemiBold | 16 | 19 | 0 |
| **Subtitle3** | SemiBold | 14 | 19 | 0.5 |
| **Subtitle4** | Medium | 14 | 19 | 0.5 |

### Bodies

| Estilo | Weight | Size (px) | Line Height (px) | Letter Spacing |
| --- | --- | --- | --- | --- |
| **Body1** / Regular | Regular | 16 | 19 | 0 |
| **Body1** / Medium | Medium | 16 | 19 | 0 |
| **Body1** / Bold | Bold | 16 | 19 | 0 |
| **Body2** / Regular | Regular | 14 | 16 | 0 |
| **Body2** / Medium | Medium | 14 | 16 | 0 |
| **Body2** / Bold | Bold | 14 | 16 | 0 |
| **Body3** / Regular | Regular | 12 | 14 | 0 |
| **Body3** / Medium | Medium | 12 | 14 | 0 |
| **Body3** / Bold | Bold | 12 | 14 | 0 |
| **Body4** / Regular | Regular | 10 | 12 | 0 |
| **Body4** / Medium | Medium | 10 | 12 | 0 |
| **Body4** / Bold | Bold | 10 | 12 | 0 |
| **Body5** / Regular | Regular | 8 | 9 | 0 |
| **Body5** / Medium | Medium | 8 | 9 | 0 |
| **Body5** / Bold | Bold | 8 | 9 | 0 |

### Buttons

| Estilo | Weight | Size (px) | Line Height (px) | Letter Spacing |
| --- | --- | --- | --- | --- |
| **Button1** | Medium | 16 | 19 | 0 |
| **Button2** | Medium | 14 | 16 | 0 |
| **Button3** | Medium | 12 | 14 | 0 |
| **Button4** | Bold | 14 | 17 | 0 |

### Captions

| Estilo | Weight | Size (px) | Line Height (px) | Letter Spacing |
| --- | --- | --- | --- | --- |
| **Caption1** / Semibold | Regular | 12 | 14 | 0 |
| **Caption1** / bold | Bold | 12 | 14 | 0 |
| **Caption2** / Semibold | Regular | 10 | 12 | 0 |
| **Caption3** / Semibold | Medium | 8 | 9 | 0 |
| **Caption4** / Semibold | Medium | 6 | 7 | 0 |

### Links

| Estilo | Weight | Size (px) | Line Height (px) | Letter Spacing |
| --- | --- | --- | --- | --- |
| **LinkXS** | Medium | 10 | 12 | 0 |
| **LinkS** | Medium | 12 | 14 | 0 |
| **LinkM** | Medium | 14 | 17 | 0 |
| **LinkL** | Medium | 16 | 19 | 0 |

## Semánticos: Tipografía (Small Device)

### Headings

| Estilo | Weight | Size (px) | Line Height (px) | Letter Spacing |
| --- | --- | --- | --- | --- |
| **H1** | SemiBold | 36 | 43 | 0 |
| **H2** | SemiBold | 28 | 33 | -0.5 |
| **H3** | SemiBold | 24 | 28 | 0 |
| **H4** | SemiBold | 20 | 24 | 0 |
| **Main** | SemiBold | 24 | 28 | 0 |

### Subtitles

| Estilo | Weight | Size (px) | Line Height (px) | Letter Spacing |
| --- | --- | --- | --- | --- |
| **Subtitle1** | SemiBold | 18 | 21 | 0 |
| **Subtitle2** | SemiBold | 16 | 19 | 0 |
| **Subtitle3** | SemiBold | 14 | 19 | 0.5 |
| **Subtitle4** | Medium | 14 | 19 | 0.5 |

### Bodies

| Estilo | Weight | Size (px) | Line Height (px) | Letter Spacing |
| --- | --- | --- | --- | --- |
| **Body1** / Regular | Regular | 16 | 19 | 0 |
| **Body1** / Medium | Medium | 16 | 19 | 0 |
| **Body1** / Bold | Bold | 16 | 19 | 0 |
| **Body2** / Regular | Regular | 14 | 16 | 0 |
| **Body2** / Medium | Medium | 14 | 16 | 0 |
| **Body2** / Bold | Bold | 14 | 16 | 0 |
| **Body3** / Regular | Regular | 12 | 14 | 0 |
| **Body3** / Medium | Medium | 12 | 14 | 0 |
| **Body3** / Bold | Bold | 12 | 14 | 0 |
| **Body4** / Regular | Regular | 10 | 12 | 0 |
| **Body4** / Medium | Medium | 10 | 12 | 0 |
| **Body4** / Bold | Bold | 10 | 12 | 0 |
| **Body5** / Regular | Regular | 8 | 9 | 0 |
| **Body5** / Medium | Medium | 8 | 9 | 0 |
| **Body5** / Bold | Bold | 8 | 9 | 0 |

### Buttons

| Estilo | Weight | Size (px) | Line Height (px) | Letter Spacing |
| --- | --- | --- | --- | --- |
| **Button1** | Medium | 16 | 19 | 0 |
| **Button2** | Medium | 14 | 16 | 0 |
| **Button3** | Medium | 12 | 14 | 0 |
| **Button4** | Bold | 14 | 17 | 0 |

### Captions

| Estilo | Weight | Size (px) | Line Height (px) | Letter Spacing |
| --- | --- | --- | --- | --- |
| **Caption1** / Semibold | Regular | 12 | 14 | 0 |
| **Caption1** / bold | Bold | 12 | 14 | 0 |
| **Caption2** / Semibold | Regular | 10 | 12 | 0 |
| **Caption3** / Semibold | Medium | 8 | 9 | 0 |
| **Caption4** / Semibold | Medium | 6 | 7 | 0 |

### Links

| Estilo | Weight | Size (px) | Line Height (px) | Letter Spacing |
| --- | --- | --- | --- | --- |
| **LinkXS** | Medium | 10 | 12 | 0 |
| **LinkS** | Medium | 12 | 14 | 0 |
| **LinkM** | Medium | 14 | 17 | 0 |
| **LinkL** | Medium | 16 | 19 | 0 |

## Semánticos: Unidades (Mobile min 360)

### base-spacing

| Token | Valor |
| --- | --- |
| `0` | 0 |
| `XS` | 4 |
| `2XS` | 6 |
| `S` | 8 |
| `2S` | 10 |
| `3S` | 12 |
| `M` | 14 |
| `L` | 16 |
| `2L` | 20 |
| `XL` | 24 |
| `2XL` | 32 |
| `3XL` | 40 |
| `4XL` | 48 |
| `5XL` | 56 |
| `6XL` | 64 |
| `7XL` | 72 |
| `8XL` | 80 |
| `9XL` | 88 |
| `10XL` | 96 |
| `11XL` | 104 |
| `12XL` | 112 |
| `13XL` | 120 |

### icon-size

| Token | Valor |
| --- | --- |
| `XSS` | 12 |
| `XS` | 14 |
| `S` | 16 |
| `M` | 24 |
| `L` | 32 |

### border-width

| Token | Valor |
| --- | --- |
| `none` | 0 |
| `XXS` | 0.5 |
| `XS` | 1 |
| `S` | 2 |

### radius

| Token | Valor |
| --- | --- |
| `XS` | 2 |
| `2XS` | 4 |
| `3XS` | 6 |
| `S` | 8 |
| `2S` | 10 |
| `M` | 12 |
| `2M` | 14 |
| `L` | 16 |
| `2L` | 18 |
| `XL` | 24 |
| `2XL` | 32 |
| `3XL` | 40 |
| `Full` | 999 |

### grid-system

| Token | Valor |
| --- | --- |
| `column-count/XS` | 4 |
| `column-count/SM` | 8 |
| `column-count/MD` | 12 |
| `column-count/LG` | 12 |
| `gutter-width/XS` | 12 |
| `gutter-width/SM` | 16 |
| `gutter-width/MD` | 24 |
| `gutter-width/LG` | 32 |
| `margin/XS` | 12 |
| `margin/SM` | 16 |
| `margin/MD` | 20 |
| `margin/LG` | 40 |
| `grid/XS` | 4 |
| `grid/S` | 8 |

### shadow-system

| Token | Valor |
| --- | --- |
| `x-position/S` | 0 |
| `y-position/S` | 0 |
| `y-position/M` | 4 |
| `y-position/L` | 8 |
| `y-position/XL` | 40 |
| `blur/S` | 8 |
| `blur/M` | 24 |
| `blur/L` | 32 |
| `blur/XL` | 64 |
| `spread/S` | 0 |

