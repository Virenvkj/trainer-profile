import React from 'react';
import { TrendingUp, Users, DollarSign, Clock, ArrowRight, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { mockData } from '../mock/mockData';

export const SuccessStories = () => {
  const { successStories } = mockData;

  return (
    <section id="success" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium">
            <TrendingUp className="h-4 w-4 mr-2" />
            Success Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Transforming Teams
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Delivering Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real companies, real results. See how AI training has transformed productivity 
            and efficiency across different industries and team sizes.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="space-y-12">
          {successStories.map((story, index) => (
            <Card key={story.id} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Company Info & Results */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">{story.company}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">{story.industry}</span>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{story.participants} participants</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{story.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Results Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start space-x-2">
                          <TrendingUp className="h-5 w-5 text-green-600" />
                          <span className="text-2xl font-bold text-gray-900">+{story.results.productivityIncrease}%</span>
                        </div>
                        <p className="text-gray-600 text-sm">Productivity</p>
                      </div>
                      <div className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start space-x-2">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <span className="text-2xl font-bold text-gray-900">-{story.results.timeReduction}%</span>
                        </div>
                        <p className="text-gray-600 text-sm">Time Saved</p>
                      </div>
                      <div className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start space-x-2">
                          <DollarSign className="h-5 w-5 text-purple-600" />
                          <span className="text-2xl font-bold text-gray-900">{story.results.processSavings}</span>
                        </div>
                        <p className="text-gray-600 text-sm">Cost Savings</p>
                      </div>
                    </div>

                    {/* Tools Used */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900">AI Tools Implemented:</h4>
                      <div className="flex flex-wrap gap-2">
                        {story.tools.map((tool, toolIndex) => (
                          <span key={toolIndex} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-medium rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="relative">
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                      <Quote className="h-8 w-8 text-blue-600 mb-4" />
                      <blockquote className="text-gray-700 leading-relaxed mb-4">
                        "{story.testimonial.text}"
                      </blockquote>
                      <div className="space-y-1">
                        <div className="font-semibold text-gray-900">{story.testimonial.author}</div>
                        <div className="text-sm text-gray-600">{story.testimonial.position}</div>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-70"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="relative bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-3xl p-12 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full -translate-y-20 -translate-x-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-200/20 to-pink-200/20 rounded-full translate-y-16 translate-x-16"></div>
            
            <div className="relative space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Team?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                Join the 1500+ professionals who have already experienced the power of AI training. 
                Let's discuss how we can boost your team's productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => document.getElementById('training').scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-white/50 text-gray-700 font-semibold rounded-xl hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Training Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};