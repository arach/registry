# @arach Registry

Custom shadcn/ui registry hosted at https://registry.arach.dev

## Available Components

### Terminal Theme (`terminal`)

A sophisticated terminal-inspired theme with military-grade precision design, tactical UI patterns, and comprehensive component styling.

**Type:** `registry:style`

**Installs:**
- `styles/terminal-theme.ts` - Complete theme object with colors, typography, components, and utilities
- `app/globals.css` - CSS variables and utility classes

## Installation

You can install the terminal theme in your shadcn/ui project using:

### Direct URL Installation

```bash
npx shadcn@latest add https://registry.arach.dev/r/terminal.json
```

### Using the Registry Namespace

First, configure your `components.json` to include the registry:

```json
{
  "registries": {
    "@arach": "https://registry.arach.dev"
  }
}
```

Then install using the namespace:

```bash
npx shadcn@latest add @arach/terminal
```

## What's Included

The terminal theme provides:

### Theme Object (`terminal-theme.ts`)
- **Colors**: Enhanced grayscale foundation with tactical accent colors
- **Typography**: Military-grade typography system with hierarchical text styles
- **Components**: Pre-styled components including buttons, cards, inputs, tables, badges, and more
- **Layout**: Tactical interface structures for containers, panels, sidebars
- **Effects**: Special UI enhancements like glows, scanlines, grids
- **Utilities**: Helper classes and functions including `cx()` and `getThemeValue()`

### CSS Variables & Utilities (`globals.css`)
- Terminal theme CSS variables for colors
- Animation keyframes (scanline, fadeIn, slideIn)
- Text, background, and border color utilities
- Glow effects and special visual effects
- Status indicators and gradient overlays

## Usage Example

```tsx
import { terminalTheme, cx, themeAliases } from '@/styles/terminal-theme'

// Use theme values directly
<button className={terminalTheme.components.button.primary}>
  Execute Command
</button>

// Use semantic aliases
<input className={themeAliases.formInput} />

// Combine classes with cx utility
<div className={cx(
  terminalTheme.layout.container,
  terminalTheme.effects.grid
)}>
  Content
</div>

// Access nested theme values
import { getThemeValue } from '@/styles/terminal-theme'
const buttonStyle = getThemeValue('components.button.tactical')
```

## Development

### Building the Registry

```bash
pnpm install
pnpm registry:build
```

### Running Locally

```bash
pnpm dev
```

The registry will be available at:
- `http://localhost:3000/registry.json` - Registry manifest
- `http://localhost:3000/r/terminal.json` - Terminal theme component

### Adding New Components

1. Create your component files in `registry/[component-name]/`
2. Update `registry.json` with the new component configuration
3. Run `pnpm registry:build` to generate the output files

## Deployment

Deploy to any static hosting service. The registry requires:
- `/registry.json` - Main registry manifest
- `/r/[component].json` - Individual component files

For custom domain setup, ensure your hosting serves:
- `https://registry.arach.dev/registry.json`
- `https://registry.arach.dev/r/terminal.json`

## License

MIT