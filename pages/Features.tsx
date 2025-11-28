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
    <div className="bg-gray-950 min-h-screen py-20 text-slate-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Powerful Features for <br/>
              <span className="text-blue-500">Modern Teams</span>
            </h1>
            <p className="text-xl text-slate-400">
              Everything you need to collaborate effectively, secure your data, and scale your operations.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="bg-gray-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-blue-500/50 group h-full">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={400}>
          <div className="text-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-10 py-4 bg-white text-gray-900 font-bold rounded-xl shadow-lg hover:bg-slate-200 transition-all transform hover:-translate-y-1"
            >
              Request a Demo
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Features;