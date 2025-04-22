
export interface Provider {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  fullDescription?: string;
  priceRange: string;
  rating: number;
  verified: boolean;
  location?: string;
  services?: string[];
  experience?: string;
  previousWork?: {
    title: string;
    description: string;
    image?: string;
  }[];
  availability?: string;
  turnaround?: string;
  languages?: string[];
  email?: string;
  phone?: string;
  website?: string;
}

export const providersData: Provider[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Webinar Production",
    description: "Full-service webinar production specialist with 8+ years experience in corporate events and training programs.",
    fullDescription: "I provide end-to-end webinar production services that elevate your online events. With over 8 years of experience working with Fortune 500 companies and startups alike, I bring technical expertise and creative direction to ensure your webinar stands out. My approach combines professional production quality with audience engagement strategies that drive results.",
    priceRange: "$500-$2,000",
    rating: 4.9,
    verified: true,
    location: "New York, USA",
    services: [
      "Full webinar production from planning to execution",
      "Technical setup and testing",
      "Live direction and production management",
      "Post-event editing and distribution",
      "Analytics and performance reports"
    ],
    experience: "8+ years producing webinars for corporate clients, with specialization in training programs, product launches, and thought leadership events.",
    previousWork: [
      {
        title: "Annual Tech Conference Series",
        description: "Produced a 6-part webinar series with 5,000+ attendees across sessions"
      },
      {
        title: "Healthcare Training Program",
        description: "Developed and produced interactive training webinars for medical professionals"
      }
    ],
    availability: "Available for bookings 2-3 weeks in advance",
    turnaround: "1-2 weeks for standard projects",
    languages: ["English", "Spanish"],
    email: "sarah@webinarproductions.com",
    website: "https://webinarproductions.com"
  },
  {
    id: "alex-techman",
    name: "Alex Techman",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Content Creation",
    description: "Expert technical support for webinar platforms including Zoom, WebEx, and Teams with live troubleshooting.",
    fullDescription: "I provide specialized technical support for all major webinar platforms, ensuring your events run smoothly without technical issues. My services include pre-event testing, live monitoring, and real-time troubleshooting to quickly resolve any problems that arise. I have extensive experience with Zoom, WebEx, Microsoft Teams, and custom streaming solutions.",
    priceRange: "$75-$150/hr",
    rating: 4.7,
    verified: true,
    location: "San Francisco, USA",
    services: [
      "Platform selection consultation",
      "Technical setup and configuration",
      "Pre-event testing and rehearsals",
      "Live event technical monitoring",
      "Real-time troubleshooting",
      "Post-event technical analysis"
    ],
    experience: "10+ years in IT with specialized focus on webinar and virtual event technologies for the past 5 years.",
    previousWork: [
      {
        title: "Global Leadership Summit",
        description: "Provided technical support for a 24-hour global event with participants from 30+ countries"
      },
      {
        title: "Virtual Product Launch",
        description: "Managed technical aspects of a high-stakes product reveal with 10,000+ concurrent viewers"
      }
    ],
    availability: "Available on short notice, including weekends",
    turnaround: "Immediate for emergency support",
    languages: ["English"],
    email: "alex@techsupport.com",
    phone: "+1 (555) 123-4567"
  },
  {
    id: "michelle-creative",
    name: "Michelle Creative",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Webinar Program Consulting ",
    description: "Professional content creator specializing in engaging slides, visual aids, and presentation materials.",
    fullDescription: "I transform complex information into compelling visual narratives that captivate webinar audiences. My services include custom slide design, data visualization, animation, and creating supplementary materials that enhance learning and retention. I work closely with presenters to ensure their message is conveyed effectively through visuals.",
    priceRange: "$300-$1,500",
    rating: 4.8,
    verified: true,
    location: "Los Angeles, USA",
    services: [
      "Custom slide deck design",
      "Brand-aligned visual templates",
      "Data visualization and infographics",
      "Animation and transition effects",
      "Interactive elements and visual aids",
      "Handouts and supplementary materials"
    ],
    experience: "7 years in design with focus on presentations and learning materials for the past 4 years.",
    previousWork: [
      {
        title: "Financial Services Webinar Series",
        description: "Created visual materials breaking down complex financial concepts for non-expert audiences"
      },
      {
        title: "Environmental Impact Report",
        description: "Designed interactive presentation visualizing scientific data for stakeholder engagement"
      }
    ],
    availability: "Booking projects 1-2 weeks in advance",
    turnaround: "3-5 business days for standard projects",
    languages: ["English", "French"],
    email: "michelle@creative-content.com",
    website: "https://creative-content.com"
  },
  {
    id: "david-speakwell",
    name: "David Speakwell",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Audience Engagement",
    description: "Certified presentation coach helping clients deliver impactful webinars with confidence and clarity.",
    fullDescription: "I help presenters transform their webinar delivery from ordinary to extraordinary. As a certified communication coach with expertise in virtual presentations, I work with executives, experts, and teams to develop their presentation skills specifically for webinar formats. My coaching focuses on verbal and non-verbal communication, audience engagement techniques, and managing presentation anxiety.",
    priceRange: "$200-$500",
    rating: 4.9,
    verified: true,
    location: "Chicago, USA",
    services: [
      "Personalized presentation coaching",
      "Script development and refinement",
      "Delivery and presence training",
      "Engagement techniques for virtual settings",
      "Q&A preparation and management",
      "Feedback and improvement sessions"
    ],
    experience: "15+ years in public speaking coaching with specialization in virtual presentations for the past 6 years.",
    previousWork: [
      {
        title: "Executive Leadership Program",
        description: "Coached C-suite executives on delivering virtual company-wide announcements effectively"
      },
      {
        title: "TEDx Speaker Preparation",
        description: "Prepared speakers for converting in-person talks to virtual format during pandemic"
      }
    ],
    availability: "Limited availability, booking 3-4 weeks in advance",
    turnaround: "Customized coaching programs ranging from 1-6 weeks",
    languages: ["English"],
    email: "david@speakwellcoaching.com",
    phone: "+1 (555) 789-0123",
    website: "https://speakwellcoaching.com"
  },
  {
    id: "engage-team",
    name: "Engage Team",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Coaching & Consulting",
    description: "Specialists in interactive polls, Q&A management, and gamification for maximum webinar engagement.",
    priceRange: "$350-$900",
    rating: 4.6,
    verified: false,
    location: "Remote, Global",
    services: [
      "Interactive poll design and implementation",
      "Live Q&A moderation and management",
      "Custom gamification strategies",
      "Audience participation techniques",
      "Engagement analytics and reporting"
    ]
  },
  {
    id: "visual-masters",
    name: "Visual Masters",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Visual Design",
    description: "Premium visual design services for branded webinar assets, custom graphics, and animations.",
    priceRange: "$400-$1,200",
    rating: 4.8,
    verified: true,
    location: "Berlin, Germany",
    services: [
      "Branded webinar environment design",
      "Custom graphics and illustrations",
      "Animation and motion graphics",
      "Lower thirds and on-screen elements",
      "Post-production visual enhancements"
    ]
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Video Production",
    description: "Full-service webinar production specialist with 8+ years experience in corporate events and training programs.",
    fullDescription: "I provide end-to-end webinar production services that elevate your online events. With over 8 years of experience working with Fortune 500 companies and startups alike, I bring technical expertise and creative direction to ensure your webinar stands out. My approach combines professional production quality with audience engagement strategies that drive results.",
    priceRange: "$500-$2,000",
    rating: 4.9,
    verified: true,
    location: "New York, USA",
    services: [
      "Full webinar production from planning to execution",
      "Technical setup and testing",
      "Live direction and production management",
      "Post-event editing and distribution",
      "Analytics and performance reports"
    ],
    experience: "8+ years producing webinars for corporate clients, with specialization in training programs, product launches, and thought leadership events.",
    previousWork: [
      {
        title: "Annual Tech Conference Series",
        description: "Produced a 6-part webinar series with 5,000+ attendees across sessions"
      },
      {
        title: "Healthcare Training Program",
        description: "Developed and produced interactive training webinars for medical professionals"
      }
    ],
    availability: "Available for bookings 2-3 weeks in advance",
    turnaround: "1-2 weeks for standard projects",
    languages: ["English", "Spanish"],
    email: "sarah@webinarproductions.com",
    website: "https://webinarproductions.com"
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Technical Support",
    description: "Full-service webinar production specialist with 8+ years experience in corporate events and training programs.",
    fullDescription: "I provide end-to-end webinar production services that elevate your online events. With over 8 years of experience working with Fortune 500 companies and startups alike, I bring technical expertise and creative direction to ensure your webinar stands out. My approach combines professional production quality with audience engagement strategies that drive results.",
    priceRange: "$500-$2,000",
    rating: 4.9,
    verified: true,
    location: "New York, USA",
    services: [
      "Full webinar production from planning to execution",
      "Technical setup and testing",
      "Live direction and production management",
      "Post-event editing and distribution",
      "Analytics and performance reports"
    ],
    experience: "8+ years producing webinars for corporate clients, with specialization in training programs, product launches, and thought leadership events.",
    previousWork: [
      {
        title: "Annual Tech Conference Series",
        description: "Produced a 6-part webinar series with 5,000+ attendees across sessions"
      },
      {
        title: "Healthcare Training Program",
        description: "Developed and produced interactive training webinars for medical professionals"
      }
    ],
    availability: "Available for bookings 2-3 weeks in advance",
    turnaround: "1-2 weeks for standard projects",
    languages: ["English", "Spanish"],
    email: "sarah@webinarproductions.com",
    website: "https://webinarproductions.com"
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lead Generation",
    description: "Full-service webinar production specialist with 8+ years experience in corporate events and training programs.",
    fullDescription: "I provide end-to-end webinar production services that elevate your online events. With over 8 years of experience working with Fortune 500 companies and startups alike, I bring technical expertise and creative direction to ensure your webinar stands out. My approach combines professional production quality with audience engagement strategies that drive results.",
    priceRange: "$500-$2,000",
    rating: 4.9,
    verified: true,
    location: "New York, USA",
    services: [
      "Full webinar production from planning to execution",
      "Technical setup and testing",
      "Live direction and production management",
      "Post-event editing and distribution",
      "Analytics and performance reports"
    ],
    experience: "8+ years producing webinars for corporate clients, with specialization in training programs, product launches, and thought leadership events.",
    previousWork: [
      {
        title: "Annual Tech Conference Series",
        description: "Produced a 6-part webinar series with 5,000+ attendees across sessions"
      },
      {
        title: "Healthcare Training Program",
        description: "Developed and produced interactive training webinars for medical professionals"
      }
    ],
    availability: "Available for bookings 2-3 weeks in advance",
    turnaround: "1-2 weeks for standard projects",
    languages: ["English", "Spanish"],
    email: "sarah@webinarproductions.com",
    website: "https://webinarproductions.com"
  }
];
