import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="bg-gray-950 min-h-screen py-20 text-slate-200">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl shadow-xl border border-gray-800 overflow-hidden flex flex-col md:flex-row">
            
            {/* Contact Info Sidebar */}
            <div className="bg-gray-950 border-r border-gray-800 p-12 md:w-1/3 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Get in touch</h2>
                <p className="text-slate-400 mb-12">
                  Ready to transform your team's communication? Fill out the form and our sales team will be in touch within 24 hours to schedule your demo.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-300">
                    <Mail className="text-blue-500" />
                    <span>contact@workholo.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <Phone className="text-blue-500" />
                    <span>+1 (888) 555-0123</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <MapPin className="text-blue-500" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 md:mt-0">
                 <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              </div>
            </div>

            {/* Form Area */}
            <div className="p-12 md:w-2/3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-900/30 text-green-400 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                  <p className="text-slate-400">
                    Thank you for your interest in WorkHolo. A representative will contact you shortly to schedule your personalized demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-300">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-lg bg-gray-950 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-900/50 outline-none transition-all placeholder-slate-600"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-300">Work Email</label>
                      <input 
                        required 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg bg-gray-950 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-900/50 outline-none transition-all placeholder-slate-600"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-slate-300">Company Name</label>
                      <input 
                        required 
                        type="text" 
                        id="company" 
                        className="w-full px-4 py-3 rounded-lg bg-gray-950 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-900/50 outline-none transition-all placeholder-slate-600"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-300">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-lg bg-gray-950 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-900/50 outline-none transition-all placeholder-slate-600"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-300">Message / Requirements</label>
                    <textarea 
                      required 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-3 rounded-lg bg-gray-950 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-900/50 outline-none transition-all resize-none placeholder-slate-600"
                      placeholder="Tell us about your team size and needs..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-lg shadow-lg shadow-blue-900/30 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                  >
                    Request a Demo
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contact;