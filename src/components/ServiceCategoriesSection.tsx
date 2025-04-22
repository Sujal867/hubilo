
import React from 'react';
import ServiceCategory from './ServiceCategory';
import { Video, Book, Code, Users, MessageSquare, Palette } from 'lucide-react';

const ServiceCategoriesSection = () => {
  return (
    <section className="py-16 bg-webinar-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Service Providers in Hubilo Square</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of professional webinar services to enhance your virtual events
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCategory 
            title="Webinar Production" 
            description="Full-service production support including tech setup, live direction, and editing."
            icon={<Video className="text-webinar-purple h-6 w-6" />}
            badgeText="Popular"
          />
          
          <ServiceCategory 
            title="Content Creation" 
            description="Engaging presentation design, scripts, and materials for your webinar."
            icon={<Book className="text-webinar-purple h-6 w-6" />}
          />
          
          <ServiceCategory 
            title="Technical Support" 
            description="Platform setup, testing, and live technical troubleshooting during your event."
            icon={<Code className="text-webinar-purple h-6 w-6" />}
          />
          
          <ServiceCategory 
            title="Audience Engagement" 
            description="Strategies and tools to boost interaction and participation during webinars."
            icon={<Users className="text-webinar-purple h-6 w-6" />}
          />
          
          <ServiceCategory 
            title="Coaching & Consulting" 
            description="Expert guidance on presentation skills, content strategy, and webinar optimization."
            icon={<MessageSquare className="text-webinar-purple h-6 w-6" />}
          />
          
          <ServiceCategory 
            title="Visual Design" 
            description="Custom graphics, slides, and visual elements to elevate your webinar's appearance."
            icon={<Palette className="text-webinar-purple h-6 w-6" />}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceCategoriesSection;
