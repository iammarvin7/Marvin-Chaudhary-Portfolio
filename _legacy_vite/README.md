# Marvin Chaudhary - Portfolio

A minimal, accessible, single-page portfolio built with React and Vite.

## 📸 Photography Gallery (Auto-Discovery)

The photography section automatically loads images from the `src/assets/photos/` directory.

**To add photos:**
1.  Place your image files (JPG, PNG, WEBP) in **`src/assets/photos/`**.
2.  That's it! They will automatically appear in the gallery grid.
3.  The order is determined by filename (e.g., `photo1.jpg`, `photo2.jpg`).

## 📝 Updating Content

All text content (Resume, Projects, About) is managed in a single file for easy updates:

*   **`src/data/content.js`**: Edit this file to update your bio, experience, education, and projects.

## 🚀 Running Locally

1.  pnpm install (or npm install)
2.  npm run dev

## 📦 Deployment

This project is a static site. You can deploy it to Vercel, Netlify, or GitHub Pages easily.

**Vercel/Netlify:**
1.  Connect your GitHub repo.
2.  It should auto-detect Vite.
3.  Build command: `npm run build`
4.  Output directory: `dist`
