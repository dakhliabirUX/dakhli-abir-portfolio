import React, { useEffect, useRef } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 pt-24"
    >
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="opacity-0 translate-y-8 transition-all duration-1000 delay-200 hero-content">
          {/* Profile Photo */}
          <div className="mb-8 relative">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full animate-pulse"></div>
              <img 
                src="https://scontent.ftun20-1.fna.fbcdn.net/v/t39.30808-6/494304558_2087652675085623_8592835193085271597_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=vX0QkwCwqjQQ7kNvwHOjRck&_nc_oc=AdmN4J-g1bUNwHbjWnFEiKSt-C8blV1wQWF_hwF6OUECMrw3767PuEJsJ6JkybUTH6Q&_nc_zt=23&_nc_ht=scontent.ftun20-1.fna&_nc_gid=zn7OYV08n8-O5ezDGEvBww&oh=00_AfhgNI1bwocvVQ23qbT6lBX_LVaxJZGRbnqQY5w8etD2Xw&oe=692D5161" 
                alt="Designer Profile"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10 animate-float"
              />
            </div>
            <div className="absolute top-4 left-0 right-0">
  <div className="max-w-7xl mx-auto px-6 flex justify-end">
    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce-slow">
      Available for Freelance
    </div>
  </div>
</div>
          </div>

          
          <div className="mb-6">
            <p className="text-lg text-gray-600 mb-2">Hello, I'm Dakhli Abir</p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Product Designer and UX/UI Specialist Passionate
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              About Blending Aesthetics
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              with Functionality
            </h3>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            I create intuitive and visually stunning digital experiences that seamlessly blend beautiful aesthetics with powerful functionality, ensuring every design tells a story and serves a purpose.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Hire Me For Freelance
              <ArrowUpRight size={20} />
            </button>
          </div>
          
          <div className="mt-12">
            <button
              onClick={() => document.getElementById('whatido')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-800 rounded-full font-medium transition-all duration-300 hover:bg-green-200"
            >
              Scroll to View Projects
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      <button 
        onClick={() => document.getElementById('whatido')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
