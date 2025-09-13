// Centralized content for BoostLink site

// ---- Types ----
export type About = {
    hero: string;
    intro: string[]; // paragraphs
    founded: string; // e.g., "2025"
    vision: string;
    mission: string;
  };
  
  export type Service = {
    title: string;
    summary: string;
  };
  
  export type Advantage = {
    title: string;
    desc: string;
  };
  
  export type Member = {
    name: string;
    role: string;
    img: string; // path to public image
    featured?: boolean;
  };
  
  export type Step = {
    title: string;
    desc: string;
  };
  
  export type ContactInfo = {
    phones: string[];
    email: string;
    address: string;
  };
  
  export type CaseStudy = {
    id: string;
    title: string;
    summary: string;
    tags: string[];
    image: string; // path in /public/img/portfolio
    url?: string; // optional external link
  };
  
  export type SiteContent = {
    about: About;
    services: Service[];
    advantages: Advantage[];
    team: Member[];
    roadmap: Step[];
    contact: ContactInfo;
    portfolio: CaseStudy[];
  };
  
  // ---- Content (from the official BoostLink profile) ----
  export const about: About = {
    hero: "We transform ideas into seamless, memorable experiences.",
    founded: "2025",
    intro: [
      "At BoostLink, we transform ideas into seamless, memorable experiences. Our team brings over a decade of personal experience managing some of Saudi Arabia’s largest and most high-profile events, combining precision, creativity, and operational mastery.",
      "From Production and Safety to Coordination, Operations, Logistics, Transportation, and Staffing, we deliver tailor‑made, end‑to‑end solutions that exceed expectations and drive results. BoostLink is more than a service provider—we are a trusted partner, leveraging our team’s expertise to create impactful experiences, foster innovation, and ensure every project achieves excellence.",
    ],
    vision:
      "To deliver exceptional event management and operations solutions that combine precision, creativity, and innovation. We are committed to ensuring seamless experiences for our clients and guests by leveraging our team’s expertise in logistics, VIP hospitality, and large-scale event execution.",
    mission:
      "To become a leading event management partner in the region, recognized for setting new standards in operational excellence, guest experience, and event innovation, while continuously shaping the future of the event industry in Saudi Arabia and beyond.",
  };
  
  export const services: Service[] = [
    {
      title: "Staffing Solutions",
      summary:
        "We provide tailored staffing services to connect organizations with the right talent—from short‑term projects to long‑term placements—ensuring businesses have the people they need to achieve their goals.",
    },
    {
      title: "Production Excellence",
      summary:
        "Our expertise in production management ensures efficiency, quality, and reliability across projects. We focus on delivering results that meet client expectations while maintaining high operational standards.",
    },
    {
      title: "Logistics, Safety, Accreditation & Coordination",
      summary:
        "End‑to‑end operational support that keeps every process compliant, seamless, and optimized—guaranteeing smooth operations and sustainable outcomes.",
    },
  ];
  
  export const advantages: Advantage[] = [
    { title: "Accredited & Trusted", desc: "We operate with recognized standards and compliance, giving our clients confidence in every project." },
    { title: "Agility & Innovation", desc: "We adapt quickly to challenges and design creative solutions that deliver real, measurable results." },
    { title: "End-to-End Expertise", desc: "From Production to Logistics, Safety, and Staffing, we provide integrated solutions under one roof." },
    { title: "Partnership Approach", desc: "We see ourselves as long‑term partners, working side by side with our clients to achieve sustainable growth." },
  ];
  
  // Use existing public image paths already referenced in Team.tsx
  export const team: Member[] = [
    { name: "Taghreed Al-Ajlan", role: "Founder & CEO", img: "/img/taghreed_al_ajlan.jpg", featured: true },
    { name: "Abdullah Wagih", role: "Co-Founder & COO", img: "/img/abdullah_wagih.jpg", featured: true },
    { name: "Malek Fayyad", role: "Operation Manager", img: "/img/malek_fayyad.jpg" },
    { name: "Mohamed Ameer", role: "Logistics Manager", img: "/img/mohamed_ameer.jpg" },
    { name: "Abdulrahman Bilani", role: "Digital Manager", img: "/img/abdulrahman_bilani.jpg" },
    { name: "Mutaz Haleem", role: "Accredited Manager", img: "/img/mutaz_haleem.jpg" },
  ];
  
  export const roadmap: Step[] = [
    {
      title: "Expansion of Services",
      desc:
        "Broaden our portfolio with more advanced solutions in production, logistics, and staffing, reaching wider industries and markets.",
    },
    {
      title: "Technology & Innovation",
      desc:
        "Invest in digital tools and smart systems to enhance efficiency, safety, and coordination across all operations.",
    },
    {
      title: "Strategic Partnerships",
      desc:
        "Build strong collaborations with regional and international partners to scale our impact and drive sustainable growth.",
    },
  ];
  
  export const contact: ContactInfo = {
    phones: ["+966592297345", "+966564557722"],
    email: "info@boostlinkco.com",
    address: "Al-Munsiyah, Riyadh, Saudi Arabia",
  };
  
  export const portfolio: CaseStudy[] = [
    // Placeholder list — ready for real case studies
    // {
    //   id: "vip-forum-2025",
    //   title: "VIP Hospitality at National Forum",
    //   summary: "Turnkey guest operations across logistics, accreditation, and staffing for 5k+ attendees.",
    //   tags: ["VIP", "Staffing", "Logistics"],
    //   image: "/img/portfolio/vip_forum_2025.jpg",
    //   url: "#",
    // },
  ];
  
  const siteContent: SiteContent = {
    about,
    services,
    advantages,
    team,
    roadmap,
    contact,
    portfolio,
  };
  
  export default siteContent;
  