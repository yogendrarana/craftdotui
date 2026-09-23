# Craft UI

A collection of beautiful, interactive UI components and particles built for React, Next.js, and Tailwind CSS. Built with accessibility and developer experience at its core, powered by `@base-ui/react`.

[![Live Demo](https://img.shields.io/badge/website-craftdotui.vercel.app-blue)](https://craftdotui.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Project Structure

This monorepo uses Bun workspaces:

```text
craftdotui/
├── apps/
│   └── web/            # Documentation & showcase website (Next.js 16, React 19)
├── packages/
│   ├── baseui/         # Base UI components & copy-pasteable particles
│   ├── craftui/        # Custom micro-interactions & creative components
│   ├── hooks/          # Reusable React hooks
│   ├── lib/            # Shared utilities (e.g. cn)
│   └── loaders/        # Animated CSS & SVG loaders
├── scripts/            # Registry generation & build scripts
└── package.json        # Workspace configuration
```

---

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended package manager)
- Node.js 18+

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yogendrarana/craftdotui.git
   cd craftdotui
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Start the development server:**

   ```bash
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the documentation site in your browser.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `bun dev` | Starts the Next.js development server for `apps/web` |
| `bun run build` | Builds the production bundle for `apps/web` |
| `bun start` | Starts the production server |
| `bun run build:registry` | Regenerates the component registry files and formats code |
| `bun run check` | Checks formatting and lints with Biome |
| `bun run format` | Automatically formats files using Biome |
| `bun run lint` | Runs Biome linter |

---

## Contributing

Contributions are always welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For major changes or additions, please open an issue first to discuss what you would like to change.

---

## License

This project is licensed under the MIT License.

---

## Author

**Yogendra Rana**

- Website: [https://yogendrarana.com.np](https://yogendrarana.com.np)
- Twitter: [@yooogendra_rana](https://twitter.com/yooogendra_rana)
- GitHub: [@yogendrarana](https://github.com/yogendrarana)