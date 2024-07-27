import BuynowSection from "@/components/pages/HomePage/BuynowSection";
import HeroSection from "@/components/pages/HomePage/HeroSection";
import LogoMarquee from "@/components/pages/HomePage/LogoMarquee";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mb-[10rem]">
     <HeroSection />
     <LogoMarquee />
     <BuynowSection />
    </main>
  );
}
