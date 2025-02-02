import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { Services } from "@/components/Services";
import { TechGrid } from "@/components/Tech";
import { AnimatedTestimonials } from "@/components/ui/AnimatedTestimonials";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <TechGrid />
        <Services />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
