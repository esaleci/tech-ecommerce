import HeroCreative from "@/components/creative/hero";
import ServicesSection from "@/components/creative/services";
import CTA from "@/components/cta";


export default function CreativeContent() {
  return (
    <div className="flex flex-col  ">
    <HeroCreative/>
    <ServicesSection/>
    <CTA/>
    </div>
  );
}