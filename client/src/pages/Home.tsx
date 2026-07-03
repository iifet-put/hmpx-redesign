import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import MethodologySection from "@/components/sections/MethodologySection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import ReformSection from "@/components/sections/ReformSection";
import ResultsSection from "@/components/sections/ResultsSection";
import TrustSection from "@/components/sections/TrustSection";
import ContentSection from "@/components/sections/ContentSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MethodologySection />
      <SpecialtiesSection />
      <ReformSection />
      <ResultsSection />
      <TrustSection />
      <ContentSection />
      {/* <TrustSection />  */}
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
