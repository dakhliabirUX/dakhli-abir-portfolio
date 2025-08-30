import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'Figma/Adobe XD', level: 98 },
    { name: 'UI/UX Design', level: 95 },
    { name: 'Prototyping', level: 92 },
    { name: 'User Research', level: 88 },
    { name: 'Webflow/Framer', level: 90 },
    { name: 'Motion Design', level: 85 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            const textElements = entry.target.querySelectorAll('.animate-on-scroll');
            
            textElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 100);
            });

            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                const level = bar.getAttribute('data-level');
                (bar as HTMLElement).style.width = `${level}%`;
              }, 500 + index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={skillsRef}
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="animate-on-scroll opacity-0 translate-y-8 text-orange-500 font-medium mb-4 tracking-wide uppercase">
            Skills & Tools
          </p>
          <h2 className="animate-on-scroll opacity-0 translate-y-8 text-4xl md:text-5xl font-bold text-white mb-4">
            Design Tools & Expertise
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-8 text-xl text-gray-400 max-w-2xl mx-auto">
            The creative tools and methodologies I use to craft exceptional user experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="animate-on-scroll opacity-0 translate-y-8">
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="progress-bar h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                  data-level={skill.level}
                  style={{ width: '0%' }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '150+', label: 'Designs Created' },
            { number: '5+', label: 'Years Experience' },
            { number: '50+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="animate-on-scroll opacity-0 translate-y-8">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;