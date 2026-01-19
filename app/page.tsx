import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import WorkWith from '@/components/workwith';
import StructuredData from '@/components/StructuredData';
import Hero3 from '@/components/Hero3';
import FeatureOne from '@/components/featureone';
import FeatureTow from '@/components/featuretow';
import FeatureTree from '@/components/featuretree';
import AdsBanner from '@/components/adsbanner';
import Footer from '@/components/footer';
import CTA from '@/components/cta';

export default function Home() {
  return (
    <>
      {/* <StructuredData /> */}
    
        <Hero3 />
        <FeatureOne />
        <FeatureTow />
        <FeatureTree />
        <AdsBanner />
        <CTA />
        {/* <Footer /> */}
        {/* <About />
        <Services />
        <Portfolio />
        <Features />
        <WorkWith />
        <Contact /> */}
     
    </>
  );
}
