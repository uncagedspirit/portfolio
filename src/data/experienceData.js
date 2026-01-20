import hsbc from "../assets/experience/hsbc.webp"
import cctech from "../assets/experience/cctech.webp"

export const experienceData = [
  {
    id: 1,
    company: "HSBC Technology India",
    role: "Software Engineer",
    logo: hsbc,
    duration: "July 2025 - Present",
    workType: "Hybrid",
    location: "Pune, India",
    points: [
      "To be added soon."
    ]
  },
  {
    id: 2,
    company: "CCTech",
    role: "Software Engineering Intern",
    logo: cctech,
    duration: "Mar 2025 - June 2025",
    workType: "Onsite",
    location: "Pune, India",
    points: [
      "Built interactive OpenGL/WebGL-based graphics applications, implementing geometric primitives and matrix-based transformations (translation, rotation, scaling) for 2D/3D rendering.",
      "Worked with triangle-based 3D models (STL-style meshes) and created animated visualizations, including hierarchical animations for complex objects.",
      "Developed the frontend for a cloud-based assembly visualization system, integrating AWS S3 inputs and AI-driven part identification to render automated assembly animations."
    ]
  }
];
