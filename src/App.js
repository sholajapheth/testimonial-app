import FormModal from "./components/helpers/FormModal";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection";
import HeroTestimonial from "./components/HeroTestimonial";
import Experience from "./components/Experience";
import SecondHeroTestimonial from "./components/SecondHeroTestimonial"
import SecondExperience from "./components/SecondExperience";
import Footer from "./components/Footer/Footer";
import { useState } from "react";


function App() {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    setShowModal(!showModal)
  }

  return (
    <div >
      {
        showModal && <FormModal handleClick={handleClick} />
      }
      <Header />
      <HeroSection />
      <div className="bg-[#222222]">
        <HeroTestimonial handleClick={handleClick} />
      </div>
      <Experience />
      <div className="bg-[#FFF8F5">
        <SecondHeroTestimonial handleClick={handleClick} />
      </div>
      <SecondExperience />
      <Footer />

    </div>
  );
}

export default App;
