import React, { useState } from 'react';
import { Baby, Users, GraduationCap, Code, Cpu, Wrench, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { key: 'ageGroups', icon: Users },
    { key: 'diplomas', icon: GraduationCap },
    { key: 'professional', icon: Code }
  ];

  const ageIcons = [Baby, Users, GraduationCap];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t.services.title}
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-white dark:bg-gray-900 rounded-2xl p-2 shadow-lg">
            {tabs.map((tab, index) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{t.services[tab.key as keyof typeof t.services] as string}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {/* Age Groups */}
            {activeTab === 0 && (
              <div className="grid md:grid-cols-3 gap-8">
                {t.services.ages.map((age, index) => {
                  const IconComponent = ageIcons[index];
                  return (
                    <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {age.range}
                      </h3>
                      <ul className="space-y-3">
                        {age.offerings.map((offering, offerIndex) => (
                          <li key={offerIndex} className="flex items-center space-x-3">
                            <ChevronRight className={`w-4 h-4 text-blue-500 ${isRTL ? 'rotate-180' : ''}`} />
                            <span className="text-gray-700 dark:text-gray-300">{offering}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Diplomas */}
            {activeTab === 1 && (
              <div className="grid md:grid-cols-3 gap-8">
                {t.services.diplomasList.map((diploma, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {diploma}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Professional certification program with hands-on training and industry recognition.
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Professional Courses */}
            {activeTab === 2 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.services.professionalList.map((course, index) => {
                  const icons = [Cpu, Code, Wrench, Code, Cpu];
                  const IconComponent = icons[index % icons.length];
                  return (
                    <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {course.category}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {course.details}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};