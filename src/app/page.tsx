import HeroSection from "@/components/heroSection/HeroSection";
import MarqueeComponent from "@/components/marqueeComponent/MarqueeComponent";
import MilestoneComponent from "@/components/milestoneComponent/MilestoneComponent";
import Testimonial from "@/components/testimonial/Testimonial";
import DetailSection from "@/components/detailSection/DetailSection";
import Footer from "@/components/footer/Footer";
import GlobeComponent from "@/components/globeComponent/GlobeComponent";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeComponent />
      <DetailSection />
      {/* <Testimonial /> */}
      {/* <GlobeComponent /> */}
      <MilestoneComponent />
      <Footer />
    </>
  );
}
