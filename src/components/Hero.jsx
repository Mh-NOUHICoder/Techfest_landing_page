import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Mic, Coffee, Laptop, Users, PartyPopper, Sparkles, Code, Rocket, Globe, Menu, X, ChevronDown } from 'lucide-react';
import Countdown from './Countdown';

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const year = 2025; // Define the year here

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob duration-3000" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Sparkles className="w-4 h-4 text-yellow-300 mr-2" />
            <span className="text-yellow-200 font-medium">Join the biggest tech event of {year}</span>
          </div>

          {/* Main Title */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-200 text-transparent bg-clip-text transform transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            TechFest {year}
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-indigo-100 mb-12 max-w-3xl mx-auto transform transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Experience the future of technology with industry leaders, innovative workshops, and networking opportunities.
          </p>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transform transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { icon: Users, label: 'Attendees', value: '1000+' },
              { icon: Mic, label: 'Speakers', value: '50+' },
              { icon: Globe, label: 'Countries', value: '25+' },
              { icon: Laptop, label: 'Workshops', value: '30+' }
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                <stat.icon className="w-6 h-6 text-indigo-300 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-indigo-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transform transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="animate-blob px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-semibold flex items-center transition-all hover:scale-105">
              <Rocket className="w-5 h-5 mr-2" />
              Register Now
            </button>
            <button
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold flex items-center transition-all hover:scale-105"
              onClick={() => document.getElementById('agenda').scrollIntoView({ behavior: 'smooth' })}
            >
              <Code className="w-5 h-5 mr-2" />
              View Schedule
            </button>
          </div>

          {/* Countdown */}
          <div>
            <Countdown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;