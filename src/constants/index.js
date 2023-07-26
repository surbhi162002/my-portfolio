import {
    uiux,
    backend,
    content,
    webdev,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: webdev,
    },
    {
      title: "UI Designer",
      icon: uiux,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: content,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Content Manager",
      company_name: "Homeguruji",
      // icon: starbucks,
      iconBg: "#383E56",
      date: "March 2021 - March 2022",
      points: [
        "Created and managed content and collaborated with subject matter experts to create engaging and relevant content.",
        "Ensuring a consistent flow of content that meets audience needs and supports marketing initiatives",
      ],
    },
    {
      title: "Martian Intern",
      company_name: "Persistent",
      // icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2023 - Aug 2023",
      points: [
        "Learned about the various technologies essential to work in the IT sector.",
        "Learned from the experienced professionals of the Company",
      ],
    },
    {
      title: "Video Creator",
      company_name: "TestprepKart",
      // icon: shopify,
      iconBg: "#383E56",
      date: "July 2021 - Dec 2021",
      points: [
        "Created video content for the youtube platform of the company",
        "Researched,wrote and published content about colleges and education"
      ],
    },
 
  ];
  
  const projects = [
    {
      name: "KnowEdge",
      description:
        "Web-based platform that allows users to search, watch, and post and rate educational content",
      tags: [
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "orange-text-gradient",
        },
        {
          name: "reactjs",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        }
      ],
      image:  "/src/assets/knowedge.png",
      // source_code_link: "https://github.com/",
    },
    {
      name: "TeeZone",
      description:
        "Web application that enables users to customize t-shirt model according to their preference and download it as well.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
        {
          name: "openAI",
          color: "green-text-gradient",
        },
      ],
      image: "/src/assets/teeapp.png",
      // source_code_link: "https://github.com/",
    },
    {
      name: "FitFlex",
      description:
        "A fitness exercise app that allows users to choose categories and specific muscle exercises.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "material-UI",
          color: "orange-text-gradient",
        },
        {
          name: "rapid api",
          color: "pink-text-gradient",
        },
      ],
      image:  "/src/assets/fitness.png",
      // source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };
  