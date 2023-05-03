import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Amminadab Elias | Web Developer</title>
        <meta property="og:title" content="Amminadab's portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta
          name="description"
          content="Completed my Computer Science degree in late 2022. I have a strong understanding of Front-End development best practices and am able to quickly develop high-quality, responsive web applications. My experience working with React and Redux makes me an excellent candidate for developing stateful and scalable web applications. Currently,I focus on Installing and testing user interface elements on responsive websites. I typically use HTML, CSS, JavaScript, TypeScript, SCSS, React, Redux and Figma."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
