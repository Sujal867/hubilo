
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Jessica R.",
    role: "Marketing Director",
    company: "Tech Solutions Inc.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Working with Sarah transformed our webinar series. Her production expertise helped us deliver a polished, professional event that generated 40% more leads than our previous efforts."
  },
  {
    name: "Michael T.",
    role: "Training Manager",
    company: "Global Education",
    content: "David's coaching was invaluable. He helped our presenters deliver with confidence and clarity, resulting in the highest attendee satisfaction scores we've ever received."
  },
  {
    name: "Amanda L.",
    role: "Events Coordinator",
    company: "Finance Partners",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "The Visual Masters team created stunning graphics that elevated our webinar's professional appearance. Our executive team was impressed, and attendees specifically commented on the visuals."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-hubilo-black font-bold mb-4">What Our Clients Say</h2>
          <p className="text-hubilo-black max-w-2xl mx-auto">
            Hear from organizations who have transformed their webinars with our service providers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
