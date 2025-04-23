
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceCategoriesSection from '@/components/ServiceCategoriesSection';
import FeaturedProvidersSection from '@/components/FeaturedProvidersSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FaqSection from '@/components/FaqSection'
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <meta 
          name="title" 
          content="Hubilo Services Hub | Find Expert Webinar Services" 
        />
        <meta 
          name="description" 
          content="Connect with top-rated webinar professionals to help you plan, produce, and perfect your next online event. Discover webinar services all in one place." 
        />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        {/*<section id="service-categories">
          <ServiceCategoriesSection />
        </section>*/}
        <FeaturedProvidersSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
