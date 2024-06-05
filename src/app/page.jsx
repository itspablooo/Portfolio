import Image from "next/image";
import Aboutme from "../components/Aboutme"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <main>
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
