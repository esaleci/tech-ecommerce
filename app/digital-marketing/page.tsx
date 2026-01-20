import HeroCreative from "@/components/creative/hero";

import CTA from "@/components/cta";
import FeatureTow from "@/components/marketing/featuretow";
import HeroMarketing from "@/components/marketing/hero";
import ServicesSection from "@/components/marketing/services";


export default function DigitalMarketing() {
  return (
    <div className="flex flex-col gap-3 px-6 max-w-7xl mx-auto">
    <HeroMarketing/>
   <FeatureTow/>
   <ServicesSection/>
    </div>
  );
}