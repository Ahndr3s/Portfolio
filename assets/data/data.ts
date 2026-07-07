export interface ItemData {
  projectType: string[];
  id: string;
  name: string;
  description: string;
  techStack: string[];
  gitUrl?: string;
  liveUrl: string;
  img: string;
}

export const data: ItemData[] = [
  {
    projectType: ["Web Platform"],
    id: "p-fatrian",
    name: "Fatrian ERP",
    description:
      "Cloud-based ERP system for small and medium-sized businesses with multiple branches.",
    techStack: ["HTML5", "CSS", "Javascript", "Jquery", "PHP", "MySQL"],
    gitUrl: "",
    liveUrl: "https://subelo.mx/fatrian/index.php?est=1&db=fatrian",
    img: "erp",
  },
  {
    projectType: ["Web Platform"],
    id: "p-banbajio",
    name: "BajioNet Web 2.0",
    description: "Online banking platform of Banco del Bajío (BanBajío)",
    techStack: ["HTML5", "Javascript", "Azure", "PHP", "SQL Server"],
    gitUrl: "",
    liveUrl: "https://bancaporinternet.bb.com.mx",
    img: "",
  },
  {
    projectType: ["Web Platform", "Application"],
    id: "p-iatutores",
    name: "IA Tutores",
    description:
      "Educational platform with courses for teachers to integrate AI tools into their methodology",
    techStack: ["MongoDB", "React Native", "Typescript", "Tailwind"],
    gitUrl: "",
    liveUrl: "https://mockup1-vi19.onrender.com",
    img: "",
  },
  {
    projectType: ["Web Platform"],
    id: "p-rossmina",
    name: "Disfraces Rossmina",
    description:
      "Web platform to manage sales and inventory for a costume shop for female entrepreneurs",
    techStack: ["MongoDB", "React", "Typescript", "Tailwind", "NextJS"],
    gitUrl: "",
    liveUrl: "",
    img: "",
  },
];
