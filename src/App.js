import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection";
import HeroTestimonial from "./components/HeroTestimonial";
import Experience from "./components/Experience";


function App() {
  return (
    <div >
      <Header />
      <HeroSection />
      <div className="bg-[#222222]">
        <HeroTestimonial />
      </div>
      <Experience />
    </div>
  );
}

export default App;
