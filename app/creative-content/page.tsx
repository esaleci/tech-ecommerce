import HeroCreative from "@/components/creative/hero";
import ServicesSection from "@/components/creative/services";
import CTA from "@/components/cta";


export default function CreativeContent() {
  return (
    <div className="flex flex-col gap-3 px-6 max-w-7xl mx-auto">
    <HeroCreative/>
    <ServicesSection/>
    <CTA/>
    </div>
  );
}