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
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 min-h-screen py-20 text-slate-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden flex flex-col md:flex-row backdrop-blur-sm">

            {/* Contact Info Sidebar */}
            <div className="bg-gradient-to-br from-gray-950 to-gray-900 border-r border-gray-700/50 p-12 md:w-2/5 flex flex-col justify-between relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-l-3xl"></div>
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                  📞 Contact Us
                </div>
                <h2 className="text-4xl font-bold mb-6 text-white">Let's Start a Conversation</h2>
                <p className="text-slate-400 mb-12 text-lg leading-relaxed">
                  Ready to transform your team's communication? Fill out the form and our sales team will be in touch within 24 hours to schedule your personalized demo.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-4 text-slate-300 group">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Email</div>
                      <div className="text-white font-medium">contact@workholo.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300 group">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <Phone className="text-green-400" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Phone</div>
                      <div className="text-white font-medium">+91 98765 43210</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300 group">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <MapPin className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Location</div>
                      <div className="text-white font-medium">New Delhi, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 md:mt-0 relative z-10">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full"></div>
              </div>
            </div>

            {/* Form Area */}
            <div className="p-12 md:w-3/5 relative">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in min-h-[500px]">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-8 shadow-lg animate-pulse">
                    <CheckCircle size={48} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Request Received!</h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                    Thank you for your interest in WorkHolo. A representative will contact you shortly to schedule your personalized demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-300">Full Name *</label>
                      <input
                        required
                        type="text"
                        id="name"
                        className="w-full px-4 py-4 rounded-xl bg-gray-950/50 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-900/50 outline-none transition-all placeholder-slate-600 backdrop-blur-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-300">Work Email *</label>
                      <input
                        required
                        type="email"
                        id="email"
                        className="w-full px-4 py-4 rounded-xl bg-gray-950/50 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-900/50 outline-none transition-all placeholder-slate-600 backdrop-blur-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="company" className="text-sm font-semibold text-slate-300">Company Name *</label>
                      <input
                        required
                        type="text"
                        id="company"
                        className="w-full px-4 py-4 rounded-xl bg-gray-950/50 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-900/50 outline-none transition-all placeholder-slate-600 backdrop-blur-sm"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-300">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-4 rounded-xl bg-gray-950/50 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-900/50 outline-none transition-all placeholder-slate-600 backdrop-blur-sm"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-300">Message / Requirements *</label>
                    <textarea
                      required
                      id="message"
                      rows={5}
                      className="w-full px-4 py-4 rounded-xl bg-gray-950/50 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-900/50 outline-none transition-all resize-none placeholder-slate-600 backdrop-blur-sm"
                      placeholder="Tell us about your team size, current challenges, and what you're looking to achieve..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-xl shadow-blue-900/30 hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 text-lg"
                  >
                    Send Message
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