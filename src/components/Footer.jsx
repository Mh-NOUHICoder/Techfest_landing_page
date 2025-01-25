import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react'; // Import icons from lucide-react or any other icon library

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white py-8">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
        <p className="mb-4">Follow us on social media :</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="flex items-center hover:text-indigo-300 transition duration-300">
            <Facebook className="h-6 w-6 mr-2" />
            Facebook
          </a>
          <a href="#" className="flex items-center hover:text-indigo-300 transition duration-300">
            <Twitter className="h-6 w-6 mr-2" />
            Twitter
          </a>
          <a href="#" className="flex items-center hover:text-indigo-300 transition duration-300">
            <Instagram className="h-6 w-6 mr-2" />
            Instagram
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} TechFest. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;