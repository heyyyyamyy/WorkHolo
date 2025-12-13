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
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen py-20 text-slate-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              💰 Transparent Pricing
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Choose Your <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Perfect Plan</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Flexible pricing designed for teams of all sizes. Scale as you grow with our enterprise-ready solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 150} className="flex">
              <div
                className={`relative flex flex-col p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 w-full h-full group ${
                  plan.isPopular
                    ? 'border-green-500/50 shadow-2xl shadow-green-900/20 bg-gradient-to-br from-gray-900/80 to-gray-800/80 hover:shadow-green-900/30'
                    : 'border-gray-700/50 shadow-lg hover:shadow-xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 hover:border-gray-600/50'
                } hover:transform hover:scale-105 hover:-translate-y-2`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    🔥 Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">{plan.name}</h3>
                  <p className="text-slate-400 text-base leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex-grow space-y-5 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 text-slate-300">
                      <div className="mt-1 min-w-[1.5rem] h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-green-400" />
                      </div>
                      <span className="text-base leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className={`w-full py-4 rounded-2xl font-bold transition-all transform hover:scale-105 text-lg ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-400 hover:to-blue-400 shadow-lg shadow-green-900/30 hover:shadow-xl'
                      : 'bg-gray-800/80 text-slate-200 hover:bg-gray-700/80 border border-gray-600/50 backdrop-blur-sm'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Info */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <p className="text-slate-400 text-lg">
              All plans include 24/7 support, unlimited integrations, and enterprise-grade security.
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Need a custom solution? <span className="text-blue-400 cursor-pointer hover:underline" onClick={() => navigate('/custom-dev')}>Contact our sales team</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Pricing;