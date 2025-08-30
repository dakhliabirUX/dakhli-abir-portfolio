import React, { useEffect, useRef } from 'react';
import { Palette, Eye, Users, Award, Coffee, Heart } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);

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
      { threshold: 0.2 }
    );

    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="animate-on-scroll opacity-0 translate-y-8 text-orange-500 font-medium mb-4 tracking-wide uppercase">
              About Me
            </p>
            <h2 className="animate-on-scroll opacity-0 translate-y-8 text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Passionate Designer with a Vision for Excellence
            </h2>
            
            <p className="animate-on-scroll opacity-0 translate-y-8 text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate UX/UI designer with over 5 years of experience creating digital experiences 
              that captivate and convert. I believe great design is invisible - it guides users effortlessly 
              toward their goals while creating emotional connections with brands.
            </p>
            
            <p className="animate-on-scroll opacity-0 translate-y-8 text-lg text-gray-600 mb-8 leading-relaxed">
              My approach combines user research, creative problem-solving, and attention to detail 
              to deliver designs that not only look beautiful but also drive business results and 
              enhance user satisfaction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Palette, title: 'Creative Vision', desc: 'Transforming complex ideas into elegant visual solutions' },
                { icon: Eye, title: 'User-Centered', desc: 'Designing with empathy and deep user understanding' },
                { icon: Users, title: 'Collaborative', desc: 'Working closely with teams to achieve shared goals' },
                { icon: Award, title: 'Award-Winning', desc: 'Recognized for excellence in design and innovation' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-8 flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-8 mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-600">
                <Coffee className="w-5 h-5 text-orange-500" />
                <span>Fueled by coffee</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Heart className="w-5 h-5 text-red-500" />
                <span>Passionate about design</span>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-x-8">
            <div className="relative max-w-md mx-auto">
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="absolute -top-16 -right-12 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl opacity-80"></div>
                <div className="absolute -bottom-16 -left-12 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl opacity-60"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Philosophy</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "Great design is not just about making things look pretty - it's about solving problems, 
                    creating connections, and making the complex simple."
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">User-first approach</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Iterative design process</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Data-driven decisions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;