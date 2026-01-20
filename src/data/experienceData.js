import { experienceLogos } from "../assets/experience";
const { hsbc, cctech } = experienceLogos;

export const experienceData = [
  {
    id: 1,
    company: "HSBC Technology India",
    role: "Software Engineer",
    logo: hsbc,
    site: "https://www.hsbc.co.in/",
    duration: "July 2025 - Present",
    workType: "Hybrid",
    location: "Pune, India",
    locationImages: "Pune",
    techStack: [],
    points: [
      "To be added soon."
    ]
  },
  {
    id: 2,
    company: "CCTech",
    role: "Software Engineering Intern",
    logo: cctech,
    site: "https://cctech.co.in/",
    duration: "Mar 2025 - June 2025",
    workType: "Onsite",
    location: "Pune, India",
    locationImages: "Pune",
    techStack: ["C++", "JavaScript", "React", "TailwindCSS",  "AWS S3", "WebGL", "OpenGL", "CAD"],
    points: [
      "Built interactive OpenGL/WebGL-based graphics applications, implementing geometric primitives and matrix-based transformations (translation, rotation, scaling) for 2D/3D rendering.",
      "Worked with triangle-based 3D models (STL-style meshes) and created animated visualizations, including hierarchical animations for complex objects.",
      "Developed the frontend for a cloud-based assembly visualization system, integrating AWS S3 inputs and AI-driven part identification to render automated assembly animations."
    ]
  }
];
