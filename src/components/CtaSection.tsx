
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 bg-hubilo-darkOrange text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Next Webinar?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Connect with expert service providers today and transform your online events into memorable, professional experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-hubilo-darkOrange hover:bg-white/90 px-8 py-6">
            Find Services <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          {/*<Button variant="outline" asChild className="border-white text-white hover:bg-white/20 px-8 py-6">
            <Link to="/become-provider">Become a Provider</Link>
          </Button>*/}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
