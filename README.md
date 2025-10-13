# Genuine Education - Frontend Application

A modern, responsive web application for Genuine Education built with React, Vite, and Tailwind CSS. This project showcases a digital education platform with student registration capabilities and interactive UI components.

## 🚀 Technologies Used

- **React 19.1** - Modern UI library with latest features
- **Vite 7.1** - Next-generation frontend build tool
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **ESLint** - Code quality and consistency
- **JavaScript (ES6+)** - Modern JavaScript features

## 📁 Project Structure

```
prueba_genuine/
├── public/
│   └── images/                    # Public image assets
│       ├── foto_bilinguismo.jpeg
│       ├── GE.png
│       ├── happy_family.jpg
│       ├── jet-pack.png
│       ├── join.jpg
│       └── world-map.png
├── src/
│   ├── assets/          # Bundled image assets
│   ├── components/
│   │   ├── icons/                # SVG icon components
│   │   │   ├── Apps.jsx
│   │   │   ├── GE.jsx
│   │   │   ├── logo_GE.jsx
│   │   │   ├── Mision.jsx
│   │   │   ├── Play.jsx
│   │   │   └── Vision.jsx
│   │   └── sections/             # Main page sections
│   │       ├── CreateUser.jsx    # Student registration form
│   │       ├── Header.jsx        # Hero section
│   │       ├── Join.jsx          # Call to action
│   │       ├── Mission.jsx       # Mission statement
│   │       ├── Navigation.jsx    # Fixed navigation bar
│   │       ├── WhoWeAre.jsx      # About section
│   │       └── World.jsx         # Global reach section
│   ├── App.jsx                   # Main application component
│   ├── App.css                   # Global styles
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Tailwind imports
├── dist/                         # Production build output
├── index.html                    # HTML entry point
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## ✨ Features

- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Modern UI/UX** - Clean, professional interface with smooth interactions
- **Student Registration** - Dynamic form with validation and API integration
- **Section Navigation** - Fixed sidebar navigation for easy page exploration
- **Reusable Components** - Modular architecture with icon and section components
- **Optimized Performance** - Built with Vite for fast development and production builds
- **Accessibility** - ARIA labels and semantic HTML for better accessibility

## 🛠️ Installation and Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd prueba_genuine
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   VITE_BACKEND_URL=http://your-backend-api-url
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📜 Available Scripts

| Command           | Description                               |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start development server with hot-reload  |
| `npm run build`   | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally          |
| `npm run lint`    | Run ESLint to check code quality          |

## 🔧 Configuration

### Environment Variables

- `VITE_BACKEND_URL` - Backend API endpoint for student registration

## 📦 Build and Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```
