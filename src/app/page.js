import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Advantages from "../../components/Advantages/Advantages";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";
import Modal from "../../components/Modal/Modal";
import Career from "../../components/Career/Career";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Contact />
      <Modal />
      <Career />
    </main>
  );
}
