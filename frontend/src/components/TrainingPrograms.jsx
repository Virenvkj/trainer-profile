import React from 'react';
import { Monitor, Users, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const TrainingPrograms = () => {
  const programs = [
    {
      title: "AI Fundamentals for Business Leaders",
      duration: "2 Days",
      audience: "Executives & Managers",
      mode: "Hybrid",
      price: "Custom Pricing",
      features: [
        "AI Strategy & ROI Planning",
        "Risk Assessment & Ethics",
        "Implementation Roadmaps",
        "Change Management",
        "Competitive Advantage"
      ],
      popular: false
    },
    {
      title: "Productivity Boost with AI Tools",
      duration: "3 Days",
      audience: "All Departments",
      mode: "Virtual & Offline",
      price: "Most Popular",
      features: [
        "ChatGPT, Claude, Gemini Mastery",
        "Workflow Automation",
        "Content Creation Tools",
        "Data Analysis with AI",
        "Integration Strategies"
      ],
      popular: true
    },
    {
      title: "Advanced AI for IT Professionals",
      duration: "5 Days",
      audience: "Developers & IT Teams",
      mode: "Intensive Workshop",
      price: "Premium Package",
      features: [
        "AI Development Frameworks",
        "Model Integration & APIs",
        "Custom AI Solutions",
        "Performance Optimization",
        "Security Best Practices"
      ],
      popular: false
    }
  ];

  const deliveryMethods = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Virtual Training",
      description: "Interactive online sessions with real-time collaboration",
      benefits: ["Global accessibility", "Recorded sessions", "Digital resources"]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "On-site Training",
      description: "Customized in-person workshops at your location",
      benefits: ["Team bonding", "Hands-on practice", "Immediate feedback"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "Adapted to your team's availability and timezone",
      benefits: ["Minimal disruption", "Progressive learning", "Follow-up support"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="training" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-medium">
            <Star className="h-4 w-4 mr-2" />
            Training Programs
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Tailored AI Training
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              For Every Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs designed for different roles and skill levels. 
            From business leaders to technical teams, we've got you covered.
          </p>
        </div>

        {/* Training Programs */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className={`relative bg-white border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                program.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'
              }`}
            >
              {program.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-xl font-bold text-gray-900">{program.title}</CardTitle>
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{program.audience}</span>
                    </div>
                  </div>
                  <div className="text-sm text-blue-600 font-medium">{program.mode}</div>
                </div>
                <div className="text-2xl font-bold text-gray-900">{program.price}</div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${
                    program.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Get Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Delivery Methods */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Training Delivery Options</h3>
            <p className="text-gray-600">Choose the format that works best for your team</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {deliveryMethods.map((method, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl">
                  <div className="text-blue-600">
                    {method.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{method.title}</h4>
                <p className="text-gray-600 text-sm">{method.description}</p>
                <div className="space-y-1">
                  {method.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-xs text-blue-600 font-medium">
                      • {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};