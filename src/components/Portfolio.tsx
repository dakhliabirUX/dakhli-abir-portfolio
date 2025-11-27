import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const portfolioRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'Amen Bank Mobile App',
      description: 'Mobile App for Amen Bank Costumers,Modern banking interface focused on security, accessibility, and user trust',
      image: 'https://b2b.tn/files/2019/03/AMEN-BANK-lance-une-solution-de-MOBILE-PAYEMENT-en-partenariat-avec-l%E2%80%99%C3%A9cole-ESPRIT.jpg',
      tags: ['Mobile Design', 'UI/UX', 'Prototyping', 'User Research'],
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      title: 'Rentex',
      description: 'mobile application for car rental agency',
      image: 'https://i.ibb.co/FLpPxNwq/rentex001.png',
      tags: ['Dashboard Design', 'Data Viz', 'Figma', 'Design System'],
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      title: 'Beekeeper tech',
      description: 'All-in-One Hive Management App for Modern Beekeeping',
      image: 'https://static.wixstatic.com/media/d8a8ba_eaf31eac4a3c49e99ac50ce2d30f4220~mv2.png/v1/fill/w_645,h_687,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Enda%20X%20beekeeper%20tech.png',
      tags: ['Mobile Banking', 'Security UX', 'Accessibility', 'User Testing'],
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      title: 'Tamam-Zain',
      description: ' Microfinance BNPL',
      image: 'https://tamam.life/Assets/ContentPhotos/Photos/bodyimage1_112040.jpg',
      tags: ['UX/UI', 'Brand Design', 'User Research', 'User Testing'],
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      title: 'Petsigo',
      description: 'Providing digital pet health insurance.',
      image: 'https://cdn1.vc4a.com/media/2023/07/333562541_987330092254411_956454218500713593_n-900x322.png',
      tags: ['Brand Design', 'Logo Design', 'Typography', 'Style Guide'],
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      title: 'MaxIt Orange Operator',
      description: ' Telecommunications',
      image: 'https://cdn6.aptoide.com/imgs/f/c/1/fc127532ce417a938f1b31661003ffe4_fgraphic.png',
      tags: ['UX/UI', 'Brand Design', 'User Research', 'User Testing'],
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      title: 'WeCode Land',
      description: 'Designing website',
      image: 'https://kapitalis.com/tunisie/wp-content/uploads/2017/04/WeCode-Youth-Decides.jpg',
      tags: ['UX/UI', 'Brand Design', 'User Research', 'User Testing'],
      liveUrl: '#',
      caseStudyUrl: '#'
    },
    {
      title: 'Carrefour',
      description: 'E-Shop App',
      image: 'https://www.retaildetail.be/wp-content/uploads/2022/04/newappcarrefour.jpg',
      tags: ['UX/UI', 'Brand Design', 'User Research', 'User Testing'],
      liveUrl: '#',
      caseStudyUrl: '#'
    },

    
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
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="portfolio" 
      ref={portfolioRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="animate-on-scroll opacity-0 translate-y-8 text-orange-500 font-medium mb-4 tracking-wide uppercase">
            Portfolio
          </p>
          <h2 className="animate-on-scroll opacity-0 translate-y-8 text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Design Projects
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-8 text-xl text-gray-600 max-w-2xl mx-auto">
            A curated selection of my recent design work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="animate-on-scroll opacity-0 translate-y-8 group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:transform hover:scale-105 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg font-medium hover:bg-white transition-colors duration-200">
                    View Project
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors duration-200 font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Project
                  </a>
                  <a 
                    href={project.caseStudyUrl}
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 font-medium"
                  >
                    <ExternalLink size={16} />
                    Case Study
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
