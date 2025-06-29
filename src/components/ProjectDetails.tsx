import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { 
  X, Target, Code, Zap, CheckCircle, Globe, Award, Building2
} from 'lucide-react';
import { ProjectData } from '../data/resumeParser';

interface ProjectDetailsProps {
  project: ProjectData;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Animate modal entrance
      gsap.fromTo(modalRef.current, 
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      );
      
      // Animate content sections
      gsap.fromTo(contentRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.3, ease: 'power2.out' }
      );
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.9,
      y: 50,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: onClose
    });
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Globe className="w-4 h-4" /> },
    { id: 'technical', label: 'Technical Details', icon: <Code className="w-4 h-4" /> },
    { id: 'features', label: 'Key Features', icon: <Zap className="w-4 h-4" /> }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Project Overview */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mr-3"></div>
                  Project Overview
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">{project.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h4 className="font-bold text-white mb-4 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <Building2 className="w-4 h-4 text-white" />
                      </div>
                      Company & Timeline
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Company:</span>
                        <span className="text-white font-medium">{project.company}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Period:</span>
                        <span className="text-white font-medium">{project.period}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Category:</span>
                        <span className="text-purple-400 font-medium">{project.category}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Status:</span>
                        <span className="text-green-400 font-medium">{project.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h4 className="font-bold text-white mb-4 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      Project Scope
                    </h4>
                    <p className="text-slate-300 leading-relaxed">{project.scope}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'technical':
        return (
          <div className="space-y-8">
            {/* Technologies */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></div>
                Technologies & Tools
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="group bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-xl p-4 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="font-medium text-slate-700 group-hover:text-slate-900">{tech}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Achievements */}
            {project.technicalAchievements && project.technicalAchievements.length > 0 && (
              <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-8 border border-green-200/50">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  Technical Achievements
                </h3>
                <div className="space-y-4">
                  {project.technicalAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'features':
        return (
          <div className="space-y-8">
            {/* Key Features */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full mr-3"></div>
                Key Features & Functionalities
              </h3>
              <div className="space-y-6">
                {project.keyFeatures.map((feature, index) => {
                  const [title, description] = feature.includes(':') 
                    ? [feature.split(':')[0].trim(), feature.split(':')[1].trim()]
                    : [feature, ''];
                  
                  return (
                    <div key={index} className="group bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">{title}</h4>
                          {description && (
                            <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getIcon = (iconName: string) => {
    // This should match the icon mapping from Projects component
    const iconMap: { [key: string]: React.ReactNode } = {
      'Brain': '🧠',
      'Building2': '🏢',
      'Smartphone': '📱',
      'Search': '🔍',
      'Scale': '⚖️',
      'MessageSquare': '💬',
      'Settings': '⚙️',
      'Calendar': '📅',
      'Film': '🎬',
      'Palette': '🎨',
      'GraduationCap': '🎓',
      'Monitor': '🖥️',
      'Stethoscope': '🩺',
      'Video': '📹',
      'Car': '🚗',
      'Home': '🏠'
    };
    return iconMap[iconName] || '💼';
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-cyan-600/20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500/30 to-transparent rounded-full blur-2xl"></div>
          
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-3 hover:bg-white/10 rounded-full transition-all duration-300 z-[9999] group"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>
          
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="text-5xl mr-6 p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                {getIcon(project.icon)}
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <p className="text-slate-300 text-lg max-w-2xl">{project.description}</p>
              </div>
            </div>

            {/* Status Badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
                {project.status}
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
                {project.category}
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
                {project.company}
              </span>
              <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20">
                {project.period}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-8 py-4 font-medium text-sm whitespace-nowrap transition-all duration-300 relative group ${
                  activeTab === tab.id
                    ? 'text-purple-600 bg-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div className={`p-2 rounded-lg mr-3 transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-br from-purple-500 to-cyan-500 text-white shadow-lg' 
                    : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                }`}>
                  {tab.icon}
                </div>
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-t-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[60vh] bg-gradient-to-br from-slate-50 to-white">
          <div className="mb-10" ref={contentRef}>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;