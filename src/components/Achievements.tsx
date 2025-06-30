import React from "react";
import { Trophy, Star, Award, Target } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const Achievements: React.FC = () => {
  const { t } = useLanguage();
  const { isRTL } = useLanguage();

  const icons = [Trophy, Star, Award, Target];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t.achievements.title}
            </h2>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {t.achievements.list.map((achievement, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <div
                  key={index}
                  className={`flex items-start p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:shadow-lg transition-shadow duration-300 group ${
                    isRTL
                      ? "flex-row-reverse space-x-reverse space-x-6"
                      : "flex-row space-x-6"
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* STEM Accreditation Highlight */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg">
              <Award className="w-8 h-8" />
              <span className="text-xl font-bold">STEM Accredited</span>
              <Award className="w-8 h-8" />
            </div>
            <div className="mt-8 flex justify-center">
              <a
                href="/153439462-Airobotics.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-700 dark:text-blue-300 underline hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors duration-200"
              >
                View Accreditation Certificate (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
