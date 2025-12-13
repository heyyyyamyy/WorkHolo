import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Target,
  Eye,
  Users,
  TrendingUp,
  Shield,
  Lightbulb,
  Rocket,
  Award,
  Heart,
  CheckCircle2,
  ArrowRight,
  Building2,
  Calendar,
  Star,
  Globe,
  Code
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Users', color: 'text-blue-500' },
    { icon: Building2, value: '500+', label: 'Companies', color: 'text-indigo-500' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime', color: 'text-purple-500' },
  ];

  const values = [
    { icon: Lightbulb, title: 'Innovation', desc: 'Constantly pushing boundaries to deliver cutting-edge solutions.' },
    { icon: Heart, title: 'Collaboration', desc: 'Fostering teamwork and open communication in everything we do.' },
    { icon: Shield, title: 'Security', desc: 'Ensuring the highest standards of data protection and privacy.' },
    { icon: Star, title: 'User-Centric', desc: 'Designing with our users\' needs at the forefront.' },
  ];


  return (
    <div className="overflow-hidden black-gradient-bg text-slate-200">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 black-radial-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-indigo-900/10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-900/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 floating-particles"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="fade">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl animate-pulse"></div>
                </div>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
                About <br className="hidden md:block"/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">WorkHolo</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Born from a belief that communication is the operating system of business.
                When teams connect effortlessly, innovation follows.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Parent Company Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-gray-950 border-b border-gray-800/50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-900/20 text-indigo-400 text-sm font-bold mb-6 border border-indigo-900/30">
                <Globe size={16} />
                Our Foundation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powered by Avanya Infotech</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                WorkHolo is proudly developed by <strong className="text-white">Avanya Infotech</strong>,
                a forward-thinking technology company committed to delivering cutting-edge solutions that empower businesses and enhance productivity.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 black-gradient-bg relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300 group h-full hover-glow">
                <div className="w-16 h-16 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-slate-400 leading-relaxed">
                  To eliminate the friction of distance and disjointed tools, empowering teams to achieve their best work through seamless, secure, and intuitive technology.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} direction="right">
              <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-900/10 transition-all duration-300 group h-full hover-glow">
                <div className="w-16 h-16 bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  <Eye size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-slate-400 leading-relaxed">
                  A world where the physical location of a team member is irrelevant to their contribution, creativity, and sense of belonging.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-gray-950 border-y border-gray-800/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,64,175,0.05)_0%,_transparent_70%)]"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100} direction={index % 2 === 0 ? 'up' : 'down'}>
                <div className="p-6 hover-scale transition-transform">
                  <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                  <div className={`text-5xl font-extrabold mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist & Philosophy */}
      <section className="py-24 black-gradient-bg relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why We Exist</h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                  Traditional tools were built for an era of emails and rigid hierarchies. WorkHolo is designed for the fluid, fast-paced, and distributed nature of modern work.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  We solve the problem of information silos and communication fatigue by providing a unified workspace that adapts to how teams actually work.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Philosophy</h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                  We believe in "Invisible Technology". The best tools get out of the way, allowing your team to focus on what matters most.
                </p>
                <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                  <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-300">WorkHolo is designed to be powerful yet unobtrusive, ensuring your team focuses on the work, not the tool.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-950 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Approach</h2>
              <p className="text-lg text-slate-400 leading-relaxed">How we build the future of team collaboration, one innovation at a time.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0} direction="left">
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group h-full hover-glow">
                <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <Code size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Modern Technology Stack</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Built with cutting-edge technologies including React, Node.js, and cloud-native architecture for scalability and performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-900/20 text-blue-300 rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-blue-900/20 text-blue-300 rounded text-xs">TypeScript</span>
                  <span className="px-2 py-1 bg-blue-900/20 text-blue-300 rounded text-xs">Node.js</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} direction="up">
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 group h-full hover-glow">
                <div className="w-14 h-14 bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Security First</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Every feature is designed with security in mind. End-to-end encryption, regular audits, and compliance with industry standards.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-indigo-900/20 text-indigo-300 rounded text-xs">AES-256</span>
                  <span className="px-2 py-1 bg-indigo-900/20 text-indigo-300 rounded text-xs">SOC2</span>
                  <span className="px-2 py-1 bg-indigo-900/20 text-indigo-300 rounded text-xs">GDPR</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} direction="right">
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group h-full hover-glow">
                <div className="w-14 h-14 bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">User-Centric Design</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Every decision starts with our users. We build intuitive interfaces that adapt to how teams actually work.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-900/20 text-purple-300 rounded text-xs">UX Research</span>
                  <span className="px-2 py-1 bg-purple-900/20 text-purple-300 rounded text-xs">Agile</span>
                  <span className="px-2 py-1 bg-purple-900/20 text-purple-300 rounded text-xs">Feedback</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 black-gradient-bg relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-lg text-slate-400 leading-relaxed">The principles that guide everything we do.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const directions = ['up', 'down', 'left', 'right'] as const;
              return (
                <ScrollReveal key={index} delay={index * 100} direction={directions[index % 4]}>
                  <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 group h-full hover-glow">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                      <value.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900/50 to-gray-950 border-t border-gray-800/50 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Leadership</h2>
              <p className="text-lg text-slate-400 leading-relaxed">The visionary team behind WorkHolo and Avanya Infotech.</p>
            </div>
          </ScrollReveal>

          <div className="max-w-md mx-auto">
            <ScrollReveal delay={200}>
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover-glow">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">VB</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Vivek Bisht</h3>
                  <p className="text-blue-400 font-semibold mb-4">CEO & Founder</p>
                </div>
                <p className="text-slate-400 text-center leading-relaxed">
                  A seasoned entrepreneur and technology innovator with a passion for transforming how teams collaborate in the digital age.
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <Award className="text-yellow-500" size={20} />
                  <Rocket className="text-blue-500" size={20} />
                  <Shield className="text-green-500" size={20} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 black-gradient-bg relative pattern-overlay">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent"></div>
        <div className="absolute inset-0 floating-particles opacity-50"></div>
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/20 border border-blue-800">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to join the revolution?</h2>
              <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed">
                Experience the future of team communication with WorkHolo.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-4 bg-white text-blue-900 font-bold rounded-full shadow-lg hover:bg-slate-100 transition-all transform hover:-translate-y-1 relative z-10 hover-glow inline-flex items-center gap-2"
              >
                Request a Demo
                <ArrowRight size={20} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;