import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import {
  ArrowRight,
  MessageSquare,
  Shield,
  Zap,
  Users,
  Layout,
  Smartphone,
  Code,
  Globe,
  Briefcase,
  PenTool,
  Cpu,
  GitBranch,
  Database,
  Lock,
  CheckCircle2,
  Server,
  Activity,
  HardDrive,
  Award
} from 'lucide-react';
import { Testimonial } from '../types';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleDemoRequest = () => {
    navigate('/contact');
  };

  const clientCompanies = [
    "NovaStack",
    "BluePixel Labs",
    "CloudShift Technologies",
    "ByteBridge Studio",
    "ZenCore Digital"
  ];

  const testimonials: Testimonial[] = [
    { quote: "WorkHolo transformed the way our team communicates.", company: "NovaStack" },
    { quote: "The perfect tool for fast-growing teams.", company: "BluePixel Labs" },
    { quote: "Reliable, clean, and powerful communication.", company: "CloudShift Technologies" },
    { quote: "Our productivity skyrocketed after switching to WorkHolo.", company: "ByteBridge Studio" },
    { quote: "A must-have platform for remote collaboration.", company: "ZenCore Digital" },
  ];

  return (
    <div className="overflow-hidden black-gradient-bg text-slate-200">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 black-radial-bg overflow-hidden pattern-overlay">
        {/* Enhanced gradient layers */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-transparent to-indigo-900/10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-900/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 floating-particles"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center mb-8 animate-fade-in-up">
                <div className="relative">
                  <Logo className="w-40 h-40 drop-shadow-[0_0_16px_rgba(59,130,246,0.35)] animate-glow" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse"></div>
                </div>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
                WorkHolo — The Future of <br className="hidden md:block"/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Team Communication.</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed text-justify">
                A unified workspace where teams connect, collaborate, and communicate effortlessly.
                Designed for modern enterprises that demand speed and security.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleDemoRequest}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all transform hover:-translate-y-1 hover-glow"
                >
                  Request a Demo
                </button>
                <Link
                  to="/features"
                  className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-slate-700 font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 hover-glow"
                >
                  Explore Features
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Dashboard Mockup Placeholder */}
          <ScrollReveal delay={200}>
            <div className="mt-20 relative mx-auto max-w-6xl">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 aspect-[16/9] flex items-center justify-center group transform hover:rotate-x-2 transition-transform duration-500 perspective-1000">
                 <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900 opacity-50"></div>
                 {/* Abstract UI Representation */}
                 <div className="w-full h-full p-4 md:p-8 flex gap-4 relative z-10">
                    {/* Sidebar */}
                    <div className="hidden md:block w-64 bg-gray-950 rounded-xl h-full border border-gray-800 p-4 space-y-4">
                       <div className="h-8 w-32 bg-gray-800 rounded-lg animate-pulse"></div>
                       <div className="space-y-2 pt-4">
                          <div className="h-4 w-full bg-gray-800 rounded animate-pulse"></div>
                          <div className="h-4 w-3/4 bg-gray-800 rounded animate-pulse"></div>
                          <div className="h-4 w-5/6 bg-gray-800 rounded animate-pulse"></div>
                       </div>
                    </div>
                    {/* Main Content */}
                    <div className="flex-1 bg-gray-950 rounded-xl h-full border border-gray-800 p-6 flex flex-col shadow-inner">
                       <div className="flex justify-between mb-8">
                         <div className="h-10 w-48 bg-gray-800 rounded-lg animate-pulse"></div>
                         <div className="flex gap-2">
                           <div className="h-10 w-10 bg-gray-800 rounded-full"></div>
                           <div className="h-10 w-10 bg-gray-800 rounded-full"></div>
                         </div>
                       </div>
                       <div className="space-y-4 flex-1">
                          <div className="flex gap-4">
                             <div className="h-10 w-10 bg-indigo-900/50 rounded-full flex-shrink-0"></div>
                             <div className="space-y-2 flex-1">
                                <div className="h-4 w-32 bg-gray-800 rounded"></div>
                                <div className="h-16 w-full bg-gray-900 rounded border border-gray-800"></div>
                             </div>
                          </div>
                          <div className="flex gap-4">
                             <div className="h-10 w-10 bg-blue-900/50 rounded-full flex-shrink-0"></div>
                             <div className="space-y-2 flex-1">
                                <div className="h-4 w-32 bg-gray-800 rounded"></div>
                                <div className="h-12 w-3/4 bg-gray-900 rounded border border-gray-800"></div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <span className="px-6 py-3 bg-gray-800 border border-gray-700 text-white rounded-full shadow-lg font-semibold">Interactive Dashboard</span>
                 </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 black-gradient-bg border-y border-gray-800/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/20 to-transparent"></div>
        <ScrollReveal>
          <div className="container mx-auto px-4">
            <p className="text-center text-slate-500 font-medium mb-8">TRUSTED BY INNOVATIVE TEAMS</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {clientCompanies.map((company) => (
                 <div key={company} className="text-xl md:text-2xl font-bold text-slate-500 font-sans flex items-center gap-2 hover:text-white transition-colors">
                    <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
                    {company}
                 </div>
               ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900/50 to-gray-950 border-b border-gray-800/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,64,175,0.05)_0%,_transparent_70%)]"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <ScrollReveal delay={0} width="auto" className="w-full">
               <div className="p-4 hover-scale transition-transform">
                  <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-4xl font-extrabold text-blue-500 mb-2">10k+</div>
                  <div className="text-slate-400 font-medium">Enterprise Teams</div>
               </div>
             </ScrollReveal>
             <ScrollReveal delay={100} width="auto" className="w-full">
               <div className="p-4 hover-scale transition-transform">
                  <Activity className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                  <div className="text-4xl font-extrabold text-indigo-500 mb-2">99.99%</div>
                  <div className="text-slate-400 font-medium">Uptime Guarantee</div>
               </div>
             </ScrollReveal>
             <ScrollReveal delay={200} width="auto" className="w-full">
               <div className="p-4 hover-scale transition-transform">
                  <HardDrive className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-4xl font-extrabold text-purple-500 mb-2">500TB</div>
                  <div className="text-slate-400 font-medium">Secure Storage</div>
               </div>
             </ScrollReveal>
             <ScrollReveal delay={300} width="auto" className="w-full">
               <div className="p-4 hover-scale transition-transform">
                  <Award className="w-8 h-8 text-slate-200 mx-auto mb-2" />
                  <div className="text-4xl font-extrabold text-slate-200 mb-2">ISO</div>
                  <div className="text-slate-400 font-medium">27001 Certified</div>
               </div>
             </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features Preview */}
      <section className="py-24 black-gradient-bg relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent"></div>
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Teams Choose WorkHolo</h2>
              <p className="text-lg text-slate-400 leading-relaxed text-justify">Build a culture of transparency and speed with tools designed for the future of work.</p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300 group h-full hover-glow">
                <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Real-time Messaging</h3>
                <p className="text-slate-400 leading-relaxed">
                  Instant communication with threaded conversations, ensuring context is never lost.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-900/10 transition-all duration-300 group h-full hover-glow">
                <div className="w-14 h-14 bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-slate-400 leading-relaxed">
                  Bank-grade encryption, SSO integration, and comprehensive audit logs for total control.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-900/10 transition-all duration-300 group h-full hover-glow">
                <div className="w-14 h-14 bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Seamless Integrations</h3>
                <p className="text-slate-400 leading-relaxed">
                  Connect with the tools you already use. API-first design allows for custom workflows.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Use Cases / Workflows */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-950 relative">
          {/* Enhanced background pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/5 via-transparent to-indigo-900/5"></div>
         
        <div className="container mx-auto px-4 relative z-10">
           <ScrollReveal>
             <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Every Department</h2>
                <p className="text-lg text-slate-400 leading-relaxed text-justify">WorkHolo adapts to the unique workflows of your entire organization.</p>
             </div>
           </ScrollReveal>
           
           <div className="grid md:grid-cols-3 gap-8">
              {/* Engineering */}
              <ScrollReveal delay={0}>
                <div className="bg-gray-950 p-8 rounded-2xl shadow-sm border border-gray-800 hover:border-blue-500/50 transition-colors group h-full hover-glow">
                   <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-500 mb-6">
                      <Cpu size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4">Engineering</h3>
                   <ul className="space-y-3 text-slate-400">
                      <li className="flex items-start gap-2">
                         <GitBranch size={16} className="mt-1 text-blue-500"/>
                         <span>Automated PR notifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                         <Zap size={16} className="mt-1 text-blue-500"/>
                         <span>Incident response channels</span>
                      </li>
                      <li className="flex items-start gap-2">
                         <Code size={16} className="mt-1 text-blue-500"/>
                         <span>Code snippet syntax highlighting</span>
                      </li>
                   </ul>
                </div>
              </ScrollReveal>

              {/* Sales */}
              <ScrollReveal delay={150}>
                <div className="bg-gray-950 p-8 rounded-2xl shadow-sm border border-gray-800 hover:border-indigo-500/50 transition-colors group h-full hover-glow">
                   <div className="w-12 h-12 bg-indigo-900/20 rounded-lg flex items-center justify-center text-indigo-500 mb-6">
                      <Briefcase size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4">Sales & Marketing</h3>
                   <ul className="space-y-3 text-slate-400">
                      <li className="flex items-start gap-2">
                         <Globe size={16} className="mt-1 text-indigo-500"/>
                         <span>Real-time lead alerts</span>
                      </li>
                      <li className="flex items-start gap-2">
                         <PenTool size={16} className="mt-1 text-indigo-500"/>
                         <span>Campaign asset collaboration</span>
                      </li>
                      <li className="flex items-start gap-2">
                         <Users size={16} className="mt-1 text-indigo-500"/>
                         <span>Customer feedback loops</span>
                      </li>
                   </ul>
                </div>
              </ScrollReveal>

              {/* Leadership */}
              <ScrollReveal delay={300}>
                <div className="bg-gray-950 p-8 rounded-2xl shadow-sm border border-gray-800 hover:border-purple-500/50 transition-colors group h-full hover-glow">
                   <div className="w-12 h-12 bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-500 mb-6">
                      <Server size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4">Leadership</h3>
                   <ul className="space-y-3 text-slate-400">
                      <li className="flex items-start gap-2">
                         <Lock size={16} className="mt-1 text-purple-500"/>
                         <span>Private executive rooms</span>
                      </li>
                      <li className="flex items-start gap-2">
                         <Layout size={16} className="mt-1 text-purple-500"/>
                         <span>Company-wide announcements</span>
                      </li>
                      <li className="flex items-start gap-2">
                         <Database size={16} className="mt-1 text-purple-500"/>
                         <span>Audit logs & analytics</span>
                      </li>
                   </ul>
                </div>
              </ScrollReveal>
           </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 black-gradient-bg overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-l from-gray-950/50 to-transparent"></div>
         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 animate-slide-in-left">
               <ScrollReveal>
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 text-blue-400 text-xs font-bold mb-6 uppercase tracking-wider border border-blue-900/30">
                    Integrations
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Works with your favorite tools
                 </h2>
                 <p className="text-lg text-slate-400 mb-8 leading-relaxed text-justify">
                    Connect WorkHolo with the apps you use every day. Centralize your notifications, files, and updates in one secure location.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 transition-colors hover-glow">
                       <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">J</div>
                       <span className="font-semibold text-slate-300">Jira</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 transition-colors hover-glow">
                       <div className="w-10 h-10 bg-black border border-gray-700 rounded-lg flex items-center justify-center text-white font-bold">G</div>
                       <span className="font-semibold text-slate-300">GitHub</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 transition-colors hover-glow">
                       <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold">D</div>
                       <span className="font-semibold text-slate-300">Drive</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-800 bg-gray-900 hover:bg-gray-800 transition-colors hover-glow">
                       <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white font-bold">Z</div>
                       <span className="font-semibold text-slate-300">Zoom</span>
                    </div>
                 </div>
                 <div className="mt-8">
                    <Link to="/features" className="text-blue-400 font-semibold hover:text-blue-300 inline-flex items-center gap-2">
                       View all integrations <ArrowRight size={16} />
                    </Link>
                 </div>
               </ScrollReveal>
            </div>
            <div className="md:w-1/2 relative animate-slide-in-right">
               <ScrollReveal delay={200}>
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-20 blur-3xl rounded-full"></div>
                 <div className="relative bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8 transform rotate-y-6 hover:rotate-y-0 transition-transform duration-500 perspective-1000">
                    <div className="space-y-6">
                       {/* Fake Integration Notifications */}
                       <div className="flex gap-4 items-start pb-6 border-b border-gray-800">
                          <div className="w-10 h-10 bg-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center text-white">J</div>
                          <div>
                             <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-white">Jira</span>
                                <span className="text-xs text-slate-500">APP • 2m ago</span>
                             </div>
                             <p className="text-slate-400 text-sm">Issue <span className="text-blue-400 font-mono">WH-2401</span> has been updated to <strong>In Progress</strong> by <span className="font-medium text-slate-200">Sarah Chen</span>.</p>
                          </div>
                       </div>
                       <div className="flex gap-4 items-start pb-6 border-b border-gray-800">
                          <div className="w-10 h-10 bg-black border border-gray-700 rounded-lg flex-shrink-0 flex items-center justify-center text-white">G</div>
                          <div>
                             <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-white">GitHub</span>
                                <span className="text-xs text-slate-500">APP • 15m ago</span>
                             </div>
                             <p className="text-slate-400 text-sm">Pull Request <span className="text-blue-400 font-mono">#882</span> merged into <span className="font-mono bg-gray-800 px-1 rounded text-slate-300">main</span></p>
                             <div className="mt-2 p-2 bg-gray-950 rounded border border-gray-800 text-xs font-mono text-slate-500">
                                feat: update authentication provider
                             </div>
                          </div>
                       </div>
                       <div className="flex gap-4 items-start">
                          <div className="w-10 h-10 bg-red-500 rounded-lg flex-shrink-0 flex items-center justify-center text-white">S</div>
                          <div>
                             <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-white">System</span>
                                <span className="text-xs text-slate-500">ALERT • 1h ago</span>
                             </div>
                             <p className="text-slate-400 text-sm">Daily backup completed successfully. <span className="text-green-400 font-medium">100% Secure</span>.</p>
                          </div>
                       </div>
                    </div>
                 </div>
               </ScrollReveal>
            </div>
         </div>
      </section>

      {/* Security Banner */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-950 border-t border-gray-800/50 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 to-transparent"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="lg:w-1/2 animate-slide-in-left">
                  <ScrollReveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise-Grade Security</h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed text-justify">
                       We take data protection seriously. WorkHolo is built with a security-first architecture to keep your proprietary information safe.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <div className="flex items-center gap-3">
                          <CheckCircle2 className="text-green-500" />
                          <span className="text-slate-300">SOC2 Type II Certified</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <CheckCircle2 className="text-green-500" />
                          <span className="text-slate-300">End-to-End Encryption</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <CheckCircle2 className="text-green-500" />
                          <span className="text-slate-300">GDPR & HIPAA Compliant</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <CheckCircle2 className="text-green-500" />
                          <span className="text-slate-300">SSO / SAML Support</span>
                       </div>
                    </div>
                  </ScrollReveal>
               </div>
               <div className="lg:w-5/12 animate-slide-in-right">
                  <ScrollReveal delay={200}>
                    <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800 shadow-2xl shadow-blue-900/10 hover:transform hover:scale-105 transition-transform duration-500 hover-glow">
                       <div className="flex items-center justify-between mb-8">
                          <span className="text-slate-500 font-mono text-sm">SECURITY STATUS</span>
                          <span className="flex items-center gap-2 text-green-400 text-sm font-bold">
                             <span className="relative flex h-3 w-3">
                               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                             </span>
                             OPERATIONAL
                          </span>
                       </div>
                       <div className="space-y-6">
                          <div>
                             <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-300">Encryption Level</span>
                                <span className="text-blue-400">AES-256</span>
                             </div>
                             <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-full"></div>
                             </div>
                          </div>
                          <div>
                             <div className="flex justify-between text-sm mb-2">
                                <span className="text-slate-300">Threat Detection</span>
                                <span className="text-blue-400">Active</span>
                             </div>
                             <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-full animate-pulse"></div>
                             </div>
                          </div>
                          <div className="pt-4 border-t border-gray-800">
                             <div className="flex items-center gap-4 text-sm text-slate-400">
                                <Shield size={20} />
                                <span>24/7 Security Monitoring Center</span>
                             </div>
                          </div>
                       </div>
                    </div>
                  </ScrollReveal>
               </div>
            </div>
         </div>
      </section>

      {/* Custom Development Highlight */}
      <section className="py-20 black-gradient-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/15 to-transparent rounded-l-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-indigo-900/10 to-transparent rounded-r-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-slide-in-left">
              <ScrollReveal>
                <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-semibold mb-6 border border-blue-800/50">
                  For Enterprise Needs
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
                  Custom App Development <br/> for Your Business
                </h2>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed text-justify">
                  Need more than just a platform? Our engineering team builds custom mobile and web applications tailored to your specific operational requirements.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-slate-300">
                    <Smartphone className="text-blue-500" size={20} />
                    <span>Custom Mobile App Development</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Layout className="text-blue-500" size={20} />
                    <span>Private Communication Platforms</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <Code className="text-blue-500" size={20} />
                    <span>White-label Solutions</span>
                  </li>
                </ul>
                <Link 
                  to="/custom-development"
                  className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors border-b-2 border-blue-900 hover:border-blue-400 pb-1"
                >
                  Learn more about Custom Dev <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            </div>
            <div className="md:w-1/2 animate-slide-in-right">
               <ScrollReveal delay={200}>
                 <div className="relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-8 shadow-2xl hover-glow">
                    {/* Abstract code representation */}
                    <div className="space-y-3 font-mono text-sm">
                      <div className="flex gap-2">
                         <span className="text-purple-400">const</span>
                         <span className="text-yellow-300">WorkHoloCustom</span>
                         <span className="text-white">=</span>
                         <span className="text-blue-400">async</span>
                         <span className="text-white">()</span>
                         <span className="text-white">=&gt;</span>
                         <span className="text-white">{`{`}</span>
                      </div>
                      <div className="pl-4 text-slate-500">// Initialize secure environment</div>
                      <div className="pl-4 flex gap-2">
                         <span className="text-purple-400">await</span>
                         <span className="text-blue-300">security</span>
                         <span className="text-white">.</span>
                         <span className="text-yellow-300">deploy</span>
                         <span className="text-white">({`{`}</span>
                         <span className="text-orange-300">encryption:</span>
                         <span className="text-green-300">'AES-256'</span>
                         <span className="text-white">{`}`});</span>
                      </div>
                      <div className="pl-4 text-slate-500">// Launch custom modules</div>
                      <div className="pl-4 flex gap-2">
                         <span className="text-purple-400">return</span>
                         <span className="text-blue-300">system</span>
                         <span className="text-white">.</span>
                         <span className="text-yellow-300">optimize</span>
                         <span className="text-white">();</span>
                      </div>
                      <div className="text-white">{`}`}</div>
                    </div>
                    <div className="mt-8 flex justify-center">
                      <button className="px-6 py-2 bg-blue-600 rounded-lg text-white text-sm font-semibold hover:bg-blue-500 transition-colors w-full">
                         Deploy Custom Solution
                      </button>
                    </div>
                 </div>
               </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 black-gradient-bg border-t border-gray-800/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/20"></div>
         <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                What Innovators Say
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-800 hover:border-gray-700 transition-colors flex flex-col justify-between h-full hover-glow">
                    <div className="mb-6 text-blue-500">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01691 21L5.01691 18C5.01691 16.8954 5.91234 16 7.01691 16H10.0169C10.5692 16 11.0169 15.5523 11.0169 15V9C11.0169 8.44772 10.5692 8 10.0169 8H6.01691C5.46462 8 5.01691 8.44772 5.01691 9V11C5.01691 11.5523 4.56919 12 4.01691 12H3.01691V5H13.0169V15C13.0169 18.3137 10.3306 21 7.01691 21H5.01691Z" />
                      </svg>
                    </div>
                    <p className="text-lg text-slate-300 italic mb-6">"{t.quote}"</p>
                    <div className="border-t border-gray-800 pt-4">
                      <p className="font-bold text-white">— {t.company}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
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
               <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to transform your workflow?</h2>
               <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed text-justify">
                 Join the forward-thinking companies building the future with WorkHolo.
               </p>
               <button
                  onClick={handleDemoRequest}
                  className="px-10 py-4 bg-white text-blue-900 font-bold rounded-full shadow-lg hover:bg-slate-100 transition-all transform hover:-translate-y-1 relative z-10 hover-glow"
                >
                  Request a Demo
                </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;