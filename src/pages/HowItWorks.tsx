
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageCircle, CalendarCheck, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-webinar-purple/10 to-webinar-blue/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-webinar-purple">How It Works</h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Connecting with expert webinar service providers has never been easier. 
              Our streamlined process ensures you find the right partner for your virtual events.
            </p>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-webinar-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">1. Browse Services</h3>
                <p className="text-gray-600">
                  Explore our marketplace to discover a wide range of professional webinar services across various categories.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <MessageCircle className="h-16 w-16 text-webinar-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">2. Express Interest</h3>
                <p className="text-gray-600">
                  Found a service provider that interests you? Simply express interest in learning more through our platform.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <CalendarCheck className="h-16 w-16 text-webinar-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">3. Hubilo Connects You</h3>
                <p className="text-gray-600">
                  Hubilo will promptly connect you with the service provider to discuss your specific requirements and expectations.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <Handshake className="h-16 w-16 text-webinar-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">4. Collaboration Begins</h3>
                <p className="text-gray-600">
                  Once you've found the right match, start collaborating with your chosen provider to create exceptional webinar experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Detailed Explanation */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-webinar-purple">Our Connection Process</h2>
            <div className="max-w-4xl mx-auto prose lg:prose-xl">
              <p>
                At Hubilo Services Marketplace, we understand that finding the right service provider for your webinar needs is crucial to your event's success. That's why we've designed a simple yet effective process to connect you with top professionals in the industry.
              </p>
              <h3>Discover Quality Service Providers</h3>
              <p>
                Our marketplace features a curated selection of vetted webinar service providers across multiple categories, including production, technical support, content creation, coaching, and audience engagement. Each provider's profile showcases their expertise, portfolio, and client testimonials to help you make informed decisions.
              </p>
              <h3>Express Interest with Confidence</h3>
              <p>
                When you find a service provider that interests you, simply express interest in learning more by clicking the "Contact Provider" button on their profile. You'll be prompted to share basic information about your webinar needs to help the provider understand your requirements.
              </p>
              <h3>Hubilo's Personalized Connection</h3>
              <p>
                Once you've expressed interest, Hubilo takes an active role in facilitating the connection. Our team will promptly reach out to the service provider and share your inquiry. We handle the initial introduction, ensuring that your needs are clearly communicated to the provider.
              </p>
              <h3>Direct Communication and Collaboration</h3>
              <p>
                Within 24-48 hours, we'll connect you directly with the service provider through your preferred communication channel. From there, you can discuss specific details, pricing, timelines, and any other aspects of your webinar project. Hubilo remains available to support the conversation if needed, but we encourage direct communication to establish a strong working relationship.
              </p>
              <h3>Successful Partnership</h3>
              <p>
                After initial discussions, you can decide whether to proceed with the service provider. If it's a match, you'll work directly with them to finalize terms and begin your collaboration. If not, you're welcome to explore other providers in our marketplace until you find the perfect fit.
              </p>
              <div className="mt-10 text-center">
                <Link to="/categories">
                  <Button className="bg-webinar-purple hover:bg-webinar-purple/90 text-white px-8 py-6 text-lg">
                    Browse Service Providers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-webinar-purple">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Is there a fee to connect with service providers?</h3>
                <p className="text-gray-600">
                  No, connecting with service providers through our marketplace is completely free. You only pay for the services you agree to purchase directly from the provider.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">How quickly will I hear back after expressing interest?</h3>
                <p className="text-gray-600">
                  Hubilo typically facilitates connections within 24-48 hours after you express interest in a service provider.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Can I connect with multiple service providers?</h3>
                <p className="text-gray-600">
                  Absolutely! You're welcome to express interest in multiple providers to find the best match for your specific webinar needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Does Hubilo guarantee the quality of service providers?</h3>
                <p className="text-gray-600">
                  While we carefully vet all providers on our marketplace, the final agreement is between you and the service provider. We recommend reviewing their portfolio, testimonials, and having detailed discussions before finalizing any arrangements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
