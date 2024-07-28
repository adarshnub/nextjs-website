import BuynowSection from "@/components/pages/HomePage/BuynowSection";
import DealOfMonth from "@/components/pages/HomePage/DealOfMonth";
import HeroSection from "@/components/pages/HomePage/HeroSection";
import LogoMarquee from "@/components/pages/HomePage/LogoMarquee";
import NewArrivals from "@/components/pages/HomePage/NewArrivals";
import Newsletter from "@/components/pages/HomePage/Newsletter";
import ProductsList from "@/components/pages/HomePage/ProductsList";
import Testimonial from "@/components/pages/HomePage/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mb-[10rem]">
     <HeroSection />
     <LogoMarquee />
     <BuynowSection />
     <NewArrivals  />
     <ProductsList />
     <DealOfMonth />

     <Newsletter />
     <Testimonial />
    </main>
  );
}
