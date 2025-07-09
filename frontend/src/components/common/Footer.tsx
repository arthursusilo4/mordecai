import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-500 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-transparent bg-white bg-clip-text">
              Mordecai
            </h3>
            <p className="text-white text-sm leading-relaxed">
              Super efficient user management system designed for modern organizations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-white hover:text-primary-400 transition-colors duration-300 text-sm">
                Home
              </a>
              <a href="/users" className="block text-white hover:text-primary-400 transition-colors duration-300 text-sm">
                Users
              </a>
              <a href="/add-user" className="block text-white hover:text-primary-400 transition-colors duration-300 text-sm">
                Add User
              </a>
            </div>
          </div>

          {/* Made with Love */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-white">Made with</h4>
            <div className="flex justify-center md:justify-end items-center space-x-2 text-sm text-gray-400">
              <Heart className="text-white" size={16} />
              <Code className="text-white" size={16} />
              <Coffee className="text-white" size={16} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-sm">
              © {currentYear} Mordecai User Management System. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/arthursusiloweb/" className="text-white hover:text-primary-400 transition-colors duration-300 text-sm">
                LinkedIN
              </a>
              <a href="https://github.com/arthursusilo4" className="text-white hover:text-primary-400 transition-colors duration-300 text-sm">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;