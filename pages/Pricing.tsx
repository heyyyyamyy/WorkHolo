import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';
import ScrollReveal from '../components/ScrollReveal';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const plans: PricingPlan[] = [
    {
      name: "Basic",
      description: "For small startups getting started.",
      features: [
        "Up to 200 Users",
        "Unlimited Message History",
        "5GB Storage per User",
        "Basic Support"
      ]
    },
    {
      name: "Standard",
      description: "For growing teams needing more power.",
      features: [
        "Up to 500 Users",
        "Unlimited Integrations",
        "10GB Storage per User",
        "Guest Access",
        "Priority Support"
      ],
      isPopular: true
    },
    {
      name: "Premium",
      description: "For established companies.",
      features: [
        "Unlimited Users",
        "Advanced Analytics",
        "20GB Storage per User",
        "99.9% Uptime SLA",
        "24/7 Dedicated Support"
      ]
    },
    {
      name: "Enterprise",
      description: "Maximum security and control.",
      features: [
        "Unlimited Users",
        "Advanced Security & SSO",
        "Unlimited Storage",
        "Audit Logs & Data Export",
        "Dedicated Success Manager",
        "Custom Contracts"
      ]
    }
  ];

  return (
    <div className="bg-gray-950 min-h-screen py-20 text-slate-200">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-slate-400">
              Choose the perfect plan for your team's size and needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 100} className="flex">
              <div 
                className={`relative flex flex-col p-8 rounded-2xl border ${
                  plan.isPopular 
                    ? 'border-blue-500 shadow-xl shadow-blue-900/20' 
                    : 'border-gray-800 shadow-sm hover:shadow-lg hover:border-gray-700'
                } bg-gray-900 transition-all duration-300 w-full h-full hover:transform hover:scale-105`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 text-sm">{plan.description}</p>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-300">
                      <div className="mt-1 min-w-[1.25rem] text-green-500">
                        <Check size={18} />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    plan.isPopular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                      : 'bg-gray-800 text-slate-200 hover:bg-gray-700 border border-gray-700'
                  }`}
                >
                  Request a Demo
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;