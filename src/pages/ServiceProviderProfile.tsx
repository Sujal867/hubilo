
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Check, MapPin, Calendar, Clock, Globe, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { providersData } from '@/data/providers';

const ServiceProviderProfile = () => {
  const { id } = useParams();
  
  // Find the provider based on the ID from the URL
  const provider = providersData.find(p => p.id === id);
  
  if (!provider) {
    return (
      <div className="min-h-screen flex flex-col bg-hubilo-gray">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Provider Not Found</h2>
            <p className="mb-6">The service provider you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-hubilo-gray">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-webinar-blue mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to providers
          </Link>
          
          {/* Provider Header */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
            <div className="h-60 relative bg-webinar-blue/10">
              <img 
                src={provider.image} 
                alt={provider.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
                <Badge className="mb-2 bg-webinar-blue text-white">
                  {provider.category}
                </Badge>
                <h1 className="text-3xl font-bold text-white">{provider.name}</h1>
              </div>
            </div>
            
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="flex items-center bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span className="font-semibold">{provider.rating.toFixed(1)}</span>
                  <span className="mx-1 text-gray-400">|</span>
                  <span className="text-sm">{Math.floor(provider.rating * 10)} reviews</span>
                </div>
                
                {provider.verified && (
                  <div className="flex items-center ml-4 text-green-600">
                    <Check className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Verified Provider</span>
                  </div>
                )}
                
                <div className="flex items-center ml-4 text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{provider.location || 'Global'}</span>
                </div>
              </div>
              
              <Button className="bg-webinar-purple hover:bg-webinar-purple/90">
                Request a Quote
              </Button>
            </div>
          </div>
          
          {/* Provider Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">About this Service</h2>
                  <p className="text-gray-700 mb-6">
                    {provider.fullDescription || provider.description}
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-3">What's Included</h3>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    {provider.services?.map((service, index) => (
                      <li key={index} className="text-gray-700">{service}</li>
                    )) || (
                      <>
                        <li className="text-gray-700">Professional consultation and planning</li>
                        <li className="text-gray-700">End-to-end service delivery</li>
                        <li className="text-gray-700">Quality assurance and follow-up</li>
                      </>
                    )}
                  </ul>
                  
                  <h3 className="text-lg font-semibold mb-3">Experience</h3>
                  <p className="text-gray-700">
                    {provider.experience || 'Extensive experience in delivering high-quality webinar services to clients across various industries.'}
                  </p>
                </CardContent>
              </Card>
              
              {/* Previous Work */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Previous Work</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {provider.previousWork?.map((work, index) => (
                      <div key={index} className="border border-gray-100 rounded-lg overflow-hidden">
                        <div className="h-40 bg-gray-100">
                          <img 
                            src={work.image || provider.image} 
                            alt={work.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium">{work.title}</h3>
                          <p className="text-sm text-gray-600">{work.description}</p>
                        </div>
                      </div>
                    )) || (
                      <p className="text-gray-500 col-span-2">No previous work samples available</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Pricing</h2>
                  <p className="text-webinar-purple font-bold text-2xl mb-2">
                    {provider.priceRange}
                  </p>
                  <p className="text-gray-500 text-sm mb-6">Starting price for basic services</p>
                  
                  <Button className="w-full mb-4">
                    Request a Quote
                  </Button>
                  
                  <p className="text-gray-500 text-sm text-center">
                    Custom packages available based on your needs
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Service Details</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-webinar-blue mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Availability</h3>
                        <p className="text-sm text-gray-600">
                          {provider.availability || 'Available for projects'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-webinar-blue mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Turnaround Time</h3>
                        <p className="text-sm text-gray-600">
                          {provider.turnaround || 'Varies based on project scope'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Globe className="h-5 w-5 text-webinar-blue mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Languages</h3>
                        <p className="text-sm text-gray-600">
                          {provider.languages?.join(', ') || 'English'}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-webinar-blue mr-3" />
                      <span className="text-gray-700">
                        {provider.email || 'Contact via Hubilo'}
                      </span>
                    </div>
                    
                    {provider.phone && (
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-webinar-blue mr-3" />
                        <span className="text-gray-700">{provider.phone}</span>
                      </div>
                    )}
                    
                    {provider.website && (
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-webinar-blue mr-3" />
                        <a href={provider.website} target="_blank" rel="noopener noreferrer" className="text-webinar-blue hover:underline">
                          {provider.website.replace(/^https?:\/\/(www\.)?/i, '')}
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceProviderProfile;
