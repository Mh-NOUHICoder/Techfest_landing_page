import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Mic, Coffee, Laptop, Users, PartyPopper, Sparkles, Code, Rocket, Globe, Menu, X, ChevronDown } from 'lucide-react';
import HeroSection from './components/Hero';
import SpeakersGrid from './components/Speakers';
import SponsorsSection from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import MainPage from './components/Contact';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      label: 'About', 
      items: ['Overview', 'Speakers'] 
    },
    { 
      label: 'Schedule',
      items: ['Full Agenda', 'Workshops', 'Networking Events']
    },
    { 
      label: 'Tickets',
      items: ['Pricing', 'Group Bookings', 'Student Discount']
    },
    { label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-indigo-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Sparkles className="h-8 w-8 text-indigo-300" />
            <span className="ml-2 text-xl font-bold text-white">TechFest</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center focus:outline-none"
                  onMouseEnter={() => setActiveDropdown(item.items ? index : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.label}
                  {item.items && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
                
                {item.items && activeDropdown === index && (
                  <div
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-1">
                      {item.items.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105">
              Register Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-indigo-900/95 backdrop-blur-md">
          {navItems.map((item, index) => (
            <div key={index}>
              <button
                className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  {item.label}
                  {item.items && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                  )}
                </div>
              </button>
              {item.items && activeDropdown === index && (
                <div className="pl-4 space-y-1">
                  {item.items.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-white"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 mt-4">
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
}



function AgendaSection() {
  const agendaItems = [
    {
      time: '09:00 AM',
      title: 'Registration & Welcome Coffee',
      location: 'Main Hall',
      icon: Coffee,
      description: 'Start your day with networking and refreshments'
    },
    {
      time: '10:00 AM',
      title: 'Keynote: Future of Technology',
      location: 'Auditorium A',
      icon: Mic,
      description: 'Opening keynote by industry leaders on emerging tech trends'
    },
    {
      time: '11:30 AM',
      title: 'Workshop: AI & Machine Learning',
      location: 'Workshop Room 1',
      icon: Laptop,
      description: 'Hands-on session with practical ML applications'
    },
    {
      time: '01:00 PM',
      title: 'Networking Lunch',
      location: 'Garden Area',
      icon: Users,
      description: 'Connect with fellow tech enthusiasts over lunch'
    },
    {
      time: '02:30 PM',
      title: 'Closing Ceremony',
      location: 'Main Stage',
      icon: PartyPopper,
      description: 'Awards presentation and closing remarks'
    }
  ];

  return (
    <div  className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            Event Schedule
          </h2>
          <div className="flex items-center justify-center gap-4 text-indigo-600">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">March 15, 2025</span>
            <MapPin className="w-5 h-5 ml-4" />
            <span className="font-medium">Tech Convention Center</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {agendaItems.map((item, index) => (
            <div key={index} className="relative">
              {index !== agendaItems.length - 1 && (
                <div className="absolute left-6 top-10 h-full w-0.5 bg-indigo-200" />
              )}
              <div className="flex items-start mb-12 relative">
                <div className="bg-white  rounded-full p-3 shadow-lg z-10">
                  <item.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="ml-6 bg-white rounded-xl shadow-lg p-6 flex-1 transform transition-all hover:scale-[1.02] hover:shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-indigo-900">{item.title}</h3>
                    <div className="flex items-center text-indigo-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">{item.time}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <div className="flex items-center text-indigo-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      
      <SpeakersGrid/> 
      <SponsorsSection/>
      <div id="agenda">
      <AgendaSection />
      </div>
      <FAQ/>
      <MainPage/>
      
      <Footer/>
    </>
  );
}

export default App;