# Swiftly - Philippines Contractor Finder

A mobile-first web application for finding and hiring local contractors in the Philippines.

## Features

- **Browse Contractors**: Find local plumbers, electricians, HVAC technicians, and more
- **Philippines-Localized**: 
  - Filipino names and businesses
  - Philippine peso (PHP) pricing
  - Local phone number formats
  - Metric units (kilometers)
  - Realistic local pricing
- **Mobile-Optimized**: Designed specifically for mobile devices (375px width)
- **Multi-Step Requests**: Detailed job submission with category, description, urgency, budget, and location
- **Real-time Messaging**: Chat directly with contractors
- **Job Tracking**: Monitor your service requests from submission to completion

## Tech Stack

- **React 18** with TypeScript
- **Vite** for development and building
- **Tailwind CSS** for styling
- **Motion** for animations
- **Lucide React** for icons

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/swiftly-contractor-finder.git
cd swiftly-contractor-finder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
  app/
    components/          # React components
      ui/               # Reusable UI components
    App.tsx             # Main application component
    main.tsx            # Application entry point
  styles/               # CSS files
    app.css             # Global styles
    theme.css           # Theme variables
    tailwind.css        # Tailwind utilities
index.html              # HTML template
```

## Mobile-First Design

This application is designed specifically for mobile devices:
- Fixed viewport width (375px)
- Touch-friendly interactions
- Optimized for mobile browsers
- Bottom navigation for easy thumb access

## Localization

All content is localized for the Philippines market:
- Currency: Philippine Peso (PHP)
- Names: Filipino names and businesses
- Phone: +63 format
- Distance: Kilometers
- Pricing: Realistic local service rates

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
