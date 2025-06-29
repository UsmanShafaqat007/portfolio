import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ExternalLink, Brain, Database, Smartphone, Building2, Search, 
  Stethoscope, Eye, MessageSquare, Settings, Calendar, Film, Palette, 
  GraduationCap, Monitor, Video, Car, Home, Scale, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import { getAllProjects, ProjectData } from '../data/resumeParser';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allProjects = getAllProjects();
  // Show only top 6 projects (most recent/important ones)
  const featuredProjects = allProjects.slice(0, 6);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        projectsRef.current?.children || [],
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
      'AI/ML': 'bg-purple-100 text-purple-800',
      'Enterprise': 'bg-blue-100 text-blue-800',
      'Business Intelligence': 'bg-green-100 text-green-800',
      'Healthcare': 'bg-red-100 text-red-800',
      'Legal Tech': 'bg-yellow-100 text-yellow-800',
      'Enterprise Communication': 'bg-indigo-100 text-indigo-800',
      'Enterprise Management': 'bg-cyan-100 text-cyan-800',
      'Productivity': 'bg-teal-100 text-teal-800',
      'Creative Tools': 'bg-pink-100 text-pink-800',
      'Design Tools': 'bg-orange-100 text-orange-800',
      'Education': 'bg-emerald-100 text-emerald-800',
      'Productivity Tools': 'bg-violet-100 text-violet-800',
      'Booking Systems': 'bg-rose-100 text-rose-800',
      'Real Estate': 'bg-amber-100 text-amber-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    return status === 'Production' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-orange-100 text-orange-800';
  };

  const handleViewDetails = (project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of innovative solutions spanning AI/ML, enterprise applications, and cutting-edge technologies
          </p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border border-gray-100 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-90 text-gray-800">
                    {project.company}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(project.icon)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
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
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => handleViewDetails(project)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium flex-1 justify-center"
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm font-medium">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Showing {featuredProjects.length} of {allProjects.length} projects
          </p>
          <Link 
            to="/projects"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
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

export default Projects;