import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Avi ICT Solutions",
    position: "Software Engineer",
    time: "2023 - Present",
    location: "Addis Ababa",
    description:
      "I help build and scale frontend applications. help them generate bueatyfull UI. Made the application secure by utilizing OAuth and JSON Web Token (JWT).",
    tech: [
      "React",
      "NextJS",
      "TailwindCSS",
      "Git",
      "GitHub",
      "MaterialUI",
      "RestAPI",
    ],
  },
  {
    title: "Lssya",
    position: "Front-End Developer",
    time: "2023 - Present",
    location: "Remote",
    description:
      "worked as a Junior Front-End Developer .Created a service from scratch to handle new listings. Also played with co-workers online games. It was fun.",
    tech: ["React", "VueJS", "TailwindCss", "GraphQL", "RestApi"],
  },
  {
    title: "Amazon",
    position: "Software Engineer",
    time: "2016 - 2020",
    location: "Seattle",
    description:
      "Data Engineer for store front. Built data pipelines with Spark and Airflow. Saw Bezos one time. He said he liked my paintings. I said I liked his hair.",
    tech: [
      "Java",
      "Python",
      "S3",
      "RDS",
      "Redshift",
      "PySpark",
      "HDFS",
      "Apache Airflow",
    ],
  },
];
