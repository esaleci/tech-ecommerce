import FeatureOneTech from "@/components/tech/featureonetech";
import FeatureThreeTech from "@/components/tech/featurethreetech";
import FeatureTwoTech from "@/components/tech/featuretowtech";
import HeroTech from "@/components/tech/hero";
import CTA from "@/components/cta";

export default function TechSolutionPage() {
  return (
    <div className="flex flex-col ">
        <HeroTech/>
        <FeatureOneTech/>
        <FeatureTwoTech/>
        <FeatureThreeTech/>
        <CTA/>
    </div>
  );
}