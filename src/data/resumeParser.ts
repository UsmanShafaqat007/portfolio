export interface ProjectData {
  id: string;
  title: string;
  company: string;
  period: string;
  category: string;
  status: string;
  description: string;
  scope: string;
  technologies: string[];
  keyFeatures: string[];
  keyResponsibilities?: string[];
  technicalAchievements?: string[];
  challenges?: string[];
  impact: string;
  image: string;
  icon: string;
}

export const getAllProjects = (): ProjectData[] => {
  return [
    // WorkHub (2022-Present) - Current Role Projects
    {
      id: 'workbot',
      title: 'WorkBot - Enterprise AI Knowledge Management Platform',
      company: 'WorkHub',
      period: 'July 2022 - Present',
      category: 'AI/ML',
      status: 'Production',
      description: 'Enterprise-grade AI-powered knowledge management platform transforming organizational documents into intelligent chatbots using RAG technology',
      scope: 'Full-stack development of RAG-powered AI system converting static documents into interactive chatbots',
      technologies: [
        'FastAPI', 'Python', 'LangChain Framework', 'OpenAI GPT', 'Anthropic Claude', 
        'Perplexity AI', 'Groq', 'Milvus', 'PostgreSQL (pgvector)', 'React.js', 'Redis', 
        'Celery', 'AWS S3', 'Docker', 'CI/CD Pipelines'
      ],
      keyFeatures: [
        'Multi-Model AI Integration: Dynamic switching between OpenAI GPT, Anthropic Claude, and Groq models based on query complexity and cost optimization',
        'Advanced RAG System: Custom retrieval-augmented generation providing factual, source-backed answers from company knowledge bases',
        'Multi-Modal Document Processing: Support for PDFs, Excel files, images, and scanned documents with OCR capabilities in multiple languages',
        'Vector Database Implementation: Milvus integration handling millions of document embeddings with semantic search capabilities',
        'Context-Aware Chatbot: Advanced conversation management with chat history, threading, and context preservation',
        'Voice & Web Agents: AI-powered voice interaction system with feedback collection and web-based assistant deployment',
        'Source Citation System: Automated source tracking and citation for answer transparency and verification',
        'Real-time Streaming: Response streaming implementation for enhanced user experience and reduced latency'
      ],
      technicalAchievements: [
        'Built multi-tenant architecture with complete data isolation between companies',
        'Implemented JWT-based authentication with role-based access control',
        'Created a sophisticated multi-layer Redis caching strategy, significantly reducing API costs',
        'Developed scalable background processing with Celery and Redis message broker',
        'Achieved high query accuracy with fast response times'
      ],
      impact: 'Enabled instant access to company knowledge bases, significantly reducing research time and handling thousands of daily queries',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Brain'
    },
    {
      id: 'drep',
      title: 'Dubai Real Estate Platform (DREP) - AI-Powered Property Management System',
      company: 'WorkHub',
      period: 'July 2022 - Present',
      category: 'Enterprise',
      status: 'Production',
      description: 'End-to-end development of a comprehensive real estate management platform serving Dubai\'s property market with intelligent automation and AI integration',
      scope: 'End-to-end development of a comprehensive real estate management platform serving Dubai\'s property market with intelligent automation and AI integration',
      technologies: [
        'FastAPI', 'SQLAlchemy ORM', 'PostgreSQL (pgvector)', 'OpenAI', 'Anthropic Claude',
        'React.js', 'WebSocket', 'AWS S3', 'SendGrid', 'Mailjet', 'JWT', 'bcrypt'
      ],
      keyFeatures: [
        'AI-Powered Property Management: Intelligent property categorization, automated description generation, and semantic search using OpenAI embeddings with PostgreSQL pgvector',
        'Advanced Lead Management System: Multi-source lead capture with automated scoring, qualification, and intelligent assignment to brokers with improved conversion rates',
        'AI-Driven PDF Processing: Anthropic Claude integration for automated project creation from property brochures, significantly reducing manual data entry',
        'Real-time Communication Hub: WebSocket-based messaging system with AI chatbot for property inquiries and lead qualification',
        'Multi-Tier Role Management: Six-level user hierarchy (Super Admin to User) with commission-based categorization and team management',
        'Financial Management Suite: Automated commission calculation, multi-currency payment processing, invoice generation, and audit trail',
        'Vector-Based Property Matching: Semantic similarity search for intelligent property recommendations using embeddings and vector operations',
        'Contract & LOI System: Digital Letter of Intent processing, automated contract generation, and document lifecycle management',
        'Marketing Campaign Automation: Email campaign management with SendGrid/Mailjet integration and performance analytics'
      ],
      technicalAchievements: [
        'Implemented FastAPI with async SQLAlchemy for high-performance database operations',
        'Built a scalable file processing system with AWS S3 integration and signed URLs for secure media access',
        'Created a comprehensive RBAC system with JWT authentication and bcrypt password security',
        'Developed AI-powered duplicate detection and contact preference management',
        'Integrated multiple email service providers with fallback mechanisms for reliable communication',
        'Built a real-time analytics dashboard with property view tracking and user activity monitoring'
      ],
      impact: 'Streamlined Dubai real estate operations, substantially reduced manual processing, improved lead conversion rates, and enabled efficient real-time property discovery for users',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Building2'
    },
    {
      id: 'memomind',
      title: 'MemoMind - WhatsApp Personal Memory Assistant',
      company: 'WorkHub',
      period: 'July 2022 - Present',
      category: 'AI/ML',
      status: 'Production',
      description: 'End-to-end development of an intelligent WhatsApp-based personal knowledge management system transforming natural conversation into semantic memory storage and retrieval',
      scope: 'End-to-end development of an intelligent WhatsApp-based personal knowledge management system transforming natural conversation into semantic memory storage and retrieval',
      technologies: [
        'Python', 'OpenAI GPT', 'OpenAI Whisper', 'Milvus', 'Twilio API', 'Stripe', 
        'Supabase', 'Redis', 'FastAPI'
      ],
      keyFeatures: [
        'AI-Powered Message Classification: Intelligent determination of storage vs. query intents using OpenAI GPT models with multi-step analysis and context consideration',
        'Semantic Memory System: Advanced vector storage using the Milvus database with OpenAI embeddings for meaning-based information retrieval',
        'WhatsApp Integration: Complete Twilio API integration for a native messaging experience with webhook handling and message delivery tracking',
        'Voice Processing Capabilities: OpenAI Whisper integration for voice message transcription and natural speech-to-text conversion',
        'Context-Aware Conversations: Intelligent conversation history management with follow-up question handling and contextual response generation',
        'Subscription Management System: Comprehensive Stripe integration with trial periods, recurring billing, and subscription lifecycle management',
        'User Data Isolation: Partition-based vector database architecture ensuring complete privacy and data separation between users',
        'Smart Response Generation: AI-powered summarization with conversation context and automatic message chunking for WhatsApp limits',
        'Caching Strategy: Redis-based performance optimization with configurable expiry and efficient data retrieval'
      ],
      technicalAchievements: [
        'Implemented sophisticated prompt engineering for accurate intent classification and contextual response generation',
        'Built scalable vector database architecture with IVF_FLAT indexing and L2 distance similarity search',
        'Created a comprehensive webhook validation system with cryptographic signature verification for security',
        'Developed an asynchronous processing pipeline handling concurrent message processing and AI model interactions',
        'Integrated multiple OpenAI models (GPT-4o-mini, GPT-o1, Whisper-1) with intelligent model selection based on task requirements',
        'Built a robust subscription system with Stripe webhooks, managing trial periods, billing cycles, and access control',
        'Implemented repository pattern with Supabase integration for scalable data management and user lifecycle tracking'
      ],
      impact: 'Transformed personal information management by enabling natural conversation-based knowledge storage, eliminating information silos, and providing instant semantic search capabilities for users',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Smartphone'
    },
    {
      id: 'competitor-search',
      title: 'Competitor Search API - AI-Powered Market Intelligence Platform',
      company: 'WorkHub',
      period: 'July 2022 - Present',
      category: 'Business Intelligence',
      status: 'Production',
      description: 'Full-stack development of sophisticated competitor analysis and market intelligence REST API platform leveraging AI for comprehensive business insights',
      scope: 'Full-stack development of sophisticated competitor analysis and market intelligence REST API platform leveraging AI for comprehensive business insights',
      technologies: [
        'FastAPI', 'Perplexity API', 'PostgreSQL', 'SQLAlchemy ORM', 'Stripe', 
        'BeautifulSoup', 'JWT', 'Mailjet'
      ],
      keyFeatures: [
        'AI-Powered Competitor Discovery: Perplexity API integration for intelligent competitor identification and comprehensive market analysis',
        'Multi-Dimensional Analysis Engine: Advanced analytics including SWOT analysis, market positioning, sentiment analysis, and pricing strategy evaluation',
        'Strategic Intelligence Tools: AI-generated sales pitch creation, competitor monitoring systems, and strategic roadmap planning capabilities',
        'Token-Based Usage System: Comprehensive credit management with Stripe payment integration and flexible pricing tiers for different analysis types',
        'Comprehensive Database Architecture: PostgreSQL with SQLAlchemy ORM managing users, competitors, products, analyses, and subscription data',
        'Authentication & Security: JWT-based token authentication with email verification, password reset, and role-based access control',
        'Web Scraping Integration: BeautifulSoup implementation for website analysis and competitor data extraction',
        'Historical Analytics: Analysis tracking system enabling longitudinal competitive intelligence and trend monitoring',
        'Demo Request System: Enterprise-grade demo management with diamond currency for premium features',
        'Custom Question Analysis: Natural language query system allowing users to ask specific questions about competitors'
      ],
      technicalAchievements: [
        'Built a scalable FastAPI architecture with async capabilities, handling concurrent analysis requests',
        'Implemented a comprehensive audit trail system tracking all user actions and token transactions',
        'Created a sophisticated pricing model with different token costs per analysis type (30 tokens for search, 20 for monitoring, 10 for custom questions)',
        'Developed secure payment processing with Stripe webhooks for automatic token allocation',
        'Integrated multiple email service providers (Mailjet) for transactional communications',
        'Built comprehensive API documentation with OpenAPI/Swagger and ReDoc',
        'Implemented database migrations with Alembic for schema versioning and updates',
        'Created a structured logging system for monitoring and debugging across application layers'
      ],
      impact: 'Transformed competitive intelligence workflows for businesses, enabling automated competitor discovery and analysis in minutes rather than days, serving startups, product managers, and sales teams with actionable market insights',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Search'
    },
    {
      id: 'api-edrak',
      title: 'API Edrak - Legal AI Research Platform',
      company: 'WorkHub',
      period: 'July 2022 - Present',
      category: 'Legal Tech',
      status: 'Production',
      description: 'Full-stack development of a specialized AI-powered legal research and advisory platform for legal professionals',
      scope: 'Full-stack development of a specialized AI-powered legal research and advisory platform for legal professionals',
      technologies: [
        'FastAPI', 'OpenAI GPT-4o', 'GPT-4', 'O1-preview', 'Claude 3 Opus', 
        'Meta LLaMA 3', 'Google Gemma2', 'Scrapy', 'OCR', 'Moyasar', 'PostgreSQL'
      ],
      keyFeatures: [
        'Multi-Model Legal AI Integration: Comprehensive LLM support including GPT-4o, GPT-4, O1-preview, Claude 3 Opus, Meta LLaMA 3, and Google Gemma2 for legal analysis',
        'Court Verdict Analysis Engine: Specialized processing of judicial decisions, court verdicts, and legal case files with automated precedent extraction',
        'Legal Document Intelligence: Advanced document processing for PDFs, HTML legal texts, and scanned court papers using OCR and specialized legal content extraction',
        'OpenAI Assistants API Integration: Thread-based conversation management for persistent legal consultations and complex case analysis',
        'Legal Web Crawling System: Scrapy-based recursive crawling of legal databases, court websites, and case law repositories with domain-restricted access',
        'Semantic Legal Search: A Vector embedding system for intelligent legal document search and precedent discovery',
        'Legal Research Automation: Natural language query system against legal document repositories with source attribution',
        'Subscription & Billing System: Moyasar payment integration with token-based usage tracking and flexible subscription tiers for law firms',
        'Legal Document Classification: Automated categorization and metadata extraction for legal content types'
      ],
      technicalAchievements: [
        'Implemented specialized legal document processing pipeline with intelligent text extraction optimized for legal terminology',
        'Built a duplicate prevention system using SHA256 hashing for legal content processing',
        'Created secure file management with encrypted storage and signed URL generation for sensitive legal documents',
        'Developed a comprehensive audit trail system for legal document access and modifications',
        'Integrated multiple AI models with custom prompt engineering specifically tuned for legal analysis'
      ],
      impact: 'Transformed legal research workflows, enabling instant access to case law and precedents, significantly reducing legal research time for law firms',
      image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Scale'
    },

    // Coeus Solutions Projects (Feb 2022 - July 2022)
    {
      id: 'workhub-connect',
      title: 'WorkHub Connect - Enterprise Communication Platform',
      company: 'Coeus Solutions',
      period: 'February 2022 - July 2022',
      category: 'Enterprise Communication',
      status: 'Production',
      description: 'Full-stack development of a comprehensive business communication solution',
      scope: 'Full-stack development of a comprehensive business communication solution',
      technologies: [
        'React.js', 'PHP Symfony', 'MySQL', 'Redis', 'AWS Chime', 'AWS S3', 'AWS SQS',
        'Socket Cluster', 'Okta', 'Twilio', 'YouSign', 'Clearbit', 'Chargebee'
      ],
      keyFeatures: [
        'AWS Chime Integration: Implemented voice/video calling with call recording, supporting one-to-one and group calls with up to 50+ participants',
        'Call Management System: Built a call logs dashboard with detailed analytics, duration tracking, and recording playback functionality',
        'User Activity Dashboard: Real-time monitoring showing online/offline status, in-call indicators, and availability settings for enhanced team visibility',
        'Real-time Messaging: Socket Cluster-powered chat system with direct messaging and group channels, file sharing, and message history',
        'Media Management: S3-integrated media library allowing users to upload, share, and organize files with proper access controls',
        'Digital Document Signing: YouSign API integration enables secure document execution and sharing workflows',
        'User Presence Tracking: Live status updates and activity indicators for improved team coordination'
      ],
      technicalAchievements: [
        'Handled concurrent users across multiple communication channels',
        'Optimized real-time data synchronization with minimal latency',
        'Built a responsive UI handling complex state management for calls and messaging'
      ],
      impact: 'Enabled seamless remote collaboration with enterprise-grade security and reliability',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'MessageSquare'
    },
    {
      id: 'workhub-admin',
      title: 'WorkHub Admin - Multi-tenant Management Platform',
      company: 'Coeus Solutions',
      period: 'February 2022 - July 2022',
      category: 'Enterprise Management',
      status: 'Production',
      description: 'Development of a centralized administration system serving as the parent application for the entire WorkHub ecosystem',
      scope: 'Development of a centralized administration system serving as the parent application for the entire WorkHub ecosystem',
      technologies: [
        'React.js', 'PHP Symfony', 'MySQL', 'Redis', 'AWS SQS', 'Okta', 'Twilio',
        'Clearbit API', 'Chargebee'
      ],
      keyFeatures: [
        'Enterprise Onboarding System: Complete user registration workflow with email verification and OTP-based authentication via Twilio',
        'Okta SSO Integration: Social login implementation supporting multiple identity providers with seamless single sign-on across all WorkHub applications',
        'SQS Queue Management: Automated user provisioning system using AWS SQS for reliable cross-application user creation and synchronization',
        'Company Management Portal: Multi-tenant architecture supporting company creation, domain verification via Clearbit API, and custom branding',
        'User & Company Administration: Comprehensive dashboard for managing users, permissions, company settings, and access controls',
        'Billing Integration: Chargebee integration for subscription management, billing, and payment processing',
        'Domain Management: Custom domain setup and verification system for white-label deployments'
      ],
      technicalAchievements: [
        'Built a scalable multi-tenant architecture supporting hundreds of companies',
        'Implemented secure authentication flow with multiple verification methods',
        'Created an efficient queue-based system for cross-application data synchronization'
      ],
      impact: 'Streamlined enterprise onboarding and reduced setup time',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Settings'
    },
    {
      id: 'workhub-scheduling',
      title: 'WorkHub Scheduling - Multi-Calendar Management System',
      company: 'Coeus Solutions',
      period: 'February 2022 - July 2022',
      category: 'Productivity',
      status: 'Production',
      description: 'Development of an intelligent meeting scheduling and calendar synchronization platform',
      scope: 'Development of an intelligent meeting scheduling and calendar synchronization platform',
      technologies: [
        'React.js', 'PHP Symfony', 'MySQL', 'Redis', 'Cronofy API'
      ],
      keyFeatures: [
        'Multi-Calendar Integration: Seamless synchronization with multiple calendar providers (Google Calendar, Outlook, Exchange) via the Cronofy API',
        'Smart Meeting Scheduling: Intelligent conflict detection and resolution with automated meeting booking across different time zones',
        'Interactive Calendar UI: Responsive calendar interface with drag-and-drop functionality for easy meeting management',
        'Automated Notifications: Meeting reminders and updates sent via integrated notification system',
        'Agenda Management: Comprehensive agenda viewer with meeting details, participant lists, and document attachments',
        'Time Zone Handling: Global time zone support for distributed teams with automatic conversion',
        'Meeting Analytics: Detailed reporting on meeting patterns, duration, and participant engagement'
      ],
      technicalAchievements: [
        'Complex API integration handling multiple calendar providers with different data formats',
        'Real-time calendar synchronization ensures data consistency across platforms',
        'Advanced date/time manipulation algorithms for conflict resolution',
        'Efficient caching strategy using Redis for improved performance'
      ],
      impact: 'Eliminated back-and-forth email coordination for meeting setup',
      image: 'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Calendar'
    },

    // Bravinn Technologies Projects (Aug 2020 - Jan 2022)
    {
      id: 'animatricks',
      title: 'Animatricks - Animation & Video Creation Platform',
      company: 'Bravinn Technologies',
      period: 'August 2020 - January 2022',
      category: 'Creative Tools',
      status: 'Production',
      description: 'Full-stack development of cloud-based video creation software',
      scope: 'Full-stack development of cloud-based video creation software',
      technologies: [
        'React.js', 'ASP.NET Core', 'Dapper', 'Node.js', 'MSSQL', 'JavaScript'
      ],
      keyFeatures: [
        'Multi-scene animation capabilities',
        'Custom shape/image integration',
        'Audio/video clip management',
        'Real-time preview functionality',
        'Multi-FPS video export'
      ],
      impact: 'Enabled non-technical users to create professional-quality promotional videos',
      image: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Film'
    },
    {
      id: 'logo-builder',
      title: 'Logo Builder App - Graphic Design Tool',
      company: 'Bravinn Technologies',
      period: 'August 2020 - January 2022',
      category: 'Design Tools',
      status: 'Production',
      description: 'Cloud-based logo creation platform with advanced design capabilities',
      scope: 'Cloud-based logo creation platform with advanced design capabilities',
      technologies: [
        'JavaScript', 'ASP.NET Framework', 'Entity Framework', 'MSSQL'
      ],
      keyFeatures: [
        'Custom shape library',
        'Text manipulation tools',
        'User upload functionality',
        'Real-time editing capabilities',
        'Export functionality'
      ],
      impact: 'Streamlined logo creation process for small businesses and freelancers',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Palette'
    },
    {
      id: 'academinator',
      title: 'Academinator - School Management System',
      company: 'Bravinn Technologies',
      period: 'August 2020 - January 2022',
      category: 'Education',
      status: 'Production',
      description: 'Comprehensive educational platform with multiple integrated modules',
      scope: 'Comprehensive educational platform with multiple integrated modules',
      technologies: [
        'ASP.NET Framework', 'Entity Framework', 'JavaScript', 'MSSQL'
      ],
      keyFeatures: [
        'Attendance management system',
        'Lecture upload functionality',
        'Testing system with automated grading',
        'Curriculum tracking',
        'Teacher administration panel'
      ],
      impact: 'Digitized school operations and improved administrative efficiency',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'GraduationCap'
    },
    {
      id: 'mockup-app',
      title: 'MockUp App - Design Mockup Tool',
      company: 'Bravinn Technologies',
      period: 'August 2020 - January 2022',
      category: 'Design Tools',
      status: 'Production',
      description: 'Cloud-based application for creating product mockups',
      scope: 'Cloud-based application for creating product mockups',
      technologies: [
        'JavaScript', 'ASP.NET Framework', 'Entity Framework'
      ],
      keyFeatures: [
        'Template library with various mockup options',
        'Customization tools for branding',
        'Export options in multiple formats'
      ],
      impact: 'Simplified mockup creation for design professionals',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Monitor'
    },

    // Personal Projects
    {
      id: 'kamlink',
      title: 'KAMLINK - Healthcare Management Platform',
      company: 'Personal Project',
      period: 'Personal Project',
      category: 'Healthcare',
      status: 'Personal Project',
      description: 'Comprehensive healthcare management platform with multi-organization support, facility management, medical staff coordination, and patient care tracking',
      scope: 'Comprehensive healthcare management platform addressing fragmented systems, manual processes, and coordination challenges in healthcare organizations',
      technologies: [
        'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize ORM', 'Socket.IO', 
        'React.js', 'JWT Authentication', 'Docker', 'Stripe'
      ],
      keyFeatures: [
        'Comprehensive Healthcare Management: Multi-organization support with facility management, medical staff coordination, and patient care tracking',
        'Real-time Communication: WebSocket-based notifications and live updates across healthcare facilities',
        'Financial Operations: Expense tracking, insurance management, payment processing with Stripe integration',
        'Role-based Access Control: Hierarchical user management (CEO, Corporate, Manager, Facility users) with granular permissions',
        'Patient Care Workflow: Complete intake management, discharge planning, census tracking, and AMA processing',
        'Business Intelligence: Market intelligence, performance analytics, and comprehensive reporting',
        'Contract Management: Service agreements, admission criteria, and compliance tracking'
      ],
      impact: 'Unified healthcare management platform addressing fragmented systems, manual processes, and coordination challenges in healthcare organizations',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Stethoscope'
    },
    {
      id: 'screen-recording',
      title: 'Screen Recording Chrome Extension',
      company: 'Personal Project',
      period: 'Personal Project',
      category: 'Productivity Tools',
      status: 'Personal Project',
      description: 'Chrome extension with multi-source recording capabilities',
      scope: 'Chrome extension for content creators and professionals',
      technologies: [
        'JavaScript', 'Chrome Extension APIs', 'WebRTC'
      ],
      keyFeatures: [
        'Multi-source recording capabilities (screen, microphone, camera)',
        'Real-time media processing',
        'User-friendly interface'
      ],
      impact: 'Streamlined content creation workflow with seamless recording functionality',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Video'
    },
    {
      id: 'car-booking',
      title: 'Car Booking Management Platform',
      company: 'Personal Project',
      period: 'Personal Project',
      category: 'Booking Systems',
      status: 'Personal Project',
      description: 'Full-stack web application with responsive dashboard for automotive rental services',
      scope: 'Comprehensive solution for automotive rental services with role-based access control',
      technologies: [
        'React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 
        'Stripe', 'Tailwind CSS', 'Socket.IO', 'Mongoose ODM'
      ],
      keyFeatures: [
        'Multi-category vehicle selection with advanced search and filtering',
        'Dynamic pricing system based on demand, season, and vehicle type',
        'Advanced filtering options by location, price, vehicle features, and availability',
        'Dual-interface design with separate admin dashboard and user portal',
        'Real-time booking management system with availability tracking',
        'Payment processing integration with multiple payment methods',
        'User authentication and profile management',
        'Booking history and analytics dashboard'
      ],
      impact: 'Comprehensive solution for automotive rental services with role-based access control',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Car'
    },
    {
      id: 'property-auction',
      title: 'Property Management & Auction System',
      company: 'Personal Project',
      period: 'Personal Project',
      category: 'Real Estate',
      status: 'Personal Project',
      description: 'Full-stack web application with real-time capabilities for property management and auctions',
      scope: 'Complete real estate management solution with automated auction processes',
      technologies: [
        'React.js', 'Redux', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize ORM',
        'Socket.IO', 'JWT Authentication', 'Stripe', 'Material-UI', 'AWS S3'
      ],
      keyFeatures: [
        'Comprehensive property listing management with multimedia support',
        'Real-time auction functionality with live bidding updates',
        'Advanced category-based filtering and search capabilities',
        'Dynamic price range selection with market analysis',
        'Dual-role interface with separate admin and user dashboards',
        'Real-time bidding system with automatic bid notifications',
        'Property image gallery and virtual tour integration',
        'Automated auction scheduling and countdown timers',
        'User verification and bidding history tracking',
        'Payment processing and escrow management'
      ],
      impact: 'Complete real estate management solution with automated auction processes',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: 'Home'
    }
  ];
};

// Helper function to get project by ID
export const getProjectById = (id: string): ProjectData | undefined => {
  return getAllProjects().find(project => project.id === id);
};

// Helper function to get projects by company
export const getProjectsByCompany = (company: string): ProjectData[] => {
  return getAllProjects().filter(project => project.company === company);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): ProjectData[] => {
  return getAllProjects().filter(project => project.category === category);
}; 