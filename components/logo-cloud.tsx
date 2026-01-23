import { InfiniteSlider } from "@/components/infini-slider";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";


type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={isMobile ? 30 : 150} reverse duration={80} durationOnHover={25}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-12 select-none  dark:brightness-0 dark:invert"
            height={logo.height || "auto"}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width={logo.width || "auto"}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
