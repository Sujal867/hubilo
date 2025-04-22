
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-webinar-darkOrange mb-4">Hubilo Services Hub</h3>
            <p className="text-hubilo-black mb-4">
              The hub for professional webinar services. Connect with experts to elevate your virtual events.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Production</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Content Creation</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Coaching</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Audience Engagement</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">How It Works</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Webinar Tips</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Support</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-hubilo-black mb-4 md:mb-0">
            © {new Date().getFullYear()} Hubilo Services Hub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Terms</a>
            <a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Privacy</a>
            <a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
