import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "../../public/Hero image.webp"
import { Link } from "react-router-dom";


const HeroSection = () => {
  const handleButtonClick = () => {
    const element = document.getElementById('Providers');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-hubilo-lightOrange">
      <div className="container mx-auto px-4">
        <div className="pt-4 flex flex-col lg:flex-row items-stretch min-h-[500px]">
        <div className="py-4 md:py-16 lg:py-20 lg:w-1/2 mb-2 lg:mb-0 flex flex-col justify-center">
            <h1 className="text-4xl text-hubilo-black md:text-5xl font-bold mb-6 leading-tight">
              Find Expert Webinar Services{" "}
              <span className="text-webinar-darkOrange">All in One Place</span>
            </h1>
            <p className="text-lg text-hubilo-black text-black-600 mb-8 max-w-lg">
              Connect with top-rated webinar professionals to help you plan,
              produce, and perfect your next online event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-webinar-darkOrange hover:bg-webinar-darkOrange/90 text-white px-8 py-6"
                onClick={handleButtonClick}
              >
                Browse Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end items-stretch">
            <img
              src={logo}
              alt="Computer screen showing Hubilo webinar interface"
              className="rounded-lg w-full object-fill h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
