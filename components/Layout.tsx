import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Mail, Twitter, Linkedin, Github } from 'lucide-react';
import { Logo } from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse move for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Custom Development', path: '/custom-development' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleDemoClick = () => {
    navigate('/contact');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-slate-200 relative overflow-hidden">
      {/* Global Parallax Background Layers */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(30, 64, 175, 0.1) 0%, transparent 50%)',
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
      <div 
        className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none z-0"
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div 
        className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none z-0"
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
          transition: 'transform 0.4s ease-out'
        }}
      />

      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || isMenuOpen ? 'bg-gray-950/90 backdrop-blur-md shadow-sm border-b border-gray-800' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 transform group-hover:rotate-12 transition-transform duration-300">
                <Logo />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                WorkHolo
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={handleDemoClick}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-900/20 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Request a Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-20 left-0 w-full bg-gray-950 border-b border-gray-800 shadow-xl transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium py-2 border-b border-gray-800 ${
                  location.pathname === link.path
                    ? 'text-blue-400'
                    : 'text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleDemoClick}
              className="mt-4 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 border-t border-gray-800 text-white pt-16 pb-8 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8">
                  <Logo />
                </div>
                <span className="text-xl font-bold">WorkHolo</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Revolutionizing team collaboration for the modern enterprise. 
                Secure, fast, and unified.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Github size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><Link to="/features" className="text-slate-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/custom-development" className="text-slate-400 hover:text-white transition-colors">Custom Dev</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-400">
                  <Mail size={16} />
                  <span>contact@workholo.com</span>
                </li>
                <li>
                  <button 
                    onClick={handleDemoClick}
                    className="mt-2 px-6 py-2 border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors text-sm"
                  >
                    Request a Demo
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} WorkHolo Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;