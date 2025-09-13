import React from 'react';
import { Brain, Mail, Phone, Linkedin, Globe, Heart } from 'lucide-react';
import { mockData } from '../mock/mockData';

export const Footer = () => {
  const { contact } = mockData;

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'AI Tools', href: '#expertise' },
    { name: 'Training Programs', href: '#training' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Success Stories', href: '#success' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'AI Fundamentals Training',
    'Productivity with AI Tools',
    'Advanced AI for Developers',
    'Custom Training Programs',
    'AI Strategy Consulting'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Viren Gajjar</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering teams with AI expertise. Transforming 1500+ professionals 
              through cutting-edge AI training programs and practical workshops.
            </p>
            <div className="flex space-x-3">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Training Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <a
                  href={`tel:${contact.phone}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {contact.phone}
                </a>
              </div>
              <div className="text-gray-400 text-sm">
                📍 {contact.location}
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-6">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Book Training Session
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Viren Gajjar. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for AI transformation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};