import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { 
  ArrowRight, Users, FileText, LanguagesIcon, 
  Check, Star,Shield,Crown} from 'lucide-react';

import synthiaLogo from '@/assets/synthia-logo.png';
import stockVideo from '@/assets/stock-video.mp4';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [videoBlur, setVideoBlur] = useState(0);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const features = [
    {
      icon: LanguagesIcon,
      title: 'Taglish Support',
      description: 'Recognizes and transcribes mixed Filipino-English (Taglish) conversations.'
    },
    {
      icon: Users,
      title: 'All-in-One Meeting Toolkit',
      description: 'Provides structured tools and guidance for all stages of a meeting: preparation, execution, and follow-up activities.'
    },
    {
      icon: FileText,
      title: 'Formal Reports Generator',
      description: 'Produces professional reports following the organization’s formatting and content standards.'
    }
  ];

  const pricingPlans = [
  {
      name: 'Free',
      price: '$0',
      period: billingCycle === 'monthly' ? '/mo' : '/yr',
      description: 'Perfect for individuals just getting started.',
      features: [
        '30 mins transcription/mo',
        'Basic Taglish Support',
        '1 User Seat',
        'Email Support',
        '7-day history'
      ],
      buttonText: 'Start Free',
      buttonVariant: 'outline'
    },
    {
      name: 'Personal',
      price: billingCycle === 'monthly' ? '$7.99' : '$79',
      period: billingCycle === 'monthly' ? '/mo' : '/yr',
      description: 'For independent pros managing multiple clients.',
      features: [
        '5 hours transcription/mo',
        'Advanced Taglish AI',
        'Export to PDF & Docx',
        'Meeting Templates',
        '30-day history'
      ],
      buttonText: 'Get Freelancer',
      buttonVariant: 'outline'
    },
    {
      name: 'Team',
      price: billingCycle === 'monthly' ? '$14.99' : '$149',
      period: billingCycle === 'monthly' ? '/mo' : '/yr',
      description: 'Collaborate seamlessly with your growing team.',
      isPopular: true,
      features: [
        '20 hours transcription/mo',
        'Real-time Collaboration',
        '5 User Seats',
        'Priority Support',
        'Unlimited history'
      ],
      buttonText: 'Start Trial',
      buttonVariant: 'primary'
    },
    {
      name: 'Business',
      price: billingCycle === 'monthly' ? '$59.99' : '$599',
      period: billingCycle === 'monthly' ? '/mo' : '/yr',
      description: 'Advanced controls for scaling organizations.',
      features: [
        '50 hours transcription/mo',
        '20 User Seats',
        'Admin Dashboard',
        'SSO Integration',
        'Advanced Analytics'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '', // No period for Enterprise
      description: 'Full-scale solution with strict security.',
      features: [
        'Unlimited transcription',
        'Unlimited Seats',
        'On-Premise Deployment',
        'Custom AI Model',
        'Audit Logs'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Video */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background Video - Replace videoUrl with your stock video */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: `blur(2px)` }}
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%23f3f4f6' width='1200' height='800'/%3E%3C/svg%3E"
        >
          <source src={stockVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>

        {/* Hero Content - Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img
              src={synthiaLogo}
              alt="Synthia Logo"
              className="h-32 md:h-48 mx-auto"
            />
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-white drop-shadow-lg">
              SYNTHIA
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow">
              Experience the future of intelligent design. Where innovation meets elegance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const featuresSection = document.getElementById('features-section');
                featuresSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Main Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes Synthia the ultimate platform for intelligent collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                  className={`p-8 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeFeature === index
                      ? 'bg-violet-600 text-white shadow-xl scale-105'
                      : 'bg-gray-50 text-gray-900 hover:shadow-lg'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    activeFeature === index
                      ? 'bg-white/20'
                      : 'bg-violet-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      activeFeature === index
                        ? 'text-white'
                        : 'text-violet-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className={`text-sm leading-relaxed ${
                    activeFeature === index
                      ? 'text-white/90'
                      : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

        {/* Pricing Section */}
      <section id="pricing-section" className="py-20 md:py-32 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-violet-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Plans & Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Choose the perfect plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light mb-10">
              Scalable solutions for individuals, growing teams, and large enterprises.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
                className="w-14 h-7 bg-violet-600 rounded-full p-1 transition-colors duration-200 ease-in-out relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 cursor-pointer"
                aria-label="Toggle billing cycle"
              >
                <div 
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                    billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-0'
                  }`} 
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly <span className="text-violet-600 text-xs ml-1 font-bold">(2 MONTHS FREE!)</span>
              </span>
            </div>
          </div>

          {/* Pricing Flex Container - 5 in a row on Large screens */}
          {/* Using gap-3 and p-4 to ensure 5 items fit nicely on standard laptop screens */}
          <div className="flex flex-col lg:flex-row gap-3 justify-center items-stretch">
            {pricingPlans.map((plan, index) => {
              const isPopular = plan.isPopular;
              
              return (
                <div
                  key={index}
                  className={`relative flex flex-col flex-1 p-4 rounded-2xl bg-white transition-all duration-300 ${
                    isPopular 
                      ? 'border-2 border-violet-500 shadow-xl scale-100 lg:scale-105 z-10' 
                      : 'border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1 shadow-lg whitespace-nowrap">
                      <Star className="w-3 h-3 fill-current" /> Most Popular
                    </div>
                  )}

                  <div className="mb-4 text-center lg:text-left">
                    <h3 className="text-lg font-bold text-gray-900 flex items-center justify-center lg:justify-start gap-2">
                      {plan.name}
                      {plan.name === 'Enterprise' && <Shield className="w-4 h-4 text-gray-400" />}
                      {plan.name === 'Business' && <Crown className="w-4 h-4 text-amber-400" />}
                    </h3>
                    <div className="mt-3 flex items-baseline justify-center lg:justify-start">
                      <span className="text-2xl xl:text-3xl font-extrabold text-gray-900 tracking-tight transition-all duration-300">{plan.price}</span>
                      {plan.period && <span className="ml-1 text-gray-500 text-xs font-medium">{plan.period}</span>}
                    </div>
                    <p className="mt-3 text-xs text-gray-500 leading-relaxed min-h-[40px]">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex-1">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2.5">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full bg-violet-50 flex items-center justify-center mt-0.5">
                            <Check className="w-2.5 h-2.5 text-violet-600" strokeWidth={3} />
                          </div>
                          <span className="text-xs text-gray-600 leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors duration-200 flex items-center justify-center gap-2 ${
                      plan.buttonVariant === 'primary'
                        ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-200'
                        : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    {plan.buttonText}
                    {plan.buttonVariant === 'primary' && <ArrowRight className="w-3.5 h-3.5" />}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
              Need help choosing? <a href="#" className="text-violet-600 font-semibold hover:underline">Compare all features</a> or <a href="#" className="text-violet-600 font-semibold hover:underline">contact our sales team</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-2">
              <img
              src={synthiaLogo}
              alt="Synthia Logo"
              className="h-12 md:h-12 mx-auto"
            />
              <span className="font-bold text-xl tracking-tight">SYNTHIA</span>
           </div>
           <div className="text-gray-500 text-sm">
             © {new Date().getFullYear()} Synthia Inc. All rights reserved.
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;