import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900">
      <Header />
      <Hero />
      <WhatIDo />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;