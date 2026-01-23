import FeatureOutsourceOne from "@/components/outsource/featureoutsourceone";
import FeatureOutsourceTow from "@/components/outsource/featureoutsourcetow";
import HeroOutsource from "@/components/outsource/hero";




export default function DigitalMarketing() {
  return (
    <div className="flex flex-col ">
      <HeroOutsource/>
      <FeatureOutsourceOne/>
      <FeatureOutsourceTow/>
      
    </div>
  );
}