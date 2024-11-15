import type { Props as ProjectsProp } from "../components/project/props";

export const PRRJECTS: ProjectsProp[] = [
  {
    dates: "2024.11.15",
    title: "Fanyi Node",
    project: "v1",
    projectUrl: "https://github.com/Lyrify-Cloud/Fanyi-Node",
    description:
      "Fanyi-Node is a tool that integrates multiple translation services, aiming to provide free translation services.",
    technologies: [
      "Node.js",
    ],
    logo: "/logos/node_v1.png",
  },
  {
    dates: "2024.1.15",
    title: "Lyrify Translator",
    project: "v1",
    projectUrl: "https://github.com/Lyrify-Cloud/Lyrify-Translator",
    description:
      "Lyrify Translator is a consolidation translation website, aiming to integrate various translation services to provide comprehensive multilingual translation capabilities.",
    technologies: [
      "Node.js",
      "Tailwind CSS",
      "TypeScript"
    ],
    logo: "/logos/translate_v1.png",
  },
];
