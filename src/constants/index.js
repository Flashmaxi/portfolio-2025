import {
  mobile,
  creator,
  web,
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
  planb,
  digitalo,
  threejs,
  paper,
  kupisa,
  nostr,
  bezagenta,
  paperDemo,
  paperapp,
  planbweb,
  respect,
  doggie,
  casa,
  home,
  nostriga,
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
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Bitcoiner",
    icon: creator,
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
  {
    name: "Three JS",
    icon: threejs,
  },
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
    title: "Owner & Developer",
    company_name: "DigitaLo",
    icon: digitalo,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "Designed and delivered responsive, user-friendly websites for small businesses, utilizing ReactJS to build modular, maintainable, and efficient front-end applications.",
      "Leveraged modern frameworks and libraries, including ReactJS, CSS, and JavaScript, to create dynamic and highly performant user interfaces.",
      "Oversaw the full project lifecycle, analyzing client needs, creating technical specifications, and implementing solutions that directly enhanced their digital presence and business functionality.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Kupisa S.R.O. ",
    icon: kupisa,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - March 2024",
    points: [
      "Outsourcing agency - custom web development for international clients",
      "Creating custom WordPress themes and e-commerce platform functionality",
      "Working closely with different stakeholders, including design and development teams",
    ],
  },
  {
    title: "Web developer",
    company_name: "Nostr conference and freelance",
    icon: nostr,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developed and maintained the official NostrRiga conference website (2024)",
      "Currently leading the development for the latest Nostr conference website (2025)",
      "Provided custom websites and software solutions to local businesses worldwide by leveraging connections within the Nostr community",
      "Contributed to various projects related to the Nostr and Bitcoin communities",
    ],
  },

  {
    title: "Frontend Engineer",
    company_name: "PlanB Network",
    icon: planb,
    iconBg: "#383E56",
    date: "March 2024 - April 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Stealth Startup",
    icon: paper,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "Engineered the entire front-end application from the ground up using Angular 19, implementing a clean, modular component-based architecture for maintainability and scalability.",
      "Architected and built core user and admin dashboards, integrating with RESTful APIs to manage and visualize real-time financial data, user portfolios, and administrative controls.",
      "Developed a comprehensive, responsive design system utilizing Tailwind CSS, enabling rapid prototyping and ensuring a consistent user experience across all devices.",
      "Designed and implemented critical user flows, including the full onboarding process, user registration, and authentication systems, with a strong focus on security and an intuitive user experience.",
    ],
  },
];

const projects = [
  {
    name: "PlanB Network",
    description:
      "As a full-stack developer with a primary focus on front-end, I built new core features, pages, and modernized key dashboards for a Bitcoin Learning Management System. My work involved implementing new functionality, optimizing platform performance, and engineering a unique URL system to enhance content discovery.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: planbweb,
    source_code_link: "https://planb.network",
  },
  {
    name: "Paper Website",
    description:
      "I developed the official marketing website for Paper, a fintech startup. The project utilized SvelteKit for a modern, highly performant front-end and Tailwind CSS for a responsive, component-based design. The website was built to be fast, and provide a seamless user experience across all devices.",
    tags: [
      {
        name: "Sveltejs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: paperDemo,
    source_code_link: "https://getpaper.world/",
  },
  {
    name: "Paper App",
    description:
      "A comprehensive fintech web application that I developed to help users manage personal finances. The app features robust tools for tracking expenses and monitoring budgets within an intuitive, user-friendly interface. I worked on this project under an NDA, focusing on secure and reliable data management. ",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: paperapp,
    source_code_link: "",
  },
  {
    name: "Bezagenta.sk",
    description:
      "I engineered a custom WordPress theme for Bezagenta.sk, a financial services company. The project was built to provide a unique and professional online presence, ensuring a responsive and intuitive user experience.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "jquery",
        color: "pink-text-gradient",
      },
    ],
    image: bezagenta,
    source_code_link: "https://bezagenta.sk",
  },
  {
    name: "Respect Direct",
    description:
      "I engineered a custom WordPress theme for a insurance services company. The project was built to provide a unique and professional online presence, ensuring a responsive and intuitive user experience.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "pink-text-gradient",
      },
    ],
    image: respect,
    source_code_link: "https://www.respect-direct.sk/",
  },
  {
    name: "DoggieSk",
    description:
      "I engineered a custom WordPress theme for a dog training and grooming business. The project was built to provide a unique and professional online presence, ensuring a responsive and intuitive user experience.",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "pink-text-gradient",
      },
    ],
    image: doggie,
    source_code_link: "https://doggie.sk/",
  },
  {
    name: "Casa Nostra",
    description:
      "A portfolio and brand website that I am currently developing. I am utilizing modern web technologies like ReactJS, ThreeJS, and GSAP to create an immersive user experience with scroll-based animations and interactive 3D elements. The website features a fully responsive design built with Tailwind CSS.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
    ],
    image: casa,
    source_code_link: "",
  },
  {
    name: "Home Decor",
    description:
      "I developed a professional business website for Home Decor, a local interior design and decoration company in Serbia. Built with ReactJS and Tailwind CSS, the site provides an elegant and responsive online presence, enabling the business to showcase its portfolio and services to a wider audience.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: home,
    source_code_link: "https://www.homedecor.rs/",
  },
  {
    name: "Nostriga",
    description:
      "I developed the official website for the Nostriga conference in Riga, Latvia. The project was built using Vanilla JavaScript, HTML, and CSS, showcasing the ability to deliver a robust and functional site without the need for a framework.",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: nostriga,
    source_code_link: "https://nostr.world/",
  },
];

export { services, technologies, experiences, projects };
