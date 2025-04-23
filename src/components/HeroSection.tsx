
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('service-categories');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-hubilo-lightOrange py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl text-hubilo-black md:text-5xl font-bold mb-6 leading-tight ">
              Find Expert Webinar Services <span className="text-webinar-darkOrange">All in One Place</span>
            </h1>
            <p className="text-lg text-hubilo-black text-black-600 mb-8 max-w-lg">
              Connect with top-rated webinar professionals to help you plan, produce, and perfect your next online event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-webinar-darkOrange hover:bg-webinar-darkOrange/90 text-white px-8 py-6"
                onClick={scrollToServices}
              >
                Browse Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Computer screen showing Hubilo webinar interface" 
              className="rounded-lg shadow-2xl max-w-full lg:max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
