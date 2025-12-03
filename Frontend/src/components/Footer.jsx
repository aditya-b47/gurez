import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-gray-500 uppercase text-sm font-semibold mb-4 tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cancellation/Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-gray-500 uppercase text-sm font-semibold mb-4 tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Near Church, Anand Vihar Colony, Karnal, Haryana 132001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>08222944567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>admin@gurez.com</span>
              </li>
            </ul>
          </div>

          {/* Find Our App on Mobile */}
          <div>
            <h3 className="text-gray-500 uppercase text-sm font-semibold mb-4 tracking-wider">
              Find Our App on Mobile
            </h3>
            <div className="flex gap-4 mb-6">
              <div className="w-24 h-24 bg-white p-2 rounded">
                <div className="w-full h-full bg-black"></div>
              </div>
              <div className="w-24 h-24 bg-white p-2 rounded">
                <div className="w-full h-full bg-black"></div>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="App Store" 
                  className="h-10"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Google Play" 
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Payment Methods & Keep in Touch */}
          <div>
            <h3 className="text-gray-500 uppercase text-sm font-semibold mb-4 tracking-wider">
              Payment Methods
            </h3>
            <div className="flex gap-2 mb-6">
              <div className="bg-white px-3 py-2 rounded">
                <span className="text-blue-600 font-bold text-xs">VISA</span>
              </div>
              <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 px-3 py-2 rounded">
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-red-500 rounded-full opacity-80"></div>
                  <div className="w-4 h-4 bg-orange-400 rounded-full opacity-80"></div>
                </div>
              </div>
              <div className="bg-red-600 px-3 py-2 rounded">
                <span className="text-white font-bold text-xs">airtel</span>
              </div>
            </div>
            
            <h3 className="text-gray-500 uppercase text-sm font-semibold mb-4 tracking-wider">
              Keep in Touch
            </h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 border border-gray-600 rounded flex items-center justify-center hover:border-gray-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border border-gray-600 rounded flex items-center justify-center hover:border-gray-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>© 2024-25 | All rights reserved</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors"
        aria-label="Scroll to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}
