import BuynowSection from "@/components/pages/HomePage/BuynowSection";
import HeroSection from "@/components/pages/HomePage/HeroSection";
import LogoMarquee from "@/components/pages/HomePage/LogoMarquee";
import NewArrivals from "@/components/pages/HomePage/NewArrivals";
import ProductsList from "@/components/pages/HomePage/ProductsList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mb-[10rem]">
     <HeroSection />
     <LogoMarquee />
     <BuynowSection />
     <NewArrivals  />
     <ProductsList />
    </main>
  );
}
