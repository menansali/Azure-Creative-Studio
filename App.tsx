import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import AiConceptGenerator from './components/AiConceptGenerator';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-azure-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <AiConceptGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;