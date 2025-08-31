# @arach Registry

Custom shadcn/ui registry hosted at https://registry.arach.dev

## Available Components

### Terminal Theme (`terminal`)

A sophisticated terminal-inspired theme with precision-focused design, technical UI patterns, and comprehensive component styling.

**Type:** `registry:style`

**Installs:**
- `styles/terminal-theme.ts` - Complete theme object with colors, typography, components, and utilities
- `app/globals.css` - CSS variables and utility classes

### DevBar (`devbar`)

Full standalone development toolbar component for React applications. Copy the entire implementation into your project for complete control.

**Type:** `registry:component`

**Installs:**
- `components/devbar/devtoolbar.tsx` - Complete DevToolbar implementation with all features

### DevBar UI (`devbar-ui`)

Customizable UI layer for @arach/devbar. Provides an open code wrapper you can modify while keeping the core logic managed via npm.

**Type:** `registry:component`

**Installs:**
- `components/devbar-ui/index.tsx` - Customizable wrapper that imports from @arach/devbar npm package

## Installation

You can install the terminal theme in your shadcn/ui project using:

### Direct URL Installation

```bash
# Terminal theme
npx shadcn@latest add https://registry.arach.dev/r/terminal.json

# DevBar (standalone)
npx shadcn@latest add https://registry.arach.dev/r/devbar.json

# DevBar UI (with npm dependency)
npx shadcn@latest add https://registry.arach.dev/r/devbar-ui.json
```

### Using the Registry Namespace

First, configure your `components.json` to include the registry:

```json
{
  "registries": {
    "@arach": "https://registry.arach.dev/r/{name}.json"
  }
}
```

Then install using the namespace:

```bash
# Terminal theme
npx shadcn@latest add @arach/terminal

# DevBar (full standalone component)
npx shadcn@latest add @arach/devbar

# DevBar UI (customizable wrapper with npm core)
npx shadcn@latest add @arach/devbar-ui
```

## Component Details

### Terminal Theme

The terminal theme provides:

### Theme Object (`terminal-theme.ts`)
- **Colors**: Enhanced grayscale foundation with strategic accent colors
- **Typography**: Precision typography system with hierarchical text styles
- **Components**: Pre-styled components including buttons, cards, inputs, tables, badges, and more
- **Layout**: Technical interface structures for containers, panels, sidebars
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

### DevBar Components

#### DevBar (Standalone)
The full component implementation copied directly into your project:

```tsx
import { DevToolbar } from '@/components/devbar/devtoolbar'

// Full control over the implementation
<DevToolbar 
  tabs={[
    {
      id: 'state',
      label: 'State',
      content: <YourContent />
    }
  ]}
/>
```

#### DevBar UI (NPM + Customizable Layer)  
A thin wrapper around the npm package that you can customize:

```tsx
import { DevToolbar } from '@/components/devbar-ui'
// Wrapper imports from: @arach/devbar

// Customize the wrapper in components/devbar-ui/index.tsx
// Core logic stays in npm, UI layer is yours to modify
<DevToolbar 
  tabs={yourTabs}
  theme="dark" // Your defaults
/>
```

**Choose DevBar UI when:**
- You want automatic updates to core functionality
- You only need to customize styling/defaults
- You prefer managed dependencies

**Choose DevBar Standalone when:**
- You need full control over the implementation
- You want to modify core behavior
- You prefer vendored dependencies

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
- `http://localhost:3000/r/terminal.json` - Terminal theme
- `http://localhost:3000/r/devbar.json` - DevBar standalone
- `http://localhost:3000/r/devbar-ui.json` - DevBar UI layer

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
- `https://registry.arach.dev/r/devbar.json`
- `https://registry.arach.dev/r/devbar-ui.json`

## License

MIT