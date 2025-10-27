# Kritanta Sasan Roy - Portfolio

A modern, interactive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Interactive 3D Background**: WebGL-powered fluid simulation that responds to mouse movements
- **Smooth Animations**: Framer Motion animations throughout the site
- **Responsive Design**: Fully responsive across all device sizes
- **Modern Tech Stack**: Built with the latest web technologies

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **3D Graphics**: Spline, WebGL

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kritantasasanroy/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on Netlify, Vercel, or any platform that supports Next.js.

### Netlify Deployment

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x or higher

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # UI components (shadcn)
│   └── portfolio-sections.tsx  # Portfolio sections
├── lib/                   # Utility functions
└── public/               # Static assets
```

## License

MIT License - feel free to use this project for your own portfolio!

## Contact

- Email: kritantasasan@gmail.com
- LinkedIn: [linkedin.com/in/kritantasasanroy](https://linkedin.com/in/kritantasasanroy)
- GitHub: [github.com/Kritantasasanroy](https://github.com/Kritantasasanroy)
