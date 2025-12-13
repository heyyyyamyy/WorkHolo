import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Layout, MessageSquare, Code, Database, Lock } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const CustomDev: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Custom Mobile App Development",
      desc: "Native iOS and Android applications tailored to your specific workflow and branding.",
      icon: Smartphone
    },
    {
      title: "Custom Web App Development",
      desc: "Progressive Web Apps (PWA) and complex dashboards built with React and modern technologies.",
      icon: Layout
    },
    {
      title: "Private Communication Platforms",
      desc: "Secure, on-premise or private cloud instances of WorkHolo for total data control.",
      icon: MessageSquare
    },
    {
      title: "White-label Solutions",
      desc: "Rebrand the WorkHolo interface entirely with your corporate identity.",
      icon: Code
    },
    {
      title: "API Integrations",
      desc: "Custom connectors to link WorkHolo with your legacy ERP, CRM, or HR systems.",
      icon: Database
    },
    {
      title: "Custom Features for Enterprises",
      desc: "Development of specialized modules and widgets unique to your industry needs.",
      icon: Lock
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen text-slate-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.15),transparent_50%)]"></div>
      </div>

      {/* Hero */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8">
              🛠️ Custom Development
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Bespoke Solutions <br/>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">Tailored for You</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Beyond standard SaaS. We engineer custom solutions that perfectly fit your organization's unique workflow and requirements.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive development services to bring your vision to life
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-800 hover:border-purple-500/30 h-full overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Process/CTA */}
      <div className="container mx-auto px-4 pb-32">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-700/50 backdrop-blur-sm">
            <div className="md:w-1/2 p-12 flex flex-col justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6 text-white">Let's Build Something Extraordinary</h2>
                <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                  Our team of senior engineers and designers is ready to tackle your most complex challenges.
                  Schedule a consultation to discuss your requirements and bring your vision to life.
                </p>
                <button
                  onClick={() => navigate('/contact')}
                  className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 text-lg"
                >
                  Start Your Project
                </button>
              </div>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-gray-950 to-gray-900 min-h-[400px] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-6 opacity-60">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-2xl animate-pulse shadow-lg"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-xl animate-pulse delay-300 shadow-lg"></div>
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-3xl animate-pulse delay-700 shadow-lg"></div>
                  <div className="w-18 h-18 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl animate-pulse delay-500 shadow-lg"></div>
                  <div className="w-22 h-22 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-xl animate-pulse delay-1000 shadow-lg"></div>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl animate-pulse delay-200 shadow-lg"></div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-purple-500/20 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute bottom-12 left-12 w-8 h-8 bg-blue-500/20 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default CustomDev;