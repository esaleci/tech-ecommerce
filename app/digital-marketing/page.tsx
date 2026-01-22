import FeatureMarketing from "@/components/marketing/featuremarketing";
import HeroMarketing from "@/components/marketing/hero";
import ServicesSection from "@/components/marketing/services";


export default function DigitalMarketing() {
  return (
    <div className="flex flex-col ">
    <HeroMarketing/>
   <FeatureMarketing/>
   <ServicesSection/>
    </div>
  );
}