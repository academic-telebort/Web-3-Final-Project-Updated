# Web 3 Final Project

A SvelteKit project template for students to build their final Web 3 project with Firebase integration.

## Features
- User authentication with Firebase
- Dashboard UI with Bootstrap 5
- Modern SvelteKit 2.0 setup
- StackBlitz compatible

## Getting Started

### Prerequisites
- Node.js (v18 or above - compatible with StackBlitz)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd Web-3-Final-Project-main
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or as indicated in the terminal).

## Firebase Setup

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Authentication and Firestore
3. Copy your Firebase config to `src/firebase.js`
4. Replace the placeholder values with your actual Firebase project credentials

## Project Structure
- `src/` - Source code
  - `routes/` - Svelte routes
  - `stores/` - Svelte stores (e.g., authentication)
  - `firebase.js` - Firebase configuration
  - `app.html` - Main HTML template

## StackBlitz Compatibility

This project has been updated to work with StackBlitz and modern Node.js versions. The project now uses:
- SvelteKit 2.0
- Vite 5.0
- Node.js 18+ (compatible with StackBlitz)
- Modern Svelte 4.0

## Troubleshooting

If you encounter any issues:
1. Make sure you're using Node.js 18 or higher
2. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
3. Check that your Firebase configuration is correct

## License
MIT 