import { useEffect } from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/herosection/HeroSection";
import scrollToTop from "../../components/scroll/scrollToTop";

const Home = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <HeroSection />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
