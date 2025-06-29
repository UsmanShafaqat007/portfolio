import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Brain, Rocket, Users } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        cardsRef.current?.children || [],
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: '5+ Years Experience',
      description: 'Full-stack development with modern technologies',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI/ML Expertise',
      description: 'Advanced AI systems and machine learning solutions',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Enterprise Solutions',
      description: 'Scalable applications serving thousands of users',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Leadership',
      description: 'Leading technical decisions and mentoring developers',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                My career journey has been deeply shaped by my childhood passion for discovering new technologies, 
                designs, and building logical solutions. From an early age, I enjoyed learning about cutting-edge 
                development techniques and applying them to create innovative solutions.
              </p>
              
              <p>
                Over the past 5+ years, I have honed my skills as a full-stack developer, specializing in modern 
                web technologies, cloud platforms, and database systems. I have extensive experience in frontend 
                frameworks, backend architectures, API development, and database management across various technology stacks.
              </p>
              
              <p>
                Currently, my work involves developing AI-powered systems, including AI agents that enhance user 
                experience through personalized interactions and automation. I specialize in building advanced AI 
                architectures, implementing vector databases, and integrating multiple AI models for enterprise-grade applications.
              </p>
              
              <p>
                I'm excited about the future of AI and its potential to revolutionize industries, and I am dedicated 
                to integrating this cutting-edge technology into the solutions I create.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Problem Solving
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Fast Learning
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Team Leadership
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Research & Development
                </span>
              </div>
            </div>
          </div>

          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;