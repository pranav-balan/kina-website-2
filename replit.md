# Kina Health Website

## Overview

This is a static investor- and customer-facing website for Kina Health, a B2B AI healthcare startup that provides an AI audit copilot for risk adjustment (RAF) in Medicare Advantage and delegated groups. The website is built using React with TypeScript, shadcn/ui components, and Tailwind CSS for styling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Development**: Hot module replacement via Vite middleware
- **Storage**: In-memory storage implementation with interface for future database integration

## Key Components

### Page Structure
- **Home Page** (`/`): Hero section, company ticker, value propositions, and CTAs
- **Product Page** (`/product`): Product modules and feature descriptions
- **Team Page** (`/team`): Leadership and advisor information
- **Legal Pages**: Terms of Service and Privacy Policy

### Recent Changes (July 16, 2025)
- Removed Contact page and navigation to focus on email-only contact strategy
- Updated navigation to remove "Contact" tab, keeping Home, Product, and Team
- Integrated kina-long.svg logo in navigation and footer
- Updated company ticker to use placeholder PNG files for partner logos
- Improved ticker animation for seamless looping
- Updated color scheme to match brand colors: #10374e (primary), #229799 (secondary), #e0f9fd (accent)
- Removed forms and scheduling references, keeping only email contact strategy

### UI Components
- **Navigation**: Fixed header with responsive mobile menu
- **Layout**: Consistent layout wrapper with navigation and footer
- **Company Ticker**: Animated ticker showing partner companies
- **Footer**: Links, contact information, and social media

### Styling System
- **Design Tokens**: Custom CSS variables for colors, spacing, and typography
- **Color Scheme**: Primary blue (#1c4a5c), secondary teal (#2d7a6b), neutral grays
- **Typography**: Clean, modern typography with proper hierarchy
- **Responsive Design**: Mobile-first approach with breakpoints

## Data Flow

### Static Content
- All content is hardcoded in React components
- No external API calls or dynamic data fetching
- Images and assets served from `attached_assets` directory

### User Interactions
- Navigation between pages via client-side routing
- Contact CTAs link to email (`mailto:hello@kinahealth.com`)
- External links to social media platforms
- Form submissions would be handled via email links

## External Dependencies

### Core Libraries
- **React**: UI library and component system
- **TypeScript**: Type safety and developer experience
- **Wouter**: Lightweight routing solution
- **TanStack Query**: Server state management (prepared for future API integration)

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management

### Development Tools
- **Vite**: Fast build tool and development server
- **ESBuild**: JavaScript bundler for production
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Build Process
1. **Development**: `npm run dev` - Vite dev server with HMR
2. **Build**: `npm run build` - Vite build for client + ESBuild for server
3. **Production**: `npm start` - Serves built application

### Database Integration
- **Drizzle ORM**: Configured for PostgreSQL with Neon database
- **Schema**: Basic user table structure in place
- **Migrations**: Ready for database schema management
- **Storage Interface**: Abstracted storage layer for easy database integration

### Environment Configuration
- **Development**: TypeScript compilation with strict mode
- **Production**: Optimized bundles with tree-shaking
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Hosting Considerations
- **Static Assets**: Client build outputs to `dist/public`
- **Server**: Node.js server bundle in `dist/index.js`
- **Environment**: Designed for deployment on platforms like Vercel, Netlify, or Railway

The application is structured as a full-stack setup but currently operates as a static website with server-side rendering capabilities. The backend infrastructure is prepared for future API endpoints and database integration while maintaining a clean separation of concerns between client and server code.