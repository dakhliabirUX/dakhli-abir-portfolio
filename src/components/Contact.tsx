import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact" 
      ref={contactRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="animate-on-scroll opacity-0 translate-y-8 text-orange-500 font-medium mb-4 tracking-wide uppercase">
            Contact
          </p>
          <h2 className="animate-on-scroll opacity-0 translate-y-8 text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Create Something Amazing
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-8 text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next design project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h3 className="animate-on-scroll opacity-0 translate-y-8 text-2xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email', detail: 'abir.adux@gmail.com' },
                { icon: Phone, title: 'Phone', detail: '+216 25 626 204' },
                { icon: MapPin, title: 'Location', detail: 'Tunisia, Tunis' }
              ].map((contact, index) => (
                <div 
                  key={index}
                  className="animate-on-scroll opacity-0 translate-y-8 flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium">{contact.title}</div>
                    <div className="text-gray-600">{contact.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-8">
              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                required
              />
            </div>
            
            <button 
              type="submit"
              className="animate-on-scroll opacity-0 translate-y-8 w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;