import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ExternalLink, Brain, Database, Smartphone, Building2, Search, 
  Stethoscope, Eye, MessageSquare, Settings, Calendar, Film, Palette, 
  GraduationCap, Monitor, Video, Car, Home, Scale, ArrowLeft, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import { getAllProjects, ProjectData } from '../data/resumeParser';

const AllProjects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  const projects = getAllProjects();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Create floating particles effect
      const particles = document.querySelectorAll('.particle');
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: -30,
          duration: 2 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2,
        });
      });

      // Animate projects with stagger
      gsap.fromTo(
        projectsRef.current?.children || [],
        { 
          y: 100, 
          opacity: 0, 
          scale: 0.8,
          rotationY: 45 
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [visibleProjects]);

  const getIcon = (iconName: string) => {
    const iconMap = {
      'Brain': <Brain className="w-8 h-8" />,
      'Building2': <Building2 className="w-8 h-8" />,
      'Smartphone': <Smartphone className="w-8 h-8" />,
      'Search': <Search className="w-8 h-8" />,
      'Scale': <Scale className="w-8 h-8" />,
      'MessageSquare': <MessageSquare className="w-8 h-8" />,
      'Settings': <Settings className="w-8 h-8" />,
      'Calendar': <Calendar className="w-8 h-8" />,
      'Film': <Film className="w-8 h-8" />,
      'Palette': <Palette className="w-8 h-8" />,
      'GraduationCap': <GraduationCap className="w-8 h-8" />,
      'Monitor': <Monitor className="w-8 h-8" />,
      'Stethoscope': <Stethoscope className="w-8 h-8" />,
      'Video': <Video className="w-8 h-8" />,
      'Car': <Car className="w-8 h-8" />,
      'Home': <Home className="w-8 h-8" />
    };
    return iconMap[iconName as keyof typeof iconMap] || <Database className="w-8 h-8" />;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI/ML': 'bg-gradient-to-r from-purple-400 to-purple-600 text-white',
      'Enterprise': 'bg-gradient-to-r from-blue-400 to-blue-600 text-white',
      'Business Intelligence': 'bg-gradient-to-r from-green-400 to-green-600 text-white',
      'Healthcare': 'bg-gradient-to-r from-red-400 to-red-600 text-white',
      'Legal Tech': 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white',
      'Enterprise Communication': 'bg-gradient-to-r from-indigo-400 to-indigo-600 text-white',
      'Enterprise Management': 'bg-gradient-to-r from-cyan-400 to-cyan-600 text-white',
      'Productivity': 'bg-gradient-to-r from-teal-400 to-teal-600 text-white',
      'Creative Tools': 'bg-gradient-to-r from-pink-400 to-pink-600 text-white',
      'Design Tools': 'bg-gradient-to-r from-orange-400 to-orange-600 text-white',
      'Education': 'bg-gradient-to-r from-emerald-400 to-emerald-600 text-white',
      'Productivity Tools': 'bg-gradient-to-r from-violet-400 to-violet-600 text-white',
      'Booking Systems': 'bg-gradient-to-r from-rose-400 to-rose-600 text-white',
      'Real Estate': 'bg-gradient-to-r from-amber-400 to-amber-600 text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-gradient-to-r from-gray-400 to-gray-600 text-white';
  };

  const getStatusColor = (status: string) => {
    return status === 'Production' 
      ? 'bg-gradient-to-r from-green-400 to-green-600 text-white' 
      : 'bg-gradient-to-r from-orange-400 to-orange-600 text-white';
  };

  const handleViewDetails = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 6, projects.length));
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </Link>
          
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-6">
              All Projects
            </h1>
            <div className="absolute -top-4 -right-4 text-yellow-400">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Complete collection of innovative solutions, enterprise applications, and cutting-edge technologies
          </p>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {projects.length}
              </div>
              <div className="text-gray-600 font-medium">Total Projects</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {projects.filter(p => p.status === 'Production').length}
              </div>
              <div className="text-gray-600 font-medium">Production</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {new Set(projects.map(p => p.company)).size}
              </div>
              <div className="text-gray-600 font-medium">Companies</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                {new Set(projects.map(p => p.category)).size}
              </div>
              <div className="text-gray-600 font-medium">Categories</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-1 border border-white/20 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-gray-800 shadow-lg">
                    {project.company}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-blue-300 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(project.icon)}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm font-medium">
                  {project.period}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.keyFeatures.slice(0, 2).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm line-clamp-2">
                          {feature.split(':')[0]}
                        </span>
                      </li>
                    ))}
                    {project.keyFeatures.length > 2 && (
                      <li className="text-blue-600 text-sm font-medium">
                        +{project.keyFeatures.length - 2} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-medium shadow-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => handleViewDetails(project)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-medium flex-1 justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="text-center mt-16">
            <button 
              onClick={loadMoreProjects}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Load More Projects ({projects.length - visibleProjects} remaining)
            </button>
          </div>
        )}

        {/* Show All Loaded Message */}
        {visibleProjects >= projects.length && (
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 text-gray-600 font-medium">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              All projects loaded! 
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default AllProjects; 