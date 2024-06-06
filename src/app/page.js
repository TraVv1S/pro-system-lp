import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Advantages from "../../components/Advantages/Advantages";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Contact />
    </main>
  );
}
