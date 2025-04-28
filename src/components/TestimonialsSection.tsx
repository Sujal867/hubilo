
import React from 'react';
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import image1 from "../../public/image1.webp";
import image2 from "../../public/image2.webp";
import image3 from "../../public/image3.webp";
import image4 from "../../public/dave-aronson.webp";
import image5 from "../../public/william_callahan (1).webp";
import image6 from "../../public/gregory_miller (1).webp";


const testimonials = [
  {
    name: "Greg Mares",
    role: "Senior Media Specialist",
    company: "Okta",
    image: image1,
    content: "We saw record YouTube numbers in our first month with a2. They helped us create explainer videos, short-form content, and event assets. The team is fast, clear, and genuinely fun to work with. Best video partner we’ve had in SaaS."
  },
  {
    name: "Andrew Jones",
    role: "Director of Marketing",
    company: "LABL",
    image: image2,
    content: "Easily the best video team I’ve worked with. World-class work, insane turnaround times, and great communication.The team really cares about us and our goals. Feels like working with partners, not vendors."
  },
  {
    name: "Shawnie Hamer",
    role: "Director of Brand & Content Marketing",
    company: "Crossbeam",
    image: image3,
    content: "A2 Media turns raw ideas into high-performing content that lands. They’re creative, strategic, and a blast to work with. Every project has been smooth, fast, and impactful. Nobody does B2B video better."
  },
  {
    name: "Gregory Miller",
    role: "Senior Director Product Marketing",
    company: " Medable Inc",
    image: image4,
    content: "I look forward to meeting new people and learning new information at any business event I attend. I would surely trust the input or reviews by my peers to make a go or no go decision for an event."
  },
  {
    name: "Eric Smith",
    role: "Director of Content Marketing",
    company: "SecurityMetrics",
    image: image5,
    content: "I always expect to learn something new and generate new ideas at business events. I would have saved a lot of time by not attending some events if someone had just given me information about what some of these events actually were."
  },
  {
    name: "Dave Aronson",
    role: "Founder",
    company: " Codosaurus LLC",
    image: image6,
    content: "As a speaker as well as an attendee, the Event Destination, Networking and Learning opportunities are what I give importance to when choosing a business event."
  }
];

const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false }) // 👈 autoplay settings
  )
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-hubilo-black font-bold mb-4">What Our Clients Say</h2>
          <p className="text-hubilo-black max-w-2xl mx-auto">
            Hear from organizations who have transformed their webinars with our service providers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <Carousel plugins={[plugin.current]}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1 lg:basis-1/3 mb-2">
                  <Card className="border-0 shadow-md h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-2">
                      {[...Array(6)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-hubilo-black mb-6 italic">"{testimonial.content}"</p>
                    
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 mr-3">
                        {testimonial.image ? (
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        ) : null}
                        <AvatarFallback className="bg-webinar-darkOrange text-white">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-hubilo-black font-medium text-sm">{testimonial.name}</p>
                        <p className="text-hubilo-black text-xs text-black-500">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                  </Card>
                </CarouselItem>
              ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
