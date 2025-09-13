import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { mockData } from '../mock/mockData';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { contact } = mockData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    training_type: '',
    participants: '',
    phone: '',
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
      // EmailJS configuration
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'your_service_id_here' || 
          templateId === 'your_template_id_here' || 
          publicKey === 'your_public_key_here') {
        
        // Demo mode - show success message but don't actually send email
        console.log('EmailJS Demo Mode - Form data:', formData);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          training_type: '',
          participants: '',
          phone: '',
          message: ''
        });
        setTimeout(() => setIsSubmitted(false), 5000);
        return;
      }

      // Prepare template parameters
      const templateParams = {
        to_name: 'Viren Gajjar',
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone || 'Not provided',
        user_company: formData.company || 'Not specified',
        training_type: formData.training_type || 'Not specified',
        participants_count: formData.participants || 'Not specified',
        user_message: formData.message,
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        training_type: '',
        participants: '',
        phone: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError('Failed to send message. Please try again or contact directly via email.');
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ready to Transform Your Team?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how AI training can boost your team's productivity and drive innovation in your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.label === 'LinkedIn' ? '_blank' : '_self'}
                  rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : ''}
                  className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100"
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">{method.label}</p>
                    <p className="text-gray-600">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-3">Quick Response Guarantee</h4>
              <p className="text-gray-600 text-sm mb-3">
                I typically respond to all inquiries within 4-6 hours during business days.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Free consultation call available
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  Customized training proposals
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Flexible scheduling options
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            
            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <p className="text-green-800">Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.</p>
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                <p className="text-red-800">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@company.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone/WhatsApp Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">Include country code for WhatsApp</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Training Type of Interest
                  </label>
                  <Input
                    type="text"
                    name="training_type"
                    value={formData.training_type}
                    onChange={handleInputChange}
                    placeholder="e.g., AI Fundamentals, Productivity Tools"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Participants
                  </label>
                  <Input
                    type="text"
                    name="participants"
                    value={formData.participants}
                    onChange={handleInputChange}
                    placeholder="e.g., 10-20 people"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Tell me about your training needs, timeline, and any specific requirements..."
                  className="w-full"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
