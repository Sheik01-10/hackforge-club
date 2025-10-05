# HackForge - Al-Ameen Engineering College

A modern, responsive website for HackForge, the premier technology club at Al-Ameen Engineering College. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Clean, professional UI with dark mode support
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Interactive Components**: Smooth animations and hover effects
- **Accessibility**: WCAG compliant with semantic HTML and keyboard navigation
- **Performance Optimized**: Fast loading with lazy-loaded images
- **SEO Ready**: Complete meta tags and Open Graph support

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hackforge-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── contexts/           # React contexts
│   └── ThemeContext.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── AboutClub.tsx
│   ├── AboutCollege.tsx
│   ├── Events.tsx
│   ├── Team.tsx
│   └── Contact.tsx
├── App.tsx             # Main app component
└── main.tsx           # App entry point
```

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deployment Options

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

#### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your web server

## 🎨 Customization

### Colors
The design uses a carefully crafted color system defined in `tailwind.config.js`:
- Primary: Blue (#0b6cf5)
- Accent: Amber (#ffb400) 
- Neutral: Grays with dark mode variants

### Content
- Update team member information in `src/pages/Team.tsx`
- Modify event details in `src/pages/Events.tsx`
- Edit club information in `src/pages/AboutClub.tsx`
- Update college details in `src/pages/AboutCollege.tsx`
- Change contact information in `src/pages/Contact.tsx`

### Images
Replace placeholder images with actual photos:
- Team member photos (300x300px recommended)
- Event images (600x400px recommended) 
- Use high-quality images from Pexels or your own photos

## 🔧 Configuration

### Google Forms Integration
To connect the registration forms to Google Forms:

1. Create a Google Form with the required fields
2. Get the form's action URL
3. Update the form submission handlers in `Events.tsx` and `Contact.tsx`

### Google Maps
Update the map embed URL in `Contact.tsx` with your college's actual location.

### Social Media Links
Update social media URLs in `Footer.tsx` and `Contact.tsx` with your actual profiles.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)

## 📱 Performance

The website is optimized for performance:
- Lazy loading of images
- Code splitting with React Router
- Optimized bundle size
- Progressive enhancement

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Images from [Pexels](https://pexels.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📞 Support

For support and questions:
- Email: hackforge@alameen.edu
- Create an issue in this repository

---

Made with ❤️ by HackForge Team