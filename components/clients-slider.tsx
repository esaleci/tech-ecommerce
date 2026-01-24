import { cn } from "@/lib/utils";
import { LogoCloud } from "./logo-cloud";

export default function ClientsSlider() {
  return (
    <div className="    w-full place-content-center py-5 md:py-20">
   

      <section className="relative mx-auto max-w-7xl">
        <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
          <span className="text-muted-foreground">Trusted by teams we’ve partnered with</span>
        </h2>
        <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

        <LogoCloud logos={logos} />

        <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
      </section>
    </div>
  );
}


const logos = [

  {
    src: "/clients/21casino.png",
    alt: "Supabase Logo",
 
  },
  {
    src: "/clients/bigflexlifescience.jpg",
    alt: "OpenAI Logo",
  
  },
  {
    src: "/clients/logicscloud.png",
    alt: "Turso Logo",  
   
  },
  {
    src: "/clients/equitas_small_finance.jpeg",
    alt: "Vercel Logo",
   
  },
  {
    src: "/clients/niyox.png",
    alt: "Niox Logo",
   
  },
 
];
