
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageCircle, CalendarCheck, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div id='how-it-works' className="py-4 md:py-16 flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-webinar-darkOrange">How It Works</h1>
            <p className="text-xl mb-4 text-hubilo-black md:text-2xl text-black-700 max-w-3xl mx-auto">
              Connecting with expert webinar service providers has never been easier. 
              Our streamlined process ensures you find the right partner for your virtual events.
            </p>
          </div>
        </section>
        
        {/* Process Section */}
        <section  className="bg-hubilo-lightOrange py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-webinar-darkOrange" />
                </div>
                <h3 className="text-xl text-hubilo-black font-semibold mb-4">1. Browse Services</h3>
                <p className="text-hubilo-black">
                  Explore our marketplace to discover a wide range of professional webinar services across various categories.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <MessageCircle className="h-16 w-16 text-webinar-darkOrange" />
                </div>
                <h3 className="text-xl text-hubilo-black font-semibold mb-4">2. Express Interest</h3>
                <p className="text-hubilo-black">
                  Found a service provider that interests you? Simply express interest in learning more through our platform.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <CalendarCheck className="h-16 w-16 text-webinar-darkOrange" />
                </div>
                <h3 className="text-xl text-hubilo-black font-semibold mb-4">3. Hubilo Connects You</h3>
                <p className="text-hubilo-black">
                  Hubilo will promptly connect you with the service provider to discuss your specific requirements and expectations.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <Handshake className="h-16 w-16 text-webinar-darkOrange" />
                </div>
                <h3 className="text-xl text-hubilo-black font-semibold mb-4">4. Collaboration Begins</h3>
                <p className="text-hubilo-black">
                  Once you've found the right match, start collaborating with your chosen provider to create exceptional webinar experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      

    </div>
  );
};

export default HowItWorks;
