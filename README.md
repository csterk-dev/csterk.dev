# csterk.dev

Personal portfolio website showcasing my work as a Front-End Developer and UI/UX Designer.
🌐 [Check it out here!](https://www.csterk.dev)

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with TypeScript
- **UI Library**: [Chakra UI v3](https://chakra-ui.com/)
- **Content**: [Contentlayer](https://contentlayer.dev/) for MDX-based projects
- **Deployment**: [Vercel](https://vercel.com/)

## 🛠️ Development

### Prerequisites

- Node.js 20+ (see `.nvmrc` for exact version)
- Yarn package manager

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/csterk-dev/csterk.dev.git
cd csterk.dev
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint with auto-fix
- `yarn theme` - Generate Chakra UI theme typings
- `yarn theme:watch` - Watch mode for theme typings

## 🎨 Design System

This project features a custom design system built with Chakra UI v3, including:

- Custom color tokens and semantic colors
- Typography system with Barlow and Barlow Condensed fonts
- Animation tokens for consistent motion design
- Custom component recipes for `Button`, `Card`, `Section`, and more
- Responsive design with mobile-first approach

Theme configuration can be found in `/src/theme/`.

## 📝 Project Structure

```
├── content/              # MDX content for projects
├── public/
│   └── static/          # Static assets (images, logos, vectors)
├── src/
│   ├── components/      # React components
│   │   ├── atoms/       # Basic UI components
│   │   ├── molecules/   # Composite components
│   │   ├── organisms/   # Complex components
│   │   └── templates/   # Page templates
│   ├── constants/       # Site configuration
│   ├── pages/          # Next.js pages
│   ├── theme/          # Chakra UI theme config
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions and hooks
```

## 🧰 Key Features

- Responsive design optimized for all devices
- Dark mode support
- MDX-based project showcase
- Custom animations and transitions
- SEO optimized with structured data
- Accessible UI components

## 📄 License

As usual, you're welcome to use this code as inspiration for your own projects - but please do not copy the code directly.

## 👤 Author

**Chris Sterkenburg**
- Website: [csterk.dev](https://csterk.dev)
- LinkedIn: [chris-sterkenburg](https://www.linkedin.com/in/chris-sterkenburg)
- GitHub: [@csterk-dev](https://github.com/csterk-dev)
