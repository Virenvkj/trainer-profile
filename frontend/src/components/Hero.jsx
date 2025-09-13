import React from 'react';
import { ArrowRight, Users, Award, TrendingUp, Play } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <Award className="h-4 w-4 mr-2" />
                Corporate AI Training Expert
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Team with
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Mastery Training
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Empowering 1500+ professionals across enterprises with cutting-edge AI tools and strategies. 
                Boost productivity, streamline workflows, and future-proof your business with expert-led training programs.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-3xl font-bold text-gray-900">1500+</span>
                </div>
                <p className="text-gray-600 text-sm">Professionals Trained</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-3xl font-bold text-gray-900">40%</span>
                </div>
                <p className="text-gray-600 text-sm">Productivity Increase</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  <span className="text-3xl font-bold text-gray-900">50+</span>
                </div>
                <p className="text-gray-600 text-sm">AI Tools Covered</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
              >
                Book Training Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
                onClick={() => document.getElementById('expertise').scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-5 w-5" />
                View AI Tools
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Trusted by leading companies:</p>
              <div className="flex flex-wrap items-center gap-6 text-gray-400">
                <span className="font-semibold">Signify</span>
                <span className="font-semibold">CGI</span>
                <span className="font-semibold">TCS</span>
                <span className="font-semibold">Tech Mahindra</span>
                <span className="font-semibold">Voltas</span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_viren-training/artifacts/4repmy7x_linkedin.jpg"
                    alt="Viren Gajjar - AI Corporate Trainer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">AI Expert</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce delay-1000">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Results Driven</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};