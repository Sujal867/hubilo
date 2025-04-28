
import ServiceProviderCard from './ServiceProviderCard';
import { Button } from '@/components/ui/button';
import { providersData } from '@/data/providers';
import { Link } from 'react-router-dom';
import { Card,CardContent } from '@/components/ui/card';


const FeaturedProvidersSection = () => {
  return (
    <section id='Providers'  className="py-16 md:py-16 bg-white">
      <div className="container mx-auto px-4 pt-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-hubilo-black font-bold mb-4">Top-Rated Service Providers</h2>
          <p className="text-hubilo-black max-w-2xl mx-auto">
            Connect with our featured professionals who have consistently delivered exceptional webinar services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {providersData.map((provider) => (
            <ServiceProviderCard 
              key={provider.id}
              id={provider.id}
              name={provider.name}
              image={provider.image}
              category={provider.category}
              description={provider.description}
              priceRange={provider.priceRange}
              rating={provider.rating}
              verified={provider.verified}
            />
          ))}
          <Card className="overflow-hidden grid place-items-center border-gray-100 shadow-sm transition-all hover:shadow-md hover:translate-y-[-5px]">
            <CardContent className="pt-2">
            <p className="text-lg text-hubilo-black line-clamp-2">More Coming Soon...</p>
            </CardContent>
          </Card>
        </div>
        
        
        <div className="text-center">
          {/*<Button className="bg-webinar-darkOrange hover:bg-webinar-darkOrange/90 text-white px-8 py-6" asChild>
            <Link to="/become-provider">View All Service Providers</Link>
          </Button>*/}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProvidersSection;
