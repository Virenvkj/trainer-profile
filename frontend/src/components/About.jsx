import React from 'react';
import { Award, Code, Users, Briefcase, GraduationCap, Star } from 'lucide-react';
import { mockData } from '../mock/mockData';

export const About = () => {
  const { trainer } = mockData;

  const achievements = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "1500+ Professionals Trained",
      description: "Across diverse industries and roles"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "6+ Years Experience",
      description: "Mobile development & corporate training"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Multiple Certifications",
      description: "AWS, Flutter, Web Development"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Proven Results",
      description: "40% average productivity increase"
    }
  ];

  const experience = [
    {
      company: "Signify (Philips Lighting)",
      role: "Mobile Lead",
      period: "2024 - Present",
      achievements: [
        "Led architectural discussions resulting in 20% faster development",
        "Enhanced app performance by 30%",
        "Guided team to 25% increase in user engagement"
      ]
    },
    {
      company: "Tech Mahindra",
      role: "Senior Mobile Developer",
      period: "2022 - 2024",
      achievements: [
        "Deployed scalable eCommerce app serving 100K+ users",
        "Mentored 4+ junior developers with 30% productivity improvement",
        "Integrated real-time code push mechanism"
      ]
    },
    {
      company: "CGI Inc.",
      role: "Senior Software Engineer",
      period: "2022 - 2024",
      achievements: [
        "Improved app response time by 30%",
        "Reduced crash rates by 20%",
        "Generated $500K in additional revenue"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 rounded-full text-sm font-medium">
            <GraduationCap className="h-4 w-4 mr-2" />
            About Viren
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            AI Trainer &
            <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Technology Leader
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining deep technical expertise with proven training methodologies to empower 
            teams with AI capabilities that drive real business results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About & Achievements */}
          <div className="space-y-8">
            {/* About Text */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Mission</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I bridge the gap between cutting-edge AI technology and practical business applications. 
                  With 6+ years in mobile development and a passion for emerging technologies, I've 
                  discovered my true calling in empowering teams to harness AI's transformative power.
                </p>
                <p>
                  My journey began with mobile app development at leading companies like Signify, CGI, 
                  and TCS. But I realized that the real impact comes from sharing knowledge and enabling 
                  others to leverage AI tools for maximum productivity and innovation.
                </p>
                <p>
                  Today, I focus on making AI accessible to everyone - from C-suite executives developing 
                  AI strategies to developers building AI-powered applications, and everything in between.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                      <div className="text-blue-600">
                        {achievement.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">{achievement.title}</h4>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Experience Timeline */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
              
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    
                    {/* Content */}
                    <div className="pl-6 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="font-semibold text-gray-900">{job.role}</h4>
                        <span className="text-sm text-gray-500">{job.period}</span>
                      </div>
                      <p className="text-blue-600 font-medium text-sm">{job.company}</p>
                      
                      <ul className="space-y-1 text-sm text-gray-600">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Timeline line */}
                    {index < experience.length - 1 && (
                      <div className="absolute left-1.5 top-8 w-px h-16 bg-gray-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Image */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_viren-training/artifacts/4repmy7x_linkedin.jpg"
                  alt="Viren Gajjar - Professional AI Trainer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Specialties</h3>
              <div className="grid grid-cols-2 gap-3">
                {trainer.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};