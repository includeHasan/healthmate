"use client";
import Bottom from "@/components/HomeComponents/Bottom";
import ImageSlider from "@/components/HomeComponents/ImageSlider";
import MainSection from "@/components/HomeComponents/MainSection";
import NavBar from "@/components/HomeComponents/NavBar";
import SpecialityHome from "@/components/HomeComponents/SpecialityHome";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <MainSection/>
        <SpecialityHome />
      </main>
      <Bottom />
    </div>
  );
};

export default App;
