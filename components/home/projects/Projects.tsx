import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Country Flags",
    imgSrc: "project-imgs/country.webp",
    code: "https://github.com/Amminadab/countries",
    projectLink: "https://countryflag.onrender.com/",
    tech: ["React", "MUI", "Redux", "RustApi"],
    description:
      "A real-time learning website for students learning about countries flag. This app is my baby, designed and built on my own.",
    modalContent: (
      <>
        <p>
          Country Flags is a real-time website for students learning about
          countries flag. This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of React for the front-end, tailwind
          used for the UI,Redux for Global state management, used & RustApi
          backend and deployed on Render.
        </p>
        <p>
          I hope you like it the link to the application will be down below
          {":)"}
        </p>
        <p>
          I've introduced a quiz option for those who desire to get quizzed.
          Multiple choice and name it questions are the two types of questions.
          In the multiple choice, I've included an algorithm that generates six
          different types of questions based on the user's preferred continent.
        </p>
        <p>
          I'd love for you to test out the quiz app and let me know what you
          think.
        </p>
      </>
    ),
  },
  {
    title: "The Bank App",
    imgSrc: "project-imgs/bank.webp",
    code: "https://github.com/Amminadab/banking-app",
    projectLink: "https://thebankapp.onrender.com/",
    tech: ["React", "Tailwind", "Context", "Express"],
    description:
      " The Bank App is a an app which demonstrate banking functionality for customers to Send , Withdraw , Transfer and Loan dummy money for fun .",
    modalContent: (
      <>
        <p>
          The Bank App is a an app which demonstrate banking functionality for
          customers to Send , Withdraw , Transfer and Loan dummy money for fun .
        </p>
        <p>
          I work primarily on the frontend, the only thing the backend is for is
          for demonstrating authorization and authentication. with that being
          said the app is front end heavy equips with React ContextApi and
          Reducers to handle the global state
        </p>
        <p>
          I hope you like it the link to the application will be down below
          {":)"}
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          It has features such as displaying a welcome text, total balance,
          account number, account type, and withdrawal and deposit activity
          history.
        </p>
        <p>
          I'd love for you to test out the Bank app and let me know what you
          think.
        </p>
      </>
    ),
  },
  {
    title: "Module Redesign",
    imgSrc: "project-imgs/module.webp",
    code: "https://github.com/Amminadab/module",
    projectLink: "https://module-redesign-by-amminadab.onrender.com",
    tech: ["HTML", "CSS", "MUI", "Figma"],
    description:
      "I created these websites for the main reason that when I was hunting for a figma plug in, I discovered their website when I entered their website. inspired by that i redesign there hole front page website.",
    modalContent: (
      <>
        <p></p>
        <p>
          I created these websites for the main reason that when I was hunting
          for a figma plug in, I discovered their website when I entered their
          website. inspired by that i redesign there hole front page website.
        </p>
        <p>
          I used the following design process: first, I gathered all of the
          requirements for me to be able to design these, then I began by
          drawing my ideas as a lo-fi design, then I crafted what I drew in to a
          lo-fi digital design, and finally, once I was sure the design was
          usable, I shipped the Figma hi-fi design and created the website.
        </p>
        <p>
          This is a fictional website that has no use other than to showcase my
          creative ideas and design skills.
        </p>
      </>
    ),
  },
  {
    title: "Booker",
    imgSrc: "project-imgs/booker.webp",
    code: "https://github.com/Amminadab/bookipi",
    projectLink: "https://booker-by-amminadab.onrender.com",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description:
      "Booker is the easiest invoice app for small businesses. Send invoices to your customers in under a minute and receive payments quicker. ",
    modalContent: (
      <>
        <p>
          Booker is the easiest invoice app for small businesses. Send invoices
          to your customers in under a minute and receive payments quicker.{" "}
        </p>
        <p>
          I used the following design process: first, I gathered all of the
          requirements for me to be able to design these, then I began by
          drawing my ideas as a lo-fi design, then I crafted what I drew in to a
          lo-fi digital design, and finally, once I was sure the design was
          usable, I shipped the Figma hi-fi design and created the website.
        </p>
        <p>
          I developed these websites because when I was looking for a booking
          app in, I stumbled across their website when I entered their website.
          I was inspired by that and redesigned their entire front page website.
        </p>
        <p>
          This is a fictional website that has no use other than to showcase my
          creative ideas and design skills.
        </p>
      </>
    ),
  },
];
