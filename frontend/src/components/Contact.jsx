import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { mockData } from '../mock/mockData';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const Contact = () => {
  const { contact } = mockData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    training_type: '',
    participants: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          training_type: '',
          participants: '',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError(response.data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: contact.location,
      href: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: contact.linkedin,
      color: "from-blue-600 to-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium">
            <Send className="h-4 w-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Ready to Transform
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Team with AI?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how AI training can boost your team's productivity. 
            Book a consultation to explore custom training programs for your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.label === 'LinkedIn' ? '_blank' : '_self'}
                    rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : ''}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className={`bg-gradient-to-r ${method.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{method.label}</p>
                      <p className="text-gray-600 text-sm">{method.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Training Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">1500+</div>
                  <div className="text-blue-100 text-sm">Professionals Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">40%</div>
                  <div className="text-blue-100 text-sm">Avg. Productivity Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-100 text-sm">AI Tools Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-blue-100 text-sm">Companies Served</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book a Training Consultation</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-800">Thank you! I'll get back to you within 24 hours.</span>
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <span className="text-red-800">{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@company.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Training Interest
                  </label>
                  <select
                    name="training_type"
                    value={formData.training_type}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select training type</option>
                    <option value="business-leaders">AI for Business Leaders</option>
                    <option value="productivity">Productivity with AI Tools</option>
                    <option value="technical">Advanced AI for IT</option>
                    <option value="custom">Custom Training Program</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Participants
                </label>
                <Input
                  name="participants"
                  value={formData.participants}
                  onChange={handleInputChange}
                  placeholder="e.g., 20-50 people"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your team's AI training needs, goals, and any specific requirements..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? 'Sending...' : 'Send Consultation Request'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};