import { kebabCase, kebabArray } from "@/utils/utils";
export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 0,
    title: "Twitter Clone",
    img: "",
    github: "https://vercel.com/emibarea/twitter-clone",
    link: "https://twitter-clone-xi-opal.vercel.app/",
    desc: "Clone de twitter utilizando nextjs, SSR!. Mongo DB como base de datos y Tailwind para los estilos.",
    tags: ["js"],
  },

  {
    id: 1,
    title: "Promptopia",
    img: "",
    github: "https://github.com/emibarea/promptopia",
    link: "https://promptopia-gamma-blue.vercel.app/",
    desc: "Proyecto de Red Social de prompts para IAs. Mongo DB como base de datos y Tailwind para estilos.",
    tags: ["js"],
  },
  {
    id: 2,
    title: "Air Bnb Clone",
    img: "",
    github: "https://github.com/emibarea/airbnb-clone",
    link: "https://airbnb-clone-emi.vercel.app/",
    desc: "Clone de Air Bnb. Enrutamiento dinamico y Tailwind para estilos.",
    tags: ["js"],
  },
  {
    id: 3,
    title: "Netflix Clone",
    img: "",
    github: "https://github.com/emibarea/Netflix-Clone",
    link: "https://netflix-clone-sigma-teal.vercel.app/",
    desc: "Clone de Netflix consumiendo API de peliculas.",
    tags: ["js"],
  },
  {
    id: 4,
    title: "Spotify Clone",
    img: "",
    github: "https://github.com/emibarea/Spotify-Clone",
    link: "https://spotify-clone-emibarea.vercel.app/",
    desc: "Clone de Spotify, conectado a la API de spotify para logearse y poder usar los controles desde la app!",
    tags: ["js"],
  },
  {
    id: 5,
    title: "Youtube Clone",
    img: "",
    github: "https://github.com/emibarea/Youtube-Clone",
    link: "https://youtube-clone-sigma-sable.vercel.app/",
    desc: "Clone de Youtube consumiendo a su API.",
    tags: ["js"],
  },
  {
    id: 6,
    title: "Instagram Clone",
    img: "",
    github: "https://github.com/Ignagim/instagram-clone",
    link: "https://instagram-clone-emibarea.vercel.app/",
    desc: "Clone de Instagram. Firebase como base de datos y Tailwind para los estilos.",
    tags: ["js"],
  },

  {
    id: 7,
    title: "GYM Website",
    img: "",
    github: "https://github.com/emibarea/GYM-website",
    link: "https://gym-website-plum.vercel.app/",
    desc: "Pagina estatica comercial.",
    tags: ["js"],
  },
  {
    id: 8,
    title: "Hoo Bank",
    img: "",
    github: "https://github.com/emibarea/Hoo-Bank",
    link: "https://hoo-bank-ochre.vercel.app/",
    desc: "Pagina estatica comercial.",
    tags: ["js"],
  },
  {
    id: 9,
    title: "JavaScript Calculator",
    img: "",
    github: "https://github.com/emibarea/Calculadora",
    link: "https://emibarea.github.io/Calculadora/",
    desc: "Calculadora usando javascript, html y css.",
    tags: ["js"],
  },
  {
    id: 10,
    title: "TIC-TAC-TOE",
    img: "",
    github: "https://github.com/emibarea/TIC-TAC-TOE",
    link: "https://tic-tac-toe-alpha-gilt.vercel.app/",
    desc: "Clasico juego TA-TE-TI.",
    tags: ["js"],
  },
];

export const allTags: string[] = [];

projects.forEach((project) => {
  project.tags.forEach((tag: string) => {
    if (!allTags.includes(tag)) {
      allTags.push(tag);
    }
  });
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
