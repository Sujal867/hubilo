import image1 from '../../public/man-filming-with-professional-camera-new-movie.webp'
import image2 from '../../public/father-s-day-composition-with-gift-mobile-phone.webp'
import image3 from '../../public/business-people-are-brainstorming.webp'
import image4 from '../../public/emptyhome.webp'
import image5 from '../../public/executive-touching-icon-social-network.webp'
export interface Provider {
  id: number;
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
    id: 1,
    name: "A2 Media",
    image: image1,
    // image: "../../public/man-filming-with-professional-camera-new-movie.webp",
    category: "Video Repurposing",
    description: "Record, upload, relax - A2Media turns your clips into high-impact, strategy-driven videos within 72 hours, accelerating pipeline for lean $10M+ B2B SaaS teams.",
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
    id: 2,
    name: "DelightLoop",
    image: image2,
    //image: "../../public/father-s-day-composition-with-gift-mobile-phone.webp",
    category: "Gifting",
    description: "DelightLoop’s AI gifting platform boosts pipeline and retention: perfectly matched gifts win prospects, deepen stakeholder ties, and de-risk renewals - ditch spam, deliver delight.",
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
    id: 3,
    name: "MustSeeWebinars",
    image: image3,
    //image: "../../public/business-people-are-brainstorming.webp",
    category: "Webinar Strategy",
    description: "MustSeeWebinars: Bob Hanson’s elite team turns SaaS webinars into growth flywheels - strategy, training, and done-for-you production that scales revenue fast.",
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
    id: 4,
    name: "WestPeek",
    image: image4,
    //image: "../../public/emptyhome.webp",
    category: "Webinar Production",
    description: "WestPeek fuses strategy and tech to create flawless, conversion-driven webinars - captivate audiences, free your team, and multiply event ROI.",
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
    id: 5,
    name: "Eventible",
    image: image5,
    //image: "../../public/executive-touching-icon-social-network.webp",
    category: "Webinar Registration",
    description: "Eventible secures ICP-fit, high-intent webinar registrations - fill seats, grow pipeline, and slash acquisition costs while your team tackles bigger priorities.",
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
  }
];
