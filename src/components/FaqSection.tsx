
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageCircle, CalendarCheck, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
        {/* FAQ Section */}
        <section id='faq' className="bg-white py-16">
          <div className="container mx-auto px-4 pt-4">
            <h2 className="text-3xl  font-bold mb-12 text-center text-webinar-darkOrange">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl text-hubilo-black font-semibold mb-3">Is there a fee to connect with service providers?</h3>
                <p className="text-hubilo-black">
                  No, connecting with service providers through our marketplace is completely free. You only pay for the services you agree to purchase directly from the provider.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl text-hubilo-black font-semibold mb-3">How quickly will I hear back after expressing interest?</h3>
                <p className="text-hubilo-black">
                  Hubilo typically facilitates connections within 24-48 hours after you express interest in a service provider.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl text-hubilo-black font-semibold mb-3">Can I connect with multiple service providers?</h3>
                <p className="text-hubilo-black">
                  Absolutely! You're welcome to express interest in multiple providers to find the best match for your specific webinar needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl text-hubilo-black font-semibold mb-3">Does Hubilo guarantee the quality of service providers?</h3>
                <p className="text-hubilo-black">
                  While we carefully vet all providers on our marketplace, the final agreement is between you and the service provider. We recommend reviewing their portfolio, testimonials, and having detailed discussions before finalizing any arrangements.
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
