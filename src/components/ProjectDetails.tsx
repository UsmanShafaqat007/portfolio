import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { 
  X, Calendar, Users, Target, Code, Zap, TrendingUp, 
  CheckCircle, ArrowRight, ExternalLink, 
  Clock, Award, Database, Shield, Cpu, Globe,
  BarChart3, Lightbulb, Settings, Rocket, Building2
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
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
      
      // Animate content sections
      gsap.fromTo(contentRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: 'power2.out' }
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
      duration: 0.2,
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
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{project.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                    Company & Period
                  </h4>
                  <p className="text-gray-700 mb-2"><strong>Company:</strong> {project.company}</p>
                  <p className="text-gray-700 mb-2"><strong>Period:</strong> {project.period}</p>
                  <p className="text-gray-700 mb-2"><strong>Category:</strong> {project.category}</p>
                  <p className="text-gray-700"><strong>Status:</strong> {project.status}</p>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <Target className="w-5 h-5 text-green-600 mr-2" />
                    Project Scope
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{project.scope}</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Code className="w-6 h-6 text-blue-600 mr-3" />
                Technologies & Tools
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                      <span className="font-medium text-gray-900">{tech}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Achievements */}
            {project.technicalAchievements && project.technicalAchievements.length > 0 && (
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="w-6 h-6 text-green-600 mr-3" />
                  Technical Achievements
                </h3>
                <div className="space-y-4">
                  {project.technicalAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{achievement}</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="w-6 h-6 text-blue-600 mr-3" />
                Key Features & Functionalities
              </h3>
              <div className="space-y-6">
                {project.keyFeatures.map((feature, index) => {
                  const [title, description] = feature.includes(':') 
                    ? [feature.split(':')[0].trim(), feature.split(':')[1].trim()]
                    : [feature, ''];
                  
                  return (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
                          {description && (
                            <p className="text-gray-600 leading-relaxed">{description}</p>
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
      'Search': '��',
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 relative">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center mb-4">
            <div className="text-4xl mr-4">
              {getIcon(project.icon)}
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
              <p className="text-blue-100 text-lg">{project.description}</p>
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              {project.status}
            </span>
            <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm">
              {project.category}
            </span>
            <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm">
              {project.company}
            </span>
            <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm">
              {project.period}
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[60vh]">
          <div ref={contentRef}>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;