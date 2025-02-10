import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Juan Manuel López Arrieta",
  logo: "/public/profile_pic.jpg",
  email: "juanmanuellopezarrieta@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Education",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/CodeXJUAN",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:juanmanuellopezarrieta@gmail.com",
    icon: "mdi:email",
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/juan-manuel-l%C3%B3pez-arrieta-0594912ab/",
    icon: "mdi:linkedin",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Juan Manuel López Arrieta",
    description:
      "Full time student from Spain who loves building cool things using code.",
    image: identity.logo,
  },
  role: "Student & 'Full-Stack Developer'",
  description:
    "I'm Juan, a full time student from Spain, I started coding at 15 and since then I decided to pursue my dream of living as a coder.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Juan Manuel López Arrieta",
    description:
      "Full time student from Spain who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `Student at the University of Vic, eager to work and gain experience, my specialty would be the development of user interfaces or Frontend, 
    that as far as related to what I'm studying, but I am open to jobs unrelated to mine to gain experience over the years .`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-3.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I don't have much work experience due to my age, but in the internship I had a while ago I had a very good experience.`, // Markdown is supported
    items: [
      {
        title: "Workplace Training",
        company: {
          name: "AMPANS",
          image: "/ampans-logo.png",
          url: "https://ampans.cat/es/",
        },
        date: "2023 - 2024",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Juan Manuel López Arrieta",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "JWEAR",
      description: "Fictional E-Commerce Store",
      bar: "-----------------------------------",
      info: "Project in process, made with HTML, CSS, PHP and JavaScript.",
      image: "/preview.png",
      year: "2024",
      url: "https://github.com/CodeXJUAN/JWEAR_FULLSTACK_PROJECT",
    },
    {
      title: "SalsyFeed APP",
      description: "The University Gossip World, all in an App",
      bar: "-----------------------------------",
      info: "Project in process too, made with React Native and Expo.",
      image: "/salsyfeedlogo.jpg",
      year: "2025",
      url: "https://github.com/CodeXJUAN/SALSYFEED-APP",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Education | Juan Manuel López Arrieta ",
    description: "In this page i will put all my education",
    image: identity.logo,
  },
  subtitle: "",
};
