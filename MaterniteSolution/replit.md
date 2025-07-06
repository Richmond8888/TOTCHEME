# TOTCHEME SANTÉ ET VIE - Fertility Treatment Website

## Overview

This is a French-language fertility treatment website built with React and Express, focusing on holistic infertility treatment using ancestral African wisdom. The application combines modern web technologies with traditional African healing approaches to provide a comprehensive platform for fertility services.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with Shadcn/ui components
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with custom styling
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite for fast development and building

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Validation**: Zod for request/response validation
- **Development**: Hot module replacement via Vite middleware

## Key Components

### Database Schema
- **PostgreSQL Database**: Fully integrated with Neon Database
- **Users table**: Basic user authentication structure
- **Contact submissions table**: Stores contact form data with fields for personal information, age, conception duration, and messages
- **Database Storage**: Replaced in-memory storage with PostgreSQL for persistence
- **Migrations**: Managed through Drizzle Kit with `npm run db:push`

### API Endpoints
- `POST /api/contact`: Submit contact form for fertility consultation
- `GET /api/contact-submissions`: Retrieve all submissions (admin endpoint)

### Frontend Pages
- **Home**: Single-page application with multiple sections
- **404**: Not found page with error handling

### UI Sections
- **Hero**: Main landing section with call-to-action
- **Approach**: 4-step treatment process explanation
- **Kit Details**: Information about treatment kits
- **Why Choose Us**: Benefits and unique selling points
- **Testimonials**: Customer success stories
- **Contact**: Contact form with validation
- **Footer**: Links and additional information

## Data Flow

1. **User Interaction**: Users navigate through the single-page application
2. **Form Submission**: Contact form collects user information and treatment preferences
3. **Validation**: Client-side validation using React Hook Form and Zod
4. **API Request**: Form data sent to Express backend
5. **Database Storage**: Contact submissions stored in PostgreSQL
6. **Response**: Success/error feedback via toast notifications
7. **WhatsApp Integration**: Floating WhatsApp button for direct contact

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm & drizzle-zod**: Database ORM and validation
- **@radix-ui/***: Accessible UI components
- **framer-motion**: Animation library
- **react-hook-form**: Form handling
- **@tanstack/react-query**: Server state management

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Production bundling

## Deployment Strategy

### Development
- **Scripts**: `npm run dev` for development with hot reload
- **Environment**: NODE_ENV=development
- **Database**: Uses DATABASE_URL environment variable

### Production
- **Build Process**: Vite builds client, ESBuild bundles server
- **Output**: Client assets in `dist/public`, server bundle in `dist/`
- **Startup**: `npm start` runs the production server
- **Database**: Drizzle migrations via `npm run db:push`

### Configuration
- **Environment Variables**: DATABASE_URL required for database connection
- **Static Assets**: Served from `dist/public` in production
- **API Routes**: Prefixed with `/api/`

## Changelog

- July 05, 2025: Initial setup with basic fertility treatment website
- July 05, 2025: Enhanced website with medical information, logo integration, and mobile optimization
  - Added comprehensive medical information section about female infertility
  - Integrated TOTCHEME logo in navigation and footer
  - Enhanced testimonials with detailed, realistic customer stories
  - Improved mobile responsiveness across all sections
  - Added SEO optimization with better meta tags and descriptions
  - Fixed CSS import issues and removed TypeScript errors
  - Enhanced contact form with better validation
  - Added floating WhatsApp button with animation
  - Improved hero section typography for different screen sizes
- July 05, 2025: Database integration and production readiness
  - Integrated PostgreSQL database with Neon Database
  - Replaced in-memory storage with persistent database storage
  - Created database tables using Drizzle migrations
  - Updated storage layer for contact form submissions
  - Ensured production-ready deployment configuration
- July 05, 2025: Android device optimization and feature updates
  - Optimized site specifically for Android devices (Xiaomi and others)
  - Updated email addresses from gnanhapolivier@gmail.com to totchemesanteetvie@gmail.com
  - Added automatic email redirection after form submission
  - Removed +229 prefix from phone number field
  - Enhanced "Consultation Médicale Recommandée" section with high visibility
  - Added happy couple image in testimonials section
  - Implemented Android-specific CSS optimizations
  - Added touch-friendly interface with 48px minimum touch targets
  - Optimized viewport and font rendering for Android browsers
  - Enhanced form autocomplete for better mobile experience

## User Preferences

- Preferred communication style: Simple, everyday language
- Website should be adapted for all device types (mobile-responsive)
- Content should include medical information from reliable sources
- Logo should be integrated throughout the site
- All code errors should be fixed for proper deployment