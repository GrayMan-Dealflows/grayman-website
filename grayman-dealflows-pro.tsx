import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, BarChart, Users, Briefcase, Building, LineChart, Landmark } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
    <Icon className="w-12 h-12 text-orange-500 mb-4" />
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stats, setStats] = useState({ deals: 0, investors: 0, funds: 0 });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => ({
        deals: prev.deals < 150 ? prev.deals + 1 : prev.deals,
        investors: prev.investors < 200 ? prev.investors + 1 : prev.investors,
        funds: prev.funds < 100 ? prev.funds + 1 : prev.funds
      }));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you for your interest. Our team will contact you shortly.');
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full bg-black/90 backdrop-blur-sm px-5 py-4 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/api/placeholder/40/40" alt="Logo" className="h-10" />
            <span className="text-xl font-bold">GrayMan Dealflows</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#deals" className="text-gray-300 hover:text-white transition-colors">Deals</a>
            <a href="#investment" className="text-gray-300 hover:text-white transition-colors">Investment</a>
            <a href="#contact" className="bg-orange-600 px-4 py-2 rounded hover:bg-orange-700 transition-colors">Connect With Us</a>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Helping Builders Become Founders,<br />
            Helping Founders Stay Founders
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Through strategic advisory, curated dealflows, private investments, and tailored services, 
            we empower visionaries to scale their businesses and sustain their ventures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#services" className="bg-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Explore Our Services
            </a>
            <a href="#contact" className="bg-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">${stats.deals}M+</div>
              <div className="text-gray-400">In Facilitated Deals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">{stats.investors}+</div>
              <div className="text-gray-400">Strategic Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">{stats.funds}</div>
              <div className="text-gray-400">Venture Funds Connected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={BarChart}
              title="Marketing & Brand Development"
              description="Strategic campaigns for visibility and growth, building engaging brand narratives that resonate with your audience."
            />
            <ServiceCard
              icon={Briefcase}
              title="Advisory Services"
              description="Expert guidance on business scaling, operational efficiency, and financial structuring tailored to your growth stage."
            />
            <ServiceCard
              icon={LineChart}
              title="OTC Deal Sourcing"
              description="Access to exclusive off-market opportunities and efficient facilitation of private transactions."
            />
            <ServiceCard
              icon={Building}
              title="Dealflow Management"
              description="Curated investment opportunities matched with strategic partners, connecting promising startups with ideal investors."
            />
            <ServiceCard
              icon={Users}
              title="Investor Relations & BD"
              description="Building and maintaining strong stakeholder relationships while fostering strategic partnerships for long-term success."
            />
            <ServiceCard
              icon={Landmark}
              title="Private Investment"
              description="Strategic funding for high-potential ventures, supporting innovation with smart capital and expertise."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Start Your Journey</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-orange-500 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-orange-500 focus:outline-none"
              required
            />
            <select className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:border-orange-500 focus:outline-none">
              <option value="">Select Your Interest</option>
              <option value="marketing">Marketing Services</option>
              <option value="advisory">Advisory Services</option>
              <option value="deals">OTC Deals</option>
              <option value="investment">Investment Opportunities</option>
              <option value="other">Other</option>
            </select>
            <textarea
              placeholder="Tell us about your project or investment needs"
              className="w-full p-3 h-32 bg-gray-800 rounded border border-gray-700 focus:border-orange-500 focus:outline-none"
              required
            />
            <button type="submit" className="w-full bg-orange-600 py-3 rounded font-semibold hover:bg-orange-700 transition-colors">
              Submit
            </button>
          </form>
          {formStatus && <p className="mt-4 text-green-400 text-center">{formStatus}</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GrayMan Dealflows</h3>
              <p className="text-gray-400">Bridging ideas to execution in the digital age.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Marketing</li>
                <li>Advisory</li>
                <li>Deal Sourcing</li>
                <li>Investment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Telegram</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400">contact@graymandealflows.com</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2025 GrayMan Dealflows. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;
