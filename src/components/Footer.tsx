import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">HackForge</h3>
            <p className="text-gray-300 mb-4">
              Empowering students through technology, innovation, and collaboration at Al-Ameen Engineering College.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/_.hackforge._?igsh=MTNtZXY3MjhjOTJ2dw==" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about-club" className="text-gray-300 hover:text-blue-400 transition-colors">About Club</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-blue-400 transition-colors">Events</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-blue-400 transition-colors">Team</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>hackforgeclub@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>8056955199, 8248904820</span>
              </div>
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Al-Ameen Engineering College<br />Erode, TamilNadu</span>
              </div>
            </div>
          </div>

          {/* College */}
          <div>
            <h4 className="text-lg font-semibold mb-4">College</h4>
            <p className="text-gray-300 mb-2">Al-Ameen Engineering College</p>
            <a 
              href="https://alameen.ac.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Visit College Website →
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 HackForge - Al-Ameen Engineering College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;