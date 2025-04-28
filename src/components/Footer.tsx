
import React from 'react';
import { Separator } from '@/components/ui/separator';
import logo from '../../public/Hubilo_Square-Logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
          <img src={logo} alt="Hubilo Logo" className="h-8 mb-4" />
            <p className="text-hubilo-black mb-4">
              The hub for professional webinar services. Connect with experts to elevate your virtual events.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-hubilo-black hover:text-webinar-blue transition-colors">How It Works</a></li>
              <li><a href="#faq" className="text-hubilo-black hover:text-webinar-blue transition-colors">Faq</a></li>
            </ul>
          </div>
              {/*<li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Content Creation</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Coaching</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">Audience Engagement</a></li>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-hubilo-black hover:text-webinar-blue transition-colors">How It Works</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">FAQ</a></li>
              <li><a href="#" className="text-hubilo-black hover:text-webinar-blue transition-colors">About Us</a></li>
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
              <li><a href="#faq" className="text-hubilo-black hover:text-webinar-blue transition-colors">FAQ</a></li>
            </ul>
          </div>*/}
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-hubilo-black mb-4 md:mb-0">
            © {new Date().getFullYear()} Hubilo Services Hub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="https://www.hubilo.com/terms-of-use#:~:text=You%20may%20not%20use%20any,compilation%20for%20any%20purpose)%3B" className="text-hubilo-black hover:text-webinar-blue transition-colors">Terms</Link>
            <Link to="https://www.hubilo.com/privacy-policy" className="text-hubilo-black hover:text-webinar-blue transition-colors">Privacy</Link>
            <Link to="https://www.hubilo.com/cookie-policy#:~:text=No%20cookie%20related%20data%20is,can%20exercise%20this%20right%20below." className="text-hubilo-black hover:text-webinar-blue transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
