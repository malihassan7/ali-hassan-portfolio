
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Guidesly",
    description: "Guidesly is a Boston-based outdoor marketplace and mobile platform (Guidesly Trips + Guidesly Pro) that connects adventurers with local expert guides for fishing, hunting, ATV, off-road, ski, dive, and other activities.",
    image: "/imgs/p1.png",
    tags: ["React.js", "Php", "Bootstrap"],
    links: {
      github: "",
      live: "https://guidesly.com/",
    }, 
  },
  {
    id: 2,
    title: "Zenav",
    description: "Their AI-driven ZeRA AI module performs full flight-route analysis in under a minute, automatically identifying slot applicability, overflight permits, CAA requirements, and live airspace updates.",
    image: "/imgs/p2.png",
    tags: ["React", "Node.js", "Next.js", "Tailwind CSS"],
    links: {
      github: "",
      live: "https://zenav.aero/",
    },
  },
  {
    id: 3,
    title: "Dragon Cage",
    description: "This project highlights my expertise in React architecture, component-based development, and centralized state handling with Redux.",
    image: "/imgs/p3.png",
    tags: ["React.js", "Tailwind CSS", "Redux",],
    links: {
      github: "",
      live: "https://muhammadaliht.github.io/dragon-cage/"
    },
  },
  {
    id: 4,
    title: "Muhammadan Quran School",
    description: "Muhammadan Quran School is a global online institute specializing in Quranic and Islamic education. Also a educational management system that provides a comprehensive platform for managing students, teachers, courses, and administrative tasks.",
    image: "/imgs/p4.png",
    tags: ["Javascript", "php", "Bootstrap", "SQL"],
    links: {
      github: "",
      live: "https://www.muhammadanquranschool.com/",
    },
  },
  {
    id: 5,
    title: "Zaraee",
    description: "Zaraee.pk is a Pakistan-based online marketplace for agricultural supplies, offering farmers a wide selection of seeds, fertilizers, pesticides, veterinary medicines, equipment, and cattle feed.",
    image: "/imgs/p6.png",
    tags: ["Javascript", "php","Laravel", "Bootstrap", "SQL"],
    links: {
      github: "",
      live: "https://zaraee.pk/",
    },
  },
  {
    id: 6,
    title: "Getamz Reviews",
    description: "getamzreviews.com is a service that sells “verified purchase” Amazon reviews—customers pay, and real buyers post positive reviews on their products, backed by a 6‑month replacement guarantee if Amazon removes them",
    image: "/imgs/p5.png",
    tags: ["Javascript", "php", "Bootstrap", "SQL"],
    links: {
      github: "",
      live: "https://getamzreviews.com/",
    },
  },
];
