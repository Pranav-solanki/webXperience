import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Home;
