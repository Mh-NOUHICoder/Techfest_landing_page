import React, { useState } from 'react';
import { Facebook, Instagram } from 'lucide-react'; // Import icons from lucide-react
import X from '../assets/icons/x.png'
function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', contactForm);
    setContactForm({ name: '', email: '', subject: '', message: '' }); // Reset form
  };

  return (
    <section className="contact-section bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
      <form className="contact-form max-w-md mx-auto" onSubmit={handleContactSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 mb-4 rounded"
          value={contactForm.name}
          onChange={handleContactChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 rounded"
          value={contactForm.email}
          onChange={handleContactChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full p-2 mb-4 rounded"
          value={contactForm.subject}
          onChange={handleContactChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-2 mb-4 rounded"
          value={contactForm.message}
          onChange={handleContactChange}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 text-black p-2 rounded hover:bg-yellow-400 transition"
        >
          Send Message
        </button>
      </form>

      <div className="social-links text-center mt-4">
        <p>Follow us on social media:</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#" className="flex items-center hover:text-yellow-300 transition duration-300">
            <Facebook className="h-6 w-6 mr-2" />
            Facebook
          </a>
          <a href="#" className="flex items-center hover:text-yellow-300 transition duration-300">
            {/* Replace with X icon */}
            <a 
            href="https://x.com/?lang=fr"> <img className="h-6 w-6 mr-2" src={X} c  /> </a>
            <span className="h-6 w-6 mr-2">X</span>
          </a>
          <a href="#" className="flex items-center hover:text-yellow-300 transition duration-300">
            <Instagram className="h-6 w-6 mr-2" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function RegistrationSection() {
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const handleRegistrationChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegistrationForm({ ...registrationForm, [name]: type === 'checkbox' ? checked : value });
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Form Submitted:', registrationForm);
    setRegistrationForm({ name: '', email: '', password: '', confirmPassword: '', terms: false }); // Reset form
  };

  return (
    <section className="registration-section bg-white text-black p-8 mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>
      <form className="registration-form max-w-md mx-auto" onSubmit={handleRegistrationSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 mb-4 rounded"
          value={registrationForm.name}
          onChange={handleRegistrationChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 rounded"
          value={registrationForm.email}
          onChange={handleRegistrationChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded"
          value={registrationForm.password}
          onChange={handleRegistrationChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full p-2 mb-4 rounded"
          value={registrationForm.confirmPassword}
          onChange={handleRegistrationChange}
          required
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="terms"
            className="mr-2"
            checked={registrationForm.terms}
            onChange={handleRegistrationChange}
            required
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400 transition">
          Register
        </button>
      </form>
    </section>
  );
}

function MainPage() {
  return (
    <main>
      <ContactSection />
      
    </main>
  );
}

export default MainPage;
