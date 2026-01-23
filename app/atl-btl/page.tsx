
import CTA from "@/components/cta";
import HeroMedia from "@/components/media/hero";
import ServicesMedia from "@/components/media/services";


export default function CreativeContent() {
  return (
    <div className="flex flex-col ">
    <HeroMedia/>
    <ServicesMedia/>
    <CTA/>
    </div>
  );
}