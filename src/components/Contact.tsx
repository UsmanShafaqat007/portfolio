import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Linkedin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: -30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            },
          }
        );
      }

      // Animate contact info
      if (contactInfoRef.current) {
        gsap.fromTo(
          contactInfoRef.current,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
          }
        );
      }

      // Animate form
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.4,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const payload = {
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        redirect: 'false',
        from_name: 'Portfolio Contact Form',
        replyto: formData.email
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
    } finally {
      setSubmitStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: 'idle', message: '' });
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'm.usmanshafaqat@gmail.com',
      link: 'mailto:m.usmanshafaqat@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+92 322 4712479',
      link: 'tel:+923224712479',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Lahore, Pakistan',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohammad-usman-b02923165/',
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: 'WhatsApp',
      url: 'https://wa.me/923224712479',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8 opacity-100">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                and ways to leverage technology for business growth. Whether you're looking 
                for AI solutions, full-stack development, or technical consultation, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-300 group"
                >
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(social.url, '_blank', 'noopener,noreferrer');
                    }}
                    className="p-3 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 group"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="opacity-100">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or how I can help..."
                ></textarea>
              </div>

              {/* Status Message */}
              {submitStatus.type !== 'idle' && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : submitStatus.type === 'error'
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}>
                  {submitStatus.type === 'success' && <CheckCircle className="w-5 h-5" />}
                  {submitStatus.type === 'error' && <AlertCircle className="w-5 h-5" />}
                  {submitStatus.type === 'loading' && (
                    <div className="w-5 h-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitStatus.type === 'loading'}
                className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
                  submitStatus.type === 'loading'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
                } text-white`}
              >
                {submitStatus.type === 'loading' ? (
                  <>
                    <div className="w-5 h-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;