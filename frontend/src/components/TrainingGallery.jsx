import React, { useState } from 'react';
import { Camera, Users, Play, ArrowRight, X } from 'lucide-react';
import { Button } from './ui/button';

export const TrainingGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const trainingImages = [
    {
      id: 1,
      url: "https://customer-assets.emergentagent.com/job_viren-training/artifacts/455lfb36_WhatsApp%20Image%202025-09-12%20at%207.40.01%20PM.jpeg",
      title: "Corporate AI Training Session",
      description: "Interactive training with diverse team of professionals",
      participants: "25+ Professionals"
    },
    {
      id: 2,
      url: "https://customer-assets.emergentagent.com/job_viren-training/artifacts/bhcouo8a_WhatsApp%20Image%202025-09-12%20at%207.40.02%20PM.jpeg",
      title: "Expert AI Tools Presentation",
      description: "Leading presentation on latest AI productivity tools",
      participants: "Executive Workshop"
    },
    {
      id: 3,
      url: "https://customer-assets.emergentagent.com/job_viren-training/artifacts/f8ktxpl9_WhatsApp%20Image%202025-09-12%20at%207.40.03%20PM%20%281%29.jpeg",
      title: "Advanced AI Training Workshop",
      description: "Hands-on training session with practical implementations",
      participants: "Technical Teams"
    },
    {
      id: 4,
      url: "https://customer-assets.emergentagent.com/job_viren-training/artifacts/iykavidt_WhatsApp%20Image%202025-09-12%20at%207.40.03%20PM.jpeg",
      title: "Enterprise Team Training",
      description: "Large scale corporate training for productivity enhancement",
      participants: "50+ Participants"
    },
    {
      id: 5,
      url: "https://customer-assets.emergentagent.com/job_viren-training/artifacts/yyotwty3_WhatsApp%20Image%202025-09-12%20at%207.40.04%20PM%20%281%29.jpeg",
      title: "Interactive AI Workshop",
      description: "Engaging audience with practical AI tool demonstrations",
      participants: "Mixed Audience"
    },
    {
      id: 6,
      url: "https://customer-assets.emergentagent.com/job_viren-training/artifacts/ur4afxlk_WhatsApp%20Image%202025-09-12%20at%207.40.05%20PM%20%281%29.jpeg",
      title: "Large Scale Corporate Training",
      description: "Comprehensive AI training session with executive teams",
      participants: "40+ Executives"
    },
    {
      id: 7,
      url: "https://customer-assets.emergentagent.com/job_viren-training/artifacts/y3ugh302_WhatsApp%20Image%202025-09-12%20at%207.40.06%20PM%20%281%29.jpeg",
      title: "Training Session Completion",
      description: "Successful conclusion of AI productivity training program",
      participants: "Mixed Teams"
    },
    {
      id: 8,
      url: "https://customer-assets.emergentagent.com/job_viren-training/artifacts/vauroglc_WhatsApp%20Image%202025-09-12%20at%207.40.06%20PM%20%282%29.jpeg",
      title: "One-shot Prompting Masterclass",
      description: "Advanced AI prompting techniques and best practices",
      participants: "AI Enthusiasts"
    },
    {
      id: 9,
      url: "https://customer-assets.emergentagent.com/job_viren-training/artifacts/0daggmhy_WhatsApp%20Image%202025-09-12%20at%207.40.06%20PM.jpeg",
      title: "Professional Workshop Setup",
      description: "Structured learning environment with hands-on practice",
      participants: "30+ Professionals"
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium">
            <Camera className="h-4 w-4 mr-2" />
            Training Gallery
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Real Training Sessions
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the impact of AI training across different organizations. 
            From intimate workshops to large corporate sessions - transforming teams nationwide.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {trainingImages.map((image, index) => (
            <div 
              key={image.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200 mb-2">{image.description}</p>
                  <div className="flex items-center space-x-2 text-xs">
                    <Users className="h-4 w-4" />
                    <span>{image.participants}</span>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Play className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {image.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{image.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{image.participants}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-2xl mb-2">
                <div className="text-3xl font-bold text-purple-600">150+</div>
              </div>
              <div className="text-sm font-medium text-gray-600">Training Sessions</div>
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl mb-2">
                <div className="text-3xl font-bold text-blue-600">1500+</div>
              </div>
              <div className="text-sm font-medium text-gray-600">Professionals Trained</div>
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl mb-2">
                <div className="text-3xl font-bold text-green-600">30+</div>
              </div>
              <div className="text-sm font-medium text-gray-600">Companies Served</div>
            </div>
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl mb-2">
                <div className="text-3xl font-bold text-orange-600">98%</div>
              </div>
              <div className="text-sm font-medium text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 px-8 py-3 text-lg"
          >
            Book Your Training Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 z-10"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
            
            <img 
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 mb-4">{selectedImage.description}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Users className="h-4 w-4" />
                <span>{selectedImage.participants}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};