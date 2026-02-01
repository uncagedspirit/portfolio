import brainwaveVideo from "../assets/project recordings/brainwave.webm"; 
import brainwaveLogo from "../assets/project logos/brainwave.svg"; 

import ochiVideo from "../assets/project recordings/ochi.webm"; 
import ochiLogo from "../assets/project logos/ochi.png"; 

import framehuntVideo from "../assets/project recordings/framehunt.webm"; 
import framehuntLogo from "../assets/project logos/framehunt.jpg";


export const projects = [
  {
    projectId: 0,
    title: "BrainWave",
    description: "A landing page for AI chatting App.",
    video: brainwaveVideo,
    date: "January 2025",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    githubLink: "https://github.com/uncagedspirit/brainwave",
    liveLink: "https://aibrainwave.netlify.app/",
    logo: brainwaveLogo,
    details: [
      "Modern AI-themed landing page",
      "Smooth animations and transitions",
      "Responsive across all devices",
      "Reusable and clean component structure"
    ]
  },
  {
    projectId: 1,
    title: "Ochi",
    description: "A designer landing page for presentation agency.",
    video: ochiVideo,
    date: "March 2024",
    techStack: ["React", "Tailwind CSS", "JavaScript"],
    githubLink: "https://github.com/uncagedspirit/Ochi-design",
    liveLink: "https://ochidesignsite.netlify.app/",
    logo: ochiLogo,
    details: [
      "Pixel-perfect UI inspired by modern agencies",
      "Smooth scroll and hover animations",
      "Fully responsive layout",
      "Clean and minimal design system"
    ]
  },
  {
    projectId: 2,
    title: "FrameHunt",
    description: "Webapp for selling photo frames for a local business.",
    video: framehuntVideo,
    date: "Dec 2026- Jan 2026",
    techStack: ["React.js", "JavaScript", "TailwindCSS"],
    githubLink: "https://github.com/uncagedspirit/frame-app",
    liveLink: "https://framehunt.netlify.app/",
    logo: framehuntLogo,
    details: [
      "Product listing and detail views",
      "Simple and user-friendly UI",
      "Optimized for fast load times",
      "Mobile-responsive design"
    ]
  }
];
