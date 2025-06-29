import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, Brain, Database, Cloud, Shield, Zap, 
  Globe, Smartphone, Server, Settings, Monitor,
  GitBranch, Package, Cpu, Network, Lock
} from 'lucide-react';

const TechnicalSkills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 768) setColumns(1);
      else if (width < 1024) setColumns(2);
      else if (width < 1280) setColumns(3);
      else setColumns(4);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);

    const ctx = gsap.context(() => {
      // Animate skill categories with staggered entrance
      gsap.fromTo(
        '.skill-card',
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
          },
        }
      );

      // Animate progress bars
      const progressBars = document.querySelectorAll('.skill-progress');
      progressBars.forEach((bar) => {
        const width = bar.getAttribute('data-width');
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: width + '%',
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
            },
          }
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', updateColumns);
    };
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      color: 'blue',
      skills: [
        { name: 'Python', level: 95, years: '5+' },
        { name: 'JavaScript (ES6+)', level: 90, years: '5+' },
        { name: 'C#', level: 85, years: '3+' },
        { name: 'PHP', level: 80, years: '2+' },
        { name: 'HTML5', level: 95, years: '5+' },
        { name: 'CSS3/SCSS', level: 90, years: '5+' }
      ]
    },
    {
      title: 'Cloud Services & APIs',
      icon: <Cloud className="w-6 h-6" />,
      color: 'cyan',
      skills: [
        { name: 'AWS S3 (boto3)', level: 85, years: '3+' },
        { name: 'AWS Chime', level: 80, years: '2+' },
        { name: 'AWS SQS', level: 80, years: '2+' },
        { name: 'Supabase', level: 85, years: '2+' },
        { name: 'Stripe', level: 85, years: '3+' },
        { name: 'Moyasar', level: 75, years: '1+' },
        { name: 'Twilio (SMS/WhatsApp API)', level: 85, years: '2+' },
        { name: 'SendGrid', level: 80, years: '2+' },
        { name: 'Mailjet', level: 80, years: '2+' },
        { name: 'Cronofy API', level: 75, years: '1+' },
        { name: 'YouSign API', level: 75, years: '1+' },
        { name: 'Clearbit API', level: 75, years: '1+' },
        { name: 'Chargebee', level: 75, years: '1+' }
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: <Monitor className="w-6 h-6" />,
      color: 'green',
      skills: [
        { name: 'React.js', level: 95, years: '5+' },
        { name: 'Next.js', level: 85, years: '3+' },
        { name: 'Redux', level: 90, years: '4+' },
        { name: 'Context API', level: 90, years: '4+' },
        { name: 'Material-UI', level: 85, years: '3+' },
        { name: 'Bootstrap', level: 80, years: '4+' },
        { name: 'Tailwind CSS', level: 90, years: '3+' },
        { name: 'jQuery', level: 75, years: '5+' }
      ]
    },
    {
      title: 'Vector Databases',
      icon: <Zap className="w-6 h-6" />,
      color: 'pink',
      skills: [
        { name: 'Milvus', level: 90, years: '2+' },
        { name: 'supabase- pgvector', level: 90, years: '2+' },
        { name: 'Pinecone', level: 80, years: '1+' },
        { name: 'Weaviate', level: 75, years: '1+' }
      ]
    },
    {
      title: 'AI/ML Technologies',
      icon: <Brain className="w-6 h-6" />,
      color: 'purple',
      skills: [
        { name: 'LangChain Framework', level: 95, years: '2+' },
        { name: 'OpenAI GPT', level: 95, years: '2+' },
        { name: 'Anthropic Claude', level: 90, years: '1+' },
        { name: 'Perplexity AI', level: 85, years: '1+' },
        { name: 'Groq', level: 85, years: '1+' },
        { name: 'Meta LLaMA', level: 80, years: '1+' },
        { name: 'Google Gemma', level: 80, years: '1+' },
        { name: 'OpenAI Whisper', level: 90, years: '2+' },
        { name: 'RAG (Retrieval-Augmented Generation)', level: 95, years: '2+' },
        { name: 'Vector Embeddings', level: 90, years: '2+' },
        { name: 'OpenAI Assistants API', level: 85, years: '1+' }
      ]
    },
    {
      title: 'Real-time & Communication',
      icon: <Network className="w-6 h-6" />,
      color: 'teal',
      skills: [
        { name: 'Socket Cluster', level: 85, years: '2+' },
        { name: 'WebSocket', level: 85, years: '3+' },
        { name: 'RESTful APIs', level: 95, years: '5+' }
      ]
    },
    {
      title: 'Frameworks',
      icon: <Server className="w-6 h-6" />,
      color: 'orange',
      skills: [
        { name: 'ASP.NET/.NET Core', level: 85, years: '3+' },
        { name: 'FastAPI', level: 95, years: '3+' },
        { name: 'PHP Symfony', level: 80, years: '2+' },
        { name: 'Node.js', level: 85, years: '4+' },
        { name: 'API Platform', level: 75, years: '2+' },
        { name: 'MVC Architecture', level: 90, years: '5+' }
      ]
    },
    {
      title: 'Database Technologies',
      icon: <Database className="w-6 h-6" />,
      color: 'indigo',
      skills: [
        { name: 'PostgreSQL', level: 90, years: '4+' },
        { name: 'MySQL', level: 85, years: '5+' },
        { name: 'MongoDB', level: 80, years: '3+' },
        { name: 'SQLAlchemy ORM', level: 90, years: '3+' },
        { name: 'Entity Framework', level: 85, years: '3+' },
        { name: 'Dapper ORM', level: 80, years: '2+' }
      ]
    },
    {
      title: 'Caching & Message Queues',
      icon: <Cpu className="w-6 h-6" />,
      color: 'yellow',
      skills: [
        { name: 'Redis', level: 85, years: '3+' },
        { name: 'Celery', level: 80, years: '2+' }
      ]
    },
    {
      title: 'Web Scraping & Data Processing',
      icon: <Package className="w-6 h-6" />,
      color: 'emerald',
      skills: [
        { name: 'BeautifulSoup', level: 85, years: '3+' },
        { name: 'Scrapy', level: 80, years: '2+' }
      ]
    },
    {
      title: 'DevOps & Deployment',
      icon: <Settings className="w-6 h-6" />,
      color: 'gray',
      skills: [
        { name: 'Docker', level: 85, years: '3+' },
        { name: 'CI/CD Pipelines', level: 85, years: '2+' },
        { name: 'Render.com', level: 80, years: '2+' },
        { name: 'Heroku', level: 75, years: '3+' },
        { name: 'Uvicorn ASGI', level: 85, years: '3+' },
        { name: 'Alembic (Database Migrations)', level: 80, years: '2+' },
        { name: 'ngrok', level: 75, years: '2+' }
      ]
    },
    {
      title: 'Authentication & Security',
      icon: <Shield className="w-6 h-6" />,
      color: 'red',
      skills: [
        { name: 'JWT Tokenization', level: 90, years: '4+' },
        { name: 'OAuth', level: 85, years: '3+' },
        { name: 'Okta SSO', level: 80, years: '2+' },
        { name: 'bcrypt', level: 85, years: '4+' }
      ]
    },
    {
      title: 'Monitoring & Error Tracking',
      icon: <Globe className="w-6 h-6" />,
      color: 'violet',
      skills: [
        { name: 'Bugsnag', level: 75, years: '2+' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100',
      purple: 'bg-purple-50 border-purple-200 text-purple-800 hover:bg-purple-100',
      green: 'bg-green-50 border-green-200 text-green-800 hover:bg-green-100',
      orange: 'bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800 hover:bg-indigo-100',
      pink: 'bg-pink-50 border-pink-200 text-pink-800 hover:bg-pink-100',
      cyan: 'bg-cyan-50 border-cyan-200 text-cyan-800 hover:bg-cyan-100',
      red: 'bg-red-50 border-red-200 text-red-800 hover:bg-red-100',
      teal: 'bg-teal-50 border-teal-200 text-teal-800 hover:bg-teal-100',
      gray: 'bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100',
      yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800 hover:bg-yellow-100',
      emerald: 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100',
      violet: 'bg-violet-50 border-violet-200 text-violet-800 hover:bg-violet-100'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getProgressColor = (color: string) => {
    const progressMap = {
      blue: 'bg-gradient-to-r from-blue-500 to-blue-600',
      purple: 'bg-gradient-to-r from-purple-500 to-purple-600',
      green: 'bg-gradient-to-r from-green-500 to-green-600',
      orange: 'bg-gradient-to-r from-orange-500 to-orange-600',
      indigo: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      pink: 'bg-gradient-to-r from-pink-500 to-pink-600',
      cyan: 'bg-gradient-to-r from-cyan-500 to-cyan-600',
      red: 'bg-gradient-to-r from-red-500 to-red-600',
      teal: 'bg-gradient-to-r from-teal-500 to-teal-600',
      gray: 'bg-gradient-to-r from-gray-500 to-gray-600',
      yellow: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
      emerald: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
      violet: 'bg-gradient-to-r from-violet-500 to-violet-600'
    };
    return progressMap[color as keyof typeof progressMap] || progressMap.blue;
  };

  const getIconBgColor = (color: string) => {
    const iconMap = {
      blue: 'bg-gradient-to-br from-blue-500 to-blue-600',
      purple: 'bg-gradient-to-br from-purple-500 to-purple-600',
      green: 'bg-gradient-to-br from-green-500 to-green-600',
      orange: 'bg-gradient-to-br from-orange-500 to-orange-600',
      indigo: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      pink: 'bg-gradient-to-br from-pink-500 to-pink-600',
      cyan: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
      red: 'bg-gradient-to-br from-red-500 to-red-600',
      teal: 'bg-gradient-to-br from-teal-500 to-teal-600',
      gray: 'bg-gradient-to-br from-gray-500 to-gray-600',
      yellow: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
      emerald: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      violet: 'bg-gradient-to-br from-violet-500 to-violet-600'
    };
    return iconMap[color as keyof typeof iconMap] || iconMap.blue;
  };

  // Create masonry columns
  const createMasonryColumns = () => {
    const columnArrays: any[][] = Array.from({ length: columns }, () => []);
    
    skillCategories.forEach((category, index) => {
      const columnIndex = index % columns;
      columnArrays[columnIndex].push(category);
    });
    
    return columnArrays;
  };

  const masonryColumns = createMasonryColumns();

  return (
    <section id="technical-skills" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical skills across modern technologies, frameworks, and platforms
          </p>
        </div>

        {/* Masonry Grid */}
        <div ref={skillsRef} className="flex gap-6 items-start">
          {masonryColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex-1 space-y-6">
              {column.map((category, index) => (
                <div
                  key={`${columnIndex}-${index}`}
                  className={`skill-card ${getColorClasses(category.color)} rounded-xl border-2 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl ${getIconBgColor(category.color)} text-white mr-4 shadow-lg`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <div className="text-sm opacity-75 mt-1">
                        {category.skills.length} technologies
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-medium text-gray-900 text-sm">{skill.name}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              {skill.years}
                            </span>
                            <span className="text-sm font-bold text-gray-700">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div
                            className={`skill-progress ${getProgressColor(category.color)} h-2.5 rounded-full transition-all duration-300 shadow-sm`}
                            data-width={skill.level}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Category Stats */}
                  <div className="mt-6 pt-4 border-t border-current border-opacity-20">
                    <div className="flex justify-between text-sm">
                      <span className="opacity-75">Avg. Proficiency</span>
                      <span className="font-bold">
                        {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Technical <span className="text-blue-600">Summary</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">80+</div>
              <div className="text-gray-700 font-medium">Technologies Mastered</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">13</div>
              <div className="text-gray-700 font-medium">Skill Categories</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-gray-700 font-medium">Cloud Services & APIs</div>
            </div>
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Professional <span className="text-blue-600">Achievements</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">AI/ML Expert</h4>
              <p className="text-gray-600 text-sm">Built 6+ production AI platforms serving thousands of users</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Enterprise Architecture</h4>
              <p className="text-gray-600 text-sm">Designed scalable systems with 99.9% uptime</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Performance Optimization</h4>
              <p className="text-gray-600 text-sm">Reduced costs by 60% through intelligent optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;