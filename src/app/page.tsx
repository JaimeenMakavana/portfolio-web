import About from "@/components/About";
import Connect from "@/components/Connect";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className=" pt-10">
      <Header />
      <Intro />
      <Project />
      <About />
      <Connect />
    </main>
  );
}
