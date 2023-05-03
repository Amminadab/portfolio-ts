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
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["React", "tailwind", "Node", "Express"],
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
    title: "BrushWire",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["NextJS", "Java", "Spring", "AWS Aurora"],
    description:
      "Think Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.",
    modalContent: (
      <>
        <p>
          Brush wire is essentially Zapier but for paint. Built with a team of
          four college friends and scaled to {">"} 1 billion requests per day.
          This was a fun one.
        </p>
        <p>
          Since &quot;Zapier for paint&quot; doesn&apos;t mean anything, be
          creative {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Paint Reference 4",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Python", "FastAPI", "SQLAlchemy"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];
