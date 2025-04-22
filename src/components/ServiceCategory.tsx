
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export interface ServiceCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  badgeText?: string;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ 
  title, 
  description, 
  icon,
  badgeText 
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm service-card">
      <div className="mb-4 bg-webinar-lightPurple p-3 w-12 h-12 flex items-center justify-center rounded-lg">
        {icon}
      </div>
      <div className="flex items-center mb-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        {badgeText && (
          <Badge className="ml-2 bg-webinar-purple/10 text-webinar-purple hover:bg-webinar-purple/20">
            {badgeText}
          </Badge>
        )}
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="ghost" className="text-webinar-blue hover:text-webinar-purple hover:bg-webinar-lightPurple p-0 h-auto font-medium">
        View Services <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
};

export default ServiceCategory;
