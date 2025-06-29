import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        timelineRef.current?.children || [],
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'WorkHub',
      location: 'Lahore',
      period: 'July 2022 - Present',
      description: 'Leading AI-powered platform development and enterprise solutions',
      achievements: [
        'Architected WorkBot - enterprise AI knowledge management platform using RAG technology',
        'Built Dubai Real Estate Platform (DREP) with AI-powered property management',
        'Developed MemoMind - WhatsApp-based personal memory assistant',
        'Created Competitor Search API for market intelligence',
        'Implemented multi-model AI integration (OpenAI, Claude, Groq)',
        'Built scalable microservices architecture with 99.9% uptime',
      ],
      technologies: ['FastAPI', 'Python', 'React.js', 'AI/ML', 'PostgreSQL', 'Docker', 'AWS'],
    },
    {
      title: 'FullStack Developer',
      company: 'Coeus Solutions',
      location: 'Lahore',
      period: 'February 2022 - July 2022',
      description: 'Enterprise communication platform development',
      achievements: [
        'Developed WorkHub Connect - enterprise communication platform',
        'Implemented AWS Chime integration for voice/video calling',
        'Built real-time messaging with Socket Cluster',
        'Integrated Okta SSO and multi-tenant architecture',
        'Developed WorkHub Scheduling with multi-calendar sync',
        'Optimized performance with Redis caching',
      ],
      technologies: ['React.js', 'PHP Symfony', 'AWS', 'MySQL', 'Redis', 'Socket Cluster'],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Bravinn Technologies',
      location: 'Lahore',
      period: 'August 2020 - January 2022',
      description: 'Cloud-based applications for creative professionals',
      achievements: [
        'Led development of Animatricks - animation and video creation platform',
        'Built Logo Builder - graphic design application',
        'Developed Academinator - comprehensive school management system',
        'Implemented JWT authentication and role-based authorization',
        'Optimized database performance reducing load times by 40%',
        'Engineered complex file processing systems',
      ],
      technologies: ['JavaScript', 'ASP.NET', 'React.js', 'MSSQL', 'Entity Framework'],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through innovative projects and cutting-edge technologies
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-blue-600 mb-2">
                        <Building className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Education</h3>
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Bachelor of Science in Computer Science (HONS)
            </h4>
            <p className="text-blue-600 font-semibold mb-2">University of Gujrat, Lahore Campus</p>
            <p className="text-gray-500">2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;