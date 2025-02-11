# Kirsty

![Kirsty Banner](./src/assets/BrandImage.jpg)

## Overview

Kirsty is a cutting-edge web application developed by Ultrasound Ventures Limited that revolutionizes personal fitness through AI-powered resistance band training. Our platform delivers personalized training experiences, adapting to each user's fitness level and goals.

## Key Features

- 🏋️‍♀️ Personalized AI-driven resistance band workouts
- 📊 Progress tracking and analytics
- 🎯 Multi-level difficulty progression
- 📱 Responsive and mobile-first design
- 🤖 Real-time AI workout guidance
- 🔄 Customizable workout routines
- 📈 Performance metrics and insights
- 🌍 Train anywhere with minimal equipment

## Tech Stack

- [React 18](https://reactjs.org/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe programming
- [Vite](https://vitejs.dev/) - Next-gen frontend tooling
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- [DaisyUI](https://daisyui.com/) - Tailwind component library
- [Firebase](https://firebase.google.com/) - Backend and hosting
- [React Router](https://reactrouter.com/) - Navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm
- Firebase CLI for deployment

### Installation & Setup

1. Clone the repository
   ```sh
   git clone https://github.com/Ultrasound-Ventures/kirsty.git
   ```

2. Navigate to the project directory
   ```sh
   cd kirsty
   ```

3. Install dependencies
   ```sh
   npm install
   ```

4. Set up Firebase
   ```sh
   npm install -g firebase-tools
   firebase login
   firebase init
   ```

5. Start the development server
   ```sh
   npm run dev
   ```

## Project Structure

```
kirsty/
├── public/
│   └── logo.svg
├── src/
│   ├── assets/
│   │   └── BrandImage.jpg
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── WorkoutCard.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── firebase/
│   │   └── config.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── firebase.json
└── README.md
```

## Deployment

Deploy to Firebase:
```sh
npm run build
firebase deploy
```

## Contributing

We welcome contributions to Kirsty! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Ultrasound Ventures Limited
- Email: peter@ultrasound.vc
- Website: https://ultrasound.vc
- GitHub: [Ultrasound-Ventures](https://github.com/Ultrasound-Ventures)

Project Link: [https://github.com/Ultrasound-Ventures/kirsty](https://github.com/Ultrasound-Ventures/kirsty)

---
Built with 💪 by Ultrasound Ventures Limited
