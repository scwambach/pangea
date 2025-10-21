# Pangea

A modern, full-stack restaurant discovery platform built with Next.js 15, Sanity CMS, and TypeScript. Pangea features real-time content management, visual editing capabilities, and a responsive design optimized for restaurant exploration.

## 🚀 Features

- **🎨 Modern Design**: Beautiful, responsive UI built with Tailwind CSS
- **📱 Mobile-First**: Optimized for all device sizes
- **⚡ Fast Performance**: Built with Next.js 15 and Turbopack for lightning-fast development
- **📝 Content Management**: Powered by Sanity CMS with real-time updates
- **👁️ Visual Editing**: Live preview and visual editing capabilities
- **🔍 SEO Optimized**: Dynamic metadata and sitemap generation
- **📊 Analytics Ready**: Built-in support for tracking and analytics
- **🌐 TypeScript**: Fully typed for better developer experience

## 🛠️ Tech Stack

### Frontend

- **Next.js 15.5.6** - React framework with App Router
- **React 19.2.0** - Latest React with concurrent features
- **TypeScript 5** - Type safety and better DX
- **Tailwind CSS 4** - Utility-first CSS framework
- **Styled Components 6** - CSS-in-JS styling

### Backend & CMS

- **Sanity CMS 4.10.3** - Headless CMS with real-time capabilities
- **Sanity Studio** - Integrated content management interface
- **GROQ** - Query language for content fetching

### Development Tools

- **Turbopack** - Ultra-fast bundler for development
- **ESLint 9** - Code linting and formatting
- **PostCSS** - CSS processing and optimization

### Key Libraries

- **next-sanity** - Sanity integration for Next.js
- **@sanity/visual-editing** - Live preview and visual editing
- **react-icons** - Icon library
- **dayjs** - Date manipulation library

## 📁 Project Structure

```
pangea/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (sanity)/          # Sanity Studio routes
│   │   │   └── studio/
│   │   ├── (site)/            # Main site routes
│   │   │   ├── blog/          # Blog pages
│   │   │   └── [slug]/        # Dynamic pages
│   │   ├── api/               # API routes
│   │   │   ├── draft-mode/    # Preview mode endpoints
│   │   │   └── emailSubmission/ # Email handling
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── modules/           # Reusable UI modules
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── RestaurantGrid.tsx
│   │   └── ...
│   ├── sanity/                # Sanity configuration
│   │   ├── lib/               # Sanity utilities
│   │   ├── schemaTypes/       # Content schemas
│   │   └── structure.ts       # Studio structure
│   ├── queries/               # GROQ queries
│   ├── utils/                 # Utility functions
│   └── images/                # Static images
├── public/                    # Public assets
├── sanity.config.ts          # Sanity Studio config
├── next.config.ts            # Next.js configuration
└── tailwind.config.js        # Tailwind CSS config
```

## 🏁 Getting Started

### Prerequisites

- Node.js 20.19+ (recommended)
- npm 10.5+
- A Sanity account and project

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/scwambach/pangea.git
   cd pangea
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env.local` file in the root directory:

   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-04-28
   SANITY_API_READ_TOKEN=your_read_token

   # Site Configuration
   SITE_URL=http://localhost:3000

   # Preview/Draft Mode
   PREVIEW_TOKEN=your_preview_token
   ```

4. **Set up Sanity**

   If you don't have a Sanity project yet:

   ```bash
   npx sanity@latest init
   ```

   Follow the prompts to create a new project or connect to an existing one.

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Access the application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## 📚 Content Management

### Sanity Studio

Access the content management interface at `/studio` where you can:

- **Manage Restaurants**: Add, edit, and organize restaurant listings
- **Create Blog Posts**: Write and publish blog content
- **Update Global Settings**: Configure site-wide settings
- **Manage Categories**: Organize content with custom categories
- **Homepage Content**: Update hero sections, features, and layouts

### Content Types

The project includes the following content schemas:

- **Restaurant**: Restaurant listings with location, menu, and details
- **Post**: Blog posts and articles
- **Category**: Content categorization
- **HomePage**: Homepage content and layout
- **Global Settings**: Site-wide configuration

### Visual Editing

The platform supports live visual editing:

1. Enable draft mode by visiting `/api/draft-mode/enable`
2. Navigate to any page to see live editing overlays
3. Click on editable content to jump directly to Sanity Studio
4. Changes appear in real-time without page refresh

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Configure environment variables** in Vercel dashboard
3. **Deploy**: Vercel will automatically deploy on each push to main

### Manual Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start
   ```

### Environment Variables for Production

Ensure these variables are set in your production environment:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-04-28
SANITY_API_READ_TOKEN=your_production_read_token
SITE_URL=https://yourdomain.com
PREVIEW_TOKEN=your_secure_preview_token
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Key Development Features

- **Hot Reload**: Instant updates during development
- **TypeScript**: Full type safety and IntelliSense
- **Visual Editing**: Live preview of content changes
- **Real-time Updates**: Content changes reflect immediately
- **Error Boundaries**: Graceful error handling

### Customization

#### Adding New Components

1. Create component in `src/components/`
2. Export from appropriate index file
3. Import and use in pages or other components

#### Adding Content Types

1. Create schema in `src/sanity/schemaTypes/`
2. Add to schema index file
3. Create corresponding TypeScript types
4. Build queries and components

#### Styling

- Use Tailwind CSS classes for styling
- Custom styles in component files using styled-components
- Global styles in `src/app/globals.css`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/scwambach/pangea/issues) page
2. Create a new issue with detailed description
3. Reach out to the maintainers

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Sanity](https://www.sanity.io/) - The content management system
- [Tailwind CSS](https://tailwindcss.com/) - The utility-first CSS framework
- [Vercel](https://vercel.com/) - Hosting and deployment platform

---

**Built with ❤️ by [Scott Wambach](https://github.com/scwambach)**
