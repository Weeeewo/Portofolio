# Jason Yoswara - Netflix-Style Portfolio

A modern, cinematic portfolio website inspired by Netflix's design language, built with Vue.js 3 and featuring smooth animations, video playback, and automatic image gallery loading.

## 🎬 Features

- **Netflix-Style Design**: Dark, cinematic UI with hover effects and smooth transitions
- **Video Project Demos**: Automatic video playback when viewing project details
- **Auto-Loading Image Galleries**: Dynamically loads all project screenshots
- **Full-Screen Project Modals**: Detailed project information with interactive galleries
- **Dark/Light Mode**: Seamless theme switching with localStorage persistence
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Animations**: Cinematic transitions and effects throughout
- **Contact Form**: Functional contact section with form validation

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:

```bash
npm install
```

2. **Run development server**:

```bash
npm run dev
```

3. **Open browser**:
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Portofolio-Jason/
├── src/
│   ├── components/
│   │   ├── Navbar.vue          # Navigation with theme toggle
│   │   ├── Hero.vue            # Hero section with gradient background
│   │   ├── Projects.vue        # Projects showcase grid
│   │   ├── ProjectCard.vue     # Individual project poster card
│   │   ├── ProjectModal.vue    # Full-screen project details with video
│   │   ├── About.vue           # About section
│   │   ├── Skills.vue          # Skills and technologies
│   │   ├── Education.vue       # Education timeline
│   │   ├── Contact.vue         # Contact form and info
│   │   └── Footer.vue          # Footer with social links
│   ├── App.vue                 # Main app component
│   ├── main.js                 # Vue app initialization
│   └── style.css               # Global styles and animations
├── Demo Website/               # Project assets
│   ├── Gambar/                # Project screenshots
│   │   ├── QuraShop/
│   │   ├── ChickenGang/
│   │   └── Cineplay/
│   └── Video/                 # Project demo videos
│       ├── DemoQuraShop.mkv
│       ├── DemoChickenGang.mp4
│       └── DemoCineplay.mkv
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design Features

### Netflix-Inspired Elements

- **Poster-Style Cards**: Each project displays as a movie poster with hover effects
- **Play Icons**: Animated play buttons appear on hover
- **Full-Screen Modals**: Clicking a project opens a Netflix-style detail view
- **Video Player**: Auto-playing video demos with custom controls
- **Image Galleries**: Automatically loaded project screenshots
- **Dark Theme**: Netflix's signature dark interface as default

### Key Interactions

1. **Project Cards**: Hover to see details and play icon
2. **Video Playback**: Auto-plays when modal opens, with play/pause and mute controls
3. **Image Gallery**: Click images to view full-screen with navigation
4. **Theme Toggle**: Switch between dark and light modes
5. **Smooth Scrolling**: All navigation links scroll smoothly

## 🛠️ Technologies Used

### Frontend

- **Vue.js 3**: Composition API for reactive components
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom animations and transitions
- **Modern JavaScript**: ES6+ features

### Projects Showcased

1. **QuraShop** - E-Commerce Platform

   - Vue.js, Laravel, JWT Authentication
   - Product catalog, shopping cart, user profiles

2. **ChickenGang** - Restaurant Website

   - Vue.js, Laravel, MySQL
   - Menu showcase, contact forms, responsive design

3. **CinePlay** - Cinema Booking System
   - Vue.js, Laravel, Payment Integration
   - Seat selection, ticket booking, dark mode

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Customization

### Adding New Projects

Edit `src/components/Projects.vue` and add to the `projects` array:

```javascript
{
  id: 4,
  name: 'Project Name',
  title: 'Full Project Title',
  tagline: 'Short description',
  tech: ['Tech1', 'Tech2'],
  description: 'Full description...',
  features: ['Feature 1', 'Feature 2'],
  github: 'https://github.com/...',
  folder: 'ProjectFolder',
  video: '/Demo Website/Video/demo.mp4',
  thumbnail: '/Demo Website/Gambar/ProjectFolder/thumbnail.png'
}
```

### Changing Colors

Edit CSS variables in `src/style.css`:

```css
:root {
  --bg-primary: #141414;
  --accent: #e50914;
  /* ... other variables */
}
```

### Updating Personal Info

- Edit contact information in `src/components/Contact.vue`
- Update social links in `src/components/Footer.vue`
- Modify bio in `src/components/About.vue`

## 🚀 Deployment

### Deploy to Vercel

```bash
npm run build
vercel --prod
```

### Deploy to Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Build the project:

```bash
npm run build
```

2. Push `dist` folder to `gh-pages` branch

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Contact

**Jason Yoswara**

- Email: jason.yoswara@gmail.com
- GitHub: [@Weeeewo](https://github.com/Weeeewo)
- LinkedIn: [Jason Yoswara](https://www.linkedin.com/in/jason-yoswara/)

## 🙏 Acknowledgments

- Design inspiration from Netflix
- Built with Vue.js and modern web technologies
- Icons from SVG libraries

---

**Built with Vue.js & ❤️**
