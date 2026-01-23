
import Hero3 from '@/components/Hero3';
import FeatureOne from '@/components/featureone';
import FeatureTow from '@/components/featuretow';
import FeatureThree from '@/components/featurethree';
// import AdsBanner from '@/components/adsbanner';
// import CTA from '@/components/cta';

import { CTA2 } from '@/components/cta2';
import AltBTLSection from '@/components/AltBTLSection';
import CTA from '@/components/cta';
import AltBTLLink from '@/components/altbtllink';

export default function Home() {
  return (
    <>
      
    
        <Hero3 />
        <FeatureOne />
        <FeatureTow />
        <FeatureThree />

        <AltBTLLink />
        {/* <AltBTLSection  title="Integrated ATL & BTL solutions"
 quote="We deliver integrated ATL & BTL marketing solutions that combine mass media reach with targeted engagement to increase brand visibility, strengthen customer connections, and drive measurable business growth across offline and online channels."
 highlightedText="ATL & BTL marketing solutions"
 authorName="Top-Performing ATL&BTL Solutions"
 authorPosition="Digital Media , Brand Activations"
/> */}
        {/* <CTA2 title="Call to Action"
description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium nisi, accusantium quae."
buttonText="Get Started"
buttonUrl="https://shadcnblocks.com"
items={[
  "Easy Integration",
  "24/7 Support",
  "Customizable Design",
  "Scalable Performance",
  "Hundreds of Blocks"
]}
/> */}
        {/* <AdsBanner /> */}
        <CTA />
       
     
    </>
  );
}
