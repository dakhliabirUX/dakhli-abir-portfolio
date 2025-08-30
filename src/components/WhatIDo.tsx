import React, { useEffect, useRef } from 'react';
import { Monitor, Smile, Code, Play, Box, Palette, Search, Workflow,CircleUser,Frame,SendToBack } from 'lucide-react';


const WhatIDo: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Monitor,
      title: 'Interactive Design',
      description: 'Creating engaging and responsive digital experiences by focusing on how users interact with products, ensuring intuitive controls, smooth feedback, and meaningful engagement.',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Smile,
      title: 'UI/UX Design',
      description: 'Creating visually stunning and user-friendly designs that prioritize usability, accessibility, and delightful interactions to enhance the user journey.',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: Search,
      title: 'UX Research',
      description: 'Uncovering user needs and behaviors through interviews, testing, and data analysis to create evidence-based insights that guide design decisions and ensure meaningful, user-centered experiences.',
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      icon: Play,
      title: 'Motion & Interaction Design',
      description: 'Crafting dynamic animations and interactive elements that bring interfaces to life, making experiences more engaging, intuitive, and enjoyable for users.',
      gradient: 'from-orange-400 to-red-400'
    },
    {
      icon: Workflow,
      title: 'User Flow',
      description: 'Designing clear and intuitive pathways that guide users seamlessly through a product, ensuring smooth navigation, reduced friction, and an engaging overall experience.',
      gradient: 'from-indigo-400 to-purple-400'
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Building cohesive visual and emotional identities that reflect a brand’s values, voice, and personality, ensuring consistency across all touchpoints to create lasting impressions.',
      gradient: 'from-pink-400 to-rose-400'
    },
    {
      icon: CircleUser,
      title: 'Persona',
      description: 'Developing detailed user profiles that represent target audiences, helping to align design decisions with real user goals, motivations, and challenges.',
      gradient: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Frame,
      title: 'Wireframe',
      description: 'Structuring clear and functional layouts that outline content and navigation, providing a blueprint for intuitive and user-focused design.',
      gradient: 'from-yellow-700 to-amber-800'
    },
    {
      icon: SendToBack,
      title: 'Design System',
      description: 'Creating a unified set of design guidelines, reusable components, and standards to ensure consistency, scalability, and efficiency across all digital products.',
      gradient: 'from-slate-400 to-gray-600'
    }
  ];

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="whatido" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="animate-on-scroll opacity-0 translate-y-8 text-orange-500 font-medium mb-4 tracking-wide uppercase">
            What I Do
          </p>
          <h2 className="animate-on-scroll opacity-0 translate-y-8 text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Transforming Ideas Into
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Visual Masterpieces
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '150+', label: 'Projects Designed' },
            { number: '5+', label: 'Years Experience' },
            { number: '50+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="animate-on-scroll opacity-0 translate-y-8">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;