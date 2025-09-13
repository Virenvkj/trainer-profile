import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { AIToolsExpertise } from './components/AIToolsExpertise';
import { TrainingPrograms } from './components/TrainingPrograms';
import { TrainingGallery } from './components/TrainingGallery';
import { SuccessStories } from './components/SuccessStories';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <AIToolsExpertise />
        <TrainingPrograms />
        <TrainingGallery />
        <SuccessStories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;