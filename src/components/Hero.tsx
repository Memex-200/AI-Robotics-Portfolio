import React, { useState } from "react";
import { ArrowRight, Play, Zap, Code, Brain } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { AnimatedRobot } from "./AnimatedRobot";

export const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        {/* Floating Robots */}
        <div className="absolute top-1/4 left-1/4">
          <AnimatedRobot size="sm" color="text-blue-400" delay={0} />
        </div>
        <div className="absolute top-1/3 right-1/4">
          <AnimatedRobot size="md" color="text-purple-400" delay={500} />
        </div>
        <div className="absolute bottom-1/3 left-1/3">
          <AnimatedRobot size="lg" color="text-indigo-400" delay={1000} />
        </div>
        <div className="absolute top-1/2 right-1/3">
          <AnimatedRobot size="sm" color="text-cyan-400" delay={1500} />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight break-words text-balance whitespace-pre-line">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block">
              {t.hero.title}
            </span>
          </h1>

          {/* Slogan */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-xl font-semibold text-white">
                {t.hero.slogan}
              </span>
              <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
            </div>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 mb-16 ${isRTL ? 'sm:space-x-reverse sm:space-x-6' : 'sm:space-x-6'}`}>
            <button className={`group flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto ${isRTL ? 'flex-row-reverse space-x-reverse space-x-2' : 'space-x-2'}`}>
              <span>{t.hero.cta}</span>
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 group-hover:${
                  isRTL ? "-translate-x-1" : "translate-x-1"
                }`}
              />
            </button>

            <button
              className={`group flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 border border-white/30 hover:border-white/50 w-full sm:w-auto ${
                isRTL
                  ? "flex-row-reverse space-x-reverse space-x-2"
                  : "space-x-2"
              }`}
              onClick={() => setShowModal(true)}
            >
              <Play className="w-5 h-5" />
              <span>{t.hero.watchDemo}</span>
            </button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4">
            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <span className="text-white font-medium text-sm sm:text-base text-center">
                Programming
              </span>
            </div>
            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <span className="text-white font-medium text-sm sm:text-base text-center">
                AI & Robotics
              </span>
            </div>
            <div className="flex flex-col items-center space-y-3 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <span className="text-white font-medium text-sm sm:text-base text-center">
                Innovation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Modal for Video Demo */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative bg-gray-900 rounded-lg shadow-lg p-4 max-w-4xl w-full max-h-[90vh] flex flex-col items-center overflow-hidden">
            <button
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center text-white text-xl font-bold hover:text-red-400 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <video
              src="/فيديو كريم لتعليم البرمجه.mp4"
              controls
              autoPlay
              className="w-full max-h-[80vh] rounded-lg border border-white/20"
              style={{ maxWidth: '100%', height: 'auto' }}
            >
              Your browser does not support the video tag.
            </video>
            <span className="mt-3 text-white text-sm sm:text-base">Demo Video</span>
          </div>
        </div>
      )}
    </section>
  );
};
