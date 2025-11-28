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
    <div className="bg-gray-950 min-h-screen text-slate-200">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-24 relative overflow-hidden border-b border-gray-800">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Custom App Development <br/> for Your Business Needs
              </h1>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                Beyond standard SaaS. We engineer bespoke solutions that fit your organization like a glove.
              </p>
            </ScrollReveal>
         </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <ScrollReveal key={index} delay={index * 50}>
              <div className="bg-gray-900 p-8 rounded-xl shadow-md border border-gray-800 border-b-4 border-b-blue-600 hover:-translate-y-1 transition-transform duration-300 h-full">
                <div className="w-12 h-12 bg-blue-900/20 rounded-full flex items-center justify-center text-blue-500 mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Process/CTA */}
      <div className="container mx-auto px-4 pb-20">
        <ScrollReveal>
          <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-800">
             <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-white">Let's Build Something Unique</h2>
                <p className="text-slate-400 mb-8">
                  Our team of senior engineers and designers is ready to tackle your most complex communication challenges. 
                  Schedule a consultation to discuss your requirements.
                </p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="w-fit px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Request a Demo for Custom Solutions
                </button>
             </div>
             <div className="md:w-1/2 bg-gray-950 min-h-[300px] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="grid grid-cols-2 gap-4 opacity-50">
                      <div className="w-24 h-24 bg-blue-900/30 rounded-lg animate-pulse"></div>
                      <div className="w-24 h-24 bg-indigo-900/30 rounded-lg"></div>
                      <div className="w-24 h-24 bg-indigo-900/30 rounded-lg"></div>
                      <div className="w-24 h-24 bg-blue-900/30 rounded-lg animate-pulse"></div>
                   </div>
                </div>
             </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default CustomDev;