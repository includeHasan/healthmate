"use client";
import Bottom from "@/components/HomeComponents/Bottom";
import Footer from "@/components/HomeComponents/Footer";
import MainSection from "@/components/HomeComponents/MainSection";
import NavBar from "@/components/HomeComponents/NavBar";
import SpecialityHome from "@/components/HomeComponents/SpecialityHome";

const App = () => {
  return (
    <>
    <NavBar/>
      <MainSection />
      <SpecialityHome />
      <Bottom />
      <Footer/>
    </>
  );
};

export default App;
