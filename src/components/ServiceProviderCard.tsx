import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Check, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { getUniqueCategories } from "@/utils";

export interface ServiceProviderProps {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  priceRange: string;
  rating: number;
  verified?: boolean;
}

const ServiceProviderCard: React.FC<ServiceProviderProps> = ({
  id,
  name,
  image,
  category,
  description,
  priceRange,
  rating,
  verified = false,
}) => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [messageSent, setMessageSent] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const categories = getUniqueCategories();

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    
    try {
      const currentDate = new Date();
      const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
      const istDate = new Date(currentDate.getTime() + istOffset);

      const formattedDate = istDate.toISOString().replace('T', ' ').split('.')[0]; 
      const utmParams = new URLSearchParams(window.location.search);
      const utm_source = utmParams.get("utm_source") ?? " ";
      const utm_medium = utmParams.get("utm_medium") ?? " ";
      const utm_campaign = utmParams.get("utm_campaign") ?? " ";
      const utm_id = utmParams.get("utm_id") ?? " ";
      const utm_term = utmParams.get("utm_term") ?? " ";
      const utm_content = utmParams.get("utm_content") ?? " ";

      await fetch("https://script.google.com/macros/s/AKfycbzAQkF3pljZiqI9sW89tbVsp25ddgp59aB3c4-QG6TFnKopv0QMZ8vPUIi4Xb8stWO9oQ/exec", {
        method: "POST",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          category: categoryName,
          date: formattedDate,
          utm_source,
          utm_medium,
          utm_campaign,
          utm_id,
          utm_term,
          utm_content
        }),
      });
  
      setMessageSent('success');
      setIsSubmitting(false);
      //setIsContactDialogOpen(false);
      setEmail("");
      setCategoryName("");
      {/*toast.success(`Thank you for taking the first step. Sit tight - we’ll connect you with the right partner in 24 - 48 hours. Big wins (and better webinars) are just around the corner.`)*/};
    } catch (error) {
      console.error("Error submitting form:", error);
      {/*toast.error("Something went wrong. Please try again.");*/}
      setIsSubmitting(false);
    }
  };
  
  return (
    <Card className="overflow-hidden grid border-gray-100 shadow-sm transition-all hover:shadow-md hover:translate-y-[-5px]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={`${name} - ${category}`}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 left-3 bg-webinar-darkOrange text-white">
          {category}
        </Badge>
      </div>
      <div className="flex justify-between flex-col">
      <CardHeader className="pb-0 pt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg text-hubilo-black font-semibold">{name}</h3>
          {/*<div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-medium text-amber-700">
              {rating.toFixed(1)}
            </span>
          </div>*/}
        </div>

        {/*{verified && (
          <div className="flex items-center text-sm text-green-600 mt-1">
            <Check className="h-4 w-4 mr-1" />
            <span>Verified Provider</span>
          </div>
        )}*/}
      </CardHeader>

      <CardContent className="pt-2">
        <p className="text-sm text-hubilo-black line-clamp-2">{description}</p>
      </CardContent>

      <CardFooter className="border-t border-gray-100 pt-3 flex justify-end items-center">
        {/*  <div>
          <p className="text-xs text-gray-500">Starting at</p>
          <p className="text-webinar-purple font-semibold">{priceRange}</p>
        </div>*/}
        <div className="flex justify-end items-end">
          <Button
            variant="outline"
            size="sm"
            className="border-hubilo-darkOrange text-hubilo-darkOrange hover:bg-rose-50 hover:text-hubilo-darkOrange"
            onClick={() => {
              setIsContactDialogOpen(true);
              setMessageSent(false);
            }}
            
          >
            <Heart className="h-4 w-4 mr-1 fill-hubilo-darkOrange" />
            Contact
          </Button>
          {/*<Button
            variant="outline"
            size="sm"
            className="border-webinar-gray text-hubilo-black font-normal hover:bg-webinar-gray/10 hover:text-hubilo-black"
            asChild
          >
            <Link to={`/provider/${id}`}>View Profile</Link>
          </Button>*/}
        </div>
      </CardFooter>
      </div>
      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="sm:max-w-md">
        <DialogHeader>
          {!messageSent && (
            <>
              <DialogTitle>Contact {name}</DialogTitle>
              <DialogDescription>
                Leave your email and we'll connect you with this service provider.
              </DialogDescription>
            </>
          )}
        </DialogHeader>
          {messageSent=='success' ? (
            <div className="p-4  text-green-800 rounded text-center">
              Thank you for taking the first step. Sit tight we’ll connect you with the right partner in 24 - 48 hours. Big wins (and better webinars) are just around the corner.
            </div>
          ) :
          (<form onSubmit={handleContactSubmit}>
            <div className="grid gap-4 py-4">
              {/* Email Field */}
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full"
                  required
                />
              </div>

              {/* Category Field */}
              <div className="grid gap-2">
                <label htmlFor="categoryName" className="text-sm font-medium">
                  Category
                </label>
                <select
                  id="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-full border rounded-md p-2 text-sm"
                  required
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  {categories.map((category) => (
                    <option key={id} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <DialogFooter className="gap-3 lg:gap-0">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsContactDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-webinar-darkOrange hover:bg-webinar-darkOrange/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </DialogFooter>
          </form>)}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default ServiceProviderCard;
