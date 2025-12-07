# Epsilon Landing Site

A modern, space-themed landing site for Epsilon - a decentralized perpetual futures trading platform. Built with React, Vite, Tailwind CSS, and React Router.

## Features

- 🚀 **Modern Stack**: React 18 + Vite for fast development and builds
- 🎨 **Space Theme**: Beautiful dark theme with animated starfield background
- 🌓 **Theme Toggle**: Dark/Light mode with localStorage persistence
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: WCAG AA compliant with proper semantic HTML
- ⚡ **Real-Time Mocks**: WebSocket-based mock data for orderbook, positions, and dashboard
- 🎭 **Smooth Animations**: Framer Motion for micro-interactions
- 🧩 **Modular Components**: Reusable, well-structured component architecture

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vitest** - Testing framework
- **React Testing Library** - Component testing utilities

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Epsilon-landing
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional, for WebSocket configuration):
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Epsilon-landing/
├── public/
│   └── logo.png          # Logo file (used in navbar and favicon)
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Section.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── Starfield.jsx
│   │   ├── OrderbookMock.jsx
│   │   ├── PositionsMock.jsx
│   │   └── DashboardMock.jsx
│   ├── pages/           # Page components
│   │   ├── Landing.jsx
│   │   ├── Litepaper.jsx
│   │   ├── Whitepaper.jsx
│   │   ├── Terms.jsx
│   │   └── Privacy.jsx
│   ├── hooks/           # Custom React hooks
│   │   ├── useTheme.js
│   │   └── useWebSocket.js
│   ├── services/        # Data services
│   │   └── mockData.js
│   ├── utils/           # Utility functions
│   │   └── copyToClipboard.js
│   ├── test/            # Test setup
│   │   └── setup.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles
│   └── design-tokens.md # Design system documentation
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Pages & Routes

- `/` - Landing page with feature sections
- `/litepaper` - Litepaper page
- `/whitepaper` - Whitepaper page
- `/terms` - Terms & Conditions
- `/privacy` - Privacy Policy

## Design System

The project uses a comprehensive design system with:

- **Colors**: Space-themed dark palette with purple, blue, and turquoise accents
- **Typography**: Inter for UI, JetBrains Mono for data/code
- **Spacing**: Consistent 4px-based scale
- **Animations**: Smooth transitions and micro-interactions
- **Components**: Reusable, accessible components

See `src/design-tokens.md` for detailed design token documentation.

## Mock Data & WebSocket

The project includes a mock WebSocket client that simulates real-time data:

- **Orderbook**: Live bid/ask prices and sizes
- **Trades**: Recent trade feed
- **Positions**: Open positions with PnL
- **Portfolio**: Account equity, margin, and PnL data

The mock data updates every second to demonstrate real-time UI capabilities.

## Testing

Run tests with:

```bash
npm test
```

Run tests with UI:

```bash
npm run test:ui
```

Example tests are included for key components using React Testing Library.

## Customization

### Theme Colors

Edit `tailwind.config.js` to customize colors:

```js
colors: {
  space: { ... },
  primary: { ... },
  accent: { ... },
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.jsx`
3. Add a link in `src/components/Navbar.jsx`

### Modifying Mock Data

Edit `src/services/mockData.js` to change mock data values.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

The site follows WCAG AA guidelines:

- Semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast compliance

## Performance

- Code splitting with React Router
- Optimized images
- Lazy loading where appropriate
- Efficient animations with Framer Motion

## License

[Add your license here]

## Contributing

[Add contributing guidelines here]

## Contact

[Add contact information here]

