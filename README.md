# Azure Creative Studio

A high-end, interactive creative agency portfolio featuring a deep blue aesthetic, immersive 3D graphics, and an AI-powered Design Concept Generator.

![Azure Creative Studio Banner](https://via.placeholder.com/1200x600/082f49/38bdf8?text=Azure+Creative+Studio)

## 🌟 Features

*   **Immersive 3D Experience**: Interactive 3D backgrounds using **Three.js** and **React Three Fiber**, featuring floating distorted spheres, wireframe geometries, and starfields.
*   **AI Design Studio**: Integrated **Google Gemini API** (`gemini-3-flash-preview`) tool that generates unique brand identities, color palettes, and typography suggestions based on user prompts.
*   **Modern Aesthetics**: Deep blue "Azure" theme with glassmorphism effects, gradients, and noise overlays.
*   **Smooth Animations**: Advanced scroll-triggered animations and micro-interactions powered by **Framer Motion**.
*   **Responsive Design**: Fully responsive layout built with **Tailwind CSS**.
*   **Architecture**: Built using modern ES Modules and React 18.

## 🛠 Tech Stack

*   **Frontend Library**: [React 18](https://react.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **3D Graphics**:
    *   [Three.js](https://threejs.org/)
    *   [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
    *   [Drei](https://github.com/pmndrs/drei) (Helpers for R3F)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **AI Integration**: [Google GenAI SDK](https://www.npmjs.com/package/@google/genai)
*   **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

*   A modern web browser.
*   A Google Gemini API Key. You can get one at [Google AI Studio](https://aistudio.google.com/).

### Environment Variables

The application requires a valid Google Gemini API key to function. The key is accessed via `process.env.API_KEY` in the application code.

### Project Structure

```
├── components/           # React Components
│   ├── AiConceptGenerator.tsx  # AI Tool logic & UI
│   ├── Contact.tsx       # Contact section with Stars background
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Main landing area with 3D blobs
│   ├── Navbar.tsx        # Responsive navigation
│   ├── Services.tsx      # Services grid with 3D wireframes
│   ├── ThreeBackground.tsx # Shared 3D background components
│   └── Work.tsx          # Portfolio grid
├── services/
│   └── geminiService.ts  # Google GenAI API integration
├── App.tsx               # Main Application component
├── index.html            # Entry point with Import Maps
├── index.tsx             # React Root rendering
├── metadata.json         # Project metadata
└── types.ts              # TypeScript interfaces and types
```

## 🤖 AI Features

The **AI Concept Generator** allows users to input a project topic (e.g., "Sustainable Coffee Shop"). The app sends this prompt to the Gemini model, which returns a JSON structured response containing:

1.  **Project Name**: A creative title.
2.  **Description**: A short, evocative summary.
3.  **Color Palette**: Hex codes and names.
4.  **Typography**: Font pairing recommendations.
5.  **Vibe**: A keyword description of the aesthetic.

## 🎨 Design System

*   **Colors**: Custom "Azure" scale ranging from faint blue (`#f0f9ff`) to deep navy (`#082f49`).
*   **Typography**:
    *   Display: 'Space Grotesk'
    *   Body: 'Inter'
*   **Effects**: Extensive use of `backdrop-blur` for glass effects and CSS gradients for depth.

## 📄 License

This project is open source and available for educational and portfolio purposes.