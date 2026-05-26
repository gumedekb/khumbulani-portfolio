import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Education from "../Education";
import Certifications from "../Certifications";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import ProjectsSection from "../ProjectsSection";
import TechnicalSkills from "../TechnicalSkills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <TechnicalSkills />
      <ProjectsSection />
      <Education />
      <Certifications />
      <ContactMe />
      <Footer />
    </>
  );
}
