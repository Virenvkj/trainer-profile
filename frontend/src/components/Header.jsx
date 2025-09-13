import React, { useState } from 'react';
import { Menu, X, Brain, Zap } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Viren Gajjar</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('expertise')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              AI Tools
            </button>
            <button 
              onClick={() => scrollToSection('training')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Training Programs
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('success')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Success Stories
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            >
              Book Training
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('expertise')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                AI Tools
              </button>
              <button 
                onClick={() => scrollToSection('training')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Training Programs
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('success')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Success Stories
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 mt-4"
              >
                Book Training
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};