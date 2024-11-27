import React from "react";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left section: Title and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Surf's Up Club</h2>
            <p className="text-blue-200">
              Riding waves and creating memories since 2005. Join our community of passionate surfers!
            </p>
          </div>

          {/* Center section: List of Pages */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-300 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right section: Social Media and Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <p className="flex items-center">
                <MapPin size={16} className="mr-2" />
                123 Surf Street, Beach City, 12345
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@surfsupclub.com" className="hover:underline">
                  info@surfsupclub.com
                </a>
              </p>
              <p className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+11234567890" className="hover:underline">
                  +1 (123) 456-7890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-blue-700 text-center text-sm text-blue-300">
        <p>&copy; 2024 Surf's Up Club. All rights reserved.</p>
        <p>Made by Site Symphony Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
