
import CTA from "@/components/cta";
import FeatureStrategyFour from "@/components/strategy/featurestrategy-four";
import FeatureStrategyOne from "@/components/strategy/featurestrategy-one";
import FeatureStrategyThree from "@/components/strategy/featurestrategy-three";
import FeatureStrategyTow from "@/components/strategy/featurestrategy-tow";
import HeroStrategy from "@/components/strategy/hero";

export default function TechSolutionPage() {
  return (
    <div className="flex flex-col ">
        <HeroStrategy/>
        <FeatureStrategyOne/>
        <FeatureStrategyTow/>
        <FeatureStrategyThree/>
        <FeatureStrategyFour/>
        <CTA/>
    </div>
  );
}