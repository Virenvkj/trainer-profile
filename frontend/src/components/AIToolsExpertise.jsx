import React from 'react';
import { Brain, Zap, Bot, Sparkles, Code, BarChart3, FileText, Image, MessageSquare, Globe } from 'lucide-react';

export const AIToolsExpertise = () => {
  const toolCategories = [
    {
      category: "Conversational AI",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      tools: ["ChatGPT", "Claude", "Gemini", "Grok", "DeepSeek", "Perplexity"]
    },
    {
      category: "Productivity & Automation",
      icon: <Zap className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      tools: ["Emergent", "Zapier", "Notion AI", "Gamma", "NotebookLM", "UiPath"]
    },
    {
      category: "Content Creation",
      icon: <FileText className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      tools: ["Lovable", "Copy.ai", "Jasper", "Grammarly", "Canva AI", "Runway"]
    },
    {
      category: "Data & Analytics",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      tools: ["Quadratics HQ", "Tableau", "Power BI", "DataRobot", "Hex", "Databricks"]
    },
    {
      category: "Development Tools",
      icon: <Code className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-500",
      tools: ["GitHub Copilot", "Cursor", "Replit", "V0", "Bolt", "CodeT5"]
    },
    {
      category: "Visual AI",
      icon: <Image className="h-6 w-6" />,
      color: "from-pink-500 to-rose-500",
      tools: ["Midjourney", "DALL-E", "Stable Diffusion", "Zebra AI", "Figma AI", "Adobe Firefly"]
    }
  ];

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium">
            <Brain className="h-4 w-4 mr-2" />
            AI Tools Mastery
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            50+ AI Tools
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expert Training
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From cutting-edge language models to automation platforms, I provide comprehensive training 
            on the latest AI tools transforming businesses worldwide.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center space-x-3">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                </div>

                {/* Tools List */}
                <div className="space-y-2">
                  {category.tools.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-sm font-medium">{tool}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center space-x-2 text-sm text-blue-600 font-medium">
                    <Sparkles className="h-4 w-4" />
                    <span>Expert Level Training</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-200/30 to-blue-200/30 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative space-y-6">
              <div className="flex justify-center items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">Stay Ahead of AI Evolution</span>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                New AI tools emerge constantly. My training programs are continuously updated with the latest 
                tools and techniques to keep your team at the forefront of AI innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-lg border border-white/50">
                  📅 Weekly Tool Updates
                </div>
                <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-lg border border-white/50">
                  🛠️ Hands-on Practice
                </div>
                <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 shadow-lg border border-white/50">
                  🌟 Real-world Use Cases
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};