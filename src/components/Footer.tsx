import React from "react";
import { Bot, Facebook, Instagram, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start" style={{direction: isRTL ? 'rtl' : 'ltr'}}>
            <div
              className={`flex items-center mb-4 ${isRTL ? 'flex-row-reverse space-x-reverse space-x-2' : 'flex-row space-x-2'}`}
            >
              <Bot className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">AI Robotics Academy</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-center md:text-start">
              {t.hero.slogan}
            </p>
            <div className={`flex mt-4 ${isRTL ? 'flex-row-reverse space-x-reverse space-x-4' : 'flex-row space-x-4'}`}>
              <a
                href="https://www.facebook.com/profile.php?id=61559788044093"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ai.robotics1?igsh=NXoxamd0ejdpYmM2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Achievements
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Asyut - Al-Benaa Street
                  </p>
                  <p className="text-gray-400 text-sm">
                    Omar Ashdani Tower - First Floor
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">01040311505</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-400">01505227778</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AI Robotics Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
