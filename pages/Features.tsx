import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MessageCircle, 
  Share2, 
  Users, 
  Settings, 
  Server, 
  Globe, 
  Lock, 
  FileText, 
  Activity 
} from 'lucide-react';
import { FeatureItem } from '../types';
import ScrollReveal from '../components/ScrollReveal';

const Features: React.FC = () => {
  const navigate = useNavigate();

  const features: FeatureItem[] = [
    {
      title: "Real-time Messaging",
      description: "Instantaneous delivery with read receipts, typing indicators, and emoji reactions.",
      icon: MessageCircle
    },
    {
      title: "File Sharing",
      description: "Drag-and-drop sharing for large files with version history and preview capabilities.",
      icon: Share2
    },
    {
      title: "Channels & Teams",
      description: "Organize conversations by topic, project, or department with public and private channels.",
      icon: Users
    },
    {
      title: "Admin Controls",
      description: "Granular permission settings, user management, and remote device wiping.",
      icon: Settings
    },
    {
      title: "Dedicated Hosting",
      description: "Option for isolated environments to ensure maximum performance and data sovereignty.",
      icon: Server
    },
    {
      title: "Custom Domain Support",
      description: "Brand the platform as your own with full white-label domain capabilities.",
      icon: Globe
    },
    {
      title: "Enterprise Security",
      description: "End-to-end encryption, 2FA enforcement, and SSO (SAML/OIDC) integration.",
      icon: Lock
    },
    {
      title: "Audit Logs",
      description: "Comprehensive tracking of all user activities for compliance and security auditing.",
      icon: FileText
    },
    {
      title: "High Uptime",
      description: "99.99% SLA guarantee with redundant global infrastructure.",
      icon: Activity
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen py-20 text-slate-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-24">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              🚀 Powerful Features
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Built for <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">Modern Teams</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Everything you need to collaborate effectively, secure your data, and scale your operations with cutting-edge technology.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-800 hover:border-blue-500/30 h-full overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={500}>
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <button
                onClick={() => navigate('/contact')}
                className="px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 text-lg"
              >
                Request a Demo
              </button>
              <span className="text-slate-400 text-sm">No credit card required • 14-day free trial</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Features;