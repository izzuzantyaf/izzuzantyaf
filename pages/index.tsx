import Head from "next/head";
import Navbar from "../components/global/navbar";
import Hero from "../components/home/hero";
import Projects from "../components/home/projects";

export default function HomePage() {
  return (
    <div className="homepage">
      <Head>
        <title>Izzu Zantya Fawwas</title>
      </Head>

      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}
