import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Eye } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-950 min-h-screen text-slate-200">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <ScrollReveal>
          <h1 className="text-5xl font-extrabold text-white mb-8 text-center">About WorkHolo</h1>
        </ScrollReveal>
        
        <div className="prose prose-lg prose-invert mx-auto text-slate-400 mb-16">
          <ScrollReveal delay={100}>
            <p className="text-xl leading-relaxed text-center mb-12">
              WorkHolo was born from a simple belief: <strong className="text-white">Communication is the operating system of business.</strong> 
              When teams connect effortlessly, innovation follows.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={150}>
            <h2 className="text-3xl font-bold text-white mb-6">Our Parent Company</h2>
            <p className="mb-6">
              WorkHolo is proudly owned and developed by <strong className="text-white">Avanya Infotech</strong>, a forward-thinking technology company committed to delivering cutting-edge solutions that empower businesses and enhance productivity. Founded with a vision to bridge the gap between technology and human collaboration, Avanya Infotech has been at the forefront of innovation, creating tools that make work more efficient and enjoyable.
            </p>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12 my-16">
            <ScrollReveal delay={200}>
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 h-full">
                 <div className="flex items-center gap-3 mb-4">
                    <Target className="text-blue-500" />
                    <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                 </div>
                 <p>
                   To eliminate the friction of distance and disjointed tools, empowering teams to achieve their best work through seamless, secure, and intuitive technology.
                 </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 h-full">
                 <div className="flex items-center gap-3 mb-4">
                    <Eye className="text-indigo-500" />
                    <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                 </div>
                 <p>
                   A world where the physical location of a team member is irrelevant to their contribution, creativity, and sense of belonging.
                 </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <h2 className="text-3xl font-bold text-white mb-6">Why We Exist</h2>
            <p className="mb-6">
              Traditional tools were built for an era of emails and rigid hierarchies. WorkHolo is designed for the fluid, fast-paced, and distributed nature of modern work. We solve the problem of information silos and communication fatigue by providing a unified workspace.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <h2 className="text-3xl font-bold text-white mb-6">Our Philosophy</h2>
            <p className="mb-6">
              We believe in "Invisible Technology". The best tools get out of the way. WorkHolo is designed to be powerful yet unobtrusive, ensuring your team focuses on the work, not the tool.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={550}>
            <h2 className="text-3xl font-bold text-white mb-6">Our Journey</h2>
            <p className="mb-6">
              From humble beginnings, WorkHolo emerged as a response to the growing need for better remote collaboration tools. Our team at Avanya Infotech recognized the challenges faced by distributed teams and set out to create a platform that not only connects people but also enhances their productivity and creativity.
            </p>
            <p className="mb-6">
              Through continuous innovation and user feedback, we've evolved WorkHolo into a comprehensive workspace solution that integrates seamlessly with existing workflows, providing AI-powered insights, real-time collaboration, and advanced security features to ensure your team's success in an ever-changing digital landscape.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={575}>
            <h2 className="text-3xl font-bold text-white mb-6">Our Core Values</h2>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong className="text-white">Innovation:</strong> Constantly pushing boundaries to deliver cutting-edge solutions.</li>
              <li><strong className="text-white">Collaboration:</strong> Fostering teamwork and open communication in everything we do.</li>
              <li><strong className="text-white">Security:</strong> Ensuring the highest standards of data protection and privacy.</li>
              <li><strong className="text-white">User-Centric:</strong> Designing with our users' needs at the forefront.</li>
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={600}>
          <div className="text-center pt-8 border-t border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Join the revolution</h3>
            <button 
              onClick={() => navigate('/contact')}
              className="px-10 py-4 bg-white text-gray-950 font-bold rounded-full shadow-lg hover:bg-slate-200 transition-all"
            >
              Request a Demo
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;