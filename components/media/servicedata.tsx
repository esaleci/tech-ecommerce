import { PrinterCheckIcon,   RadioReceiverIcon, RadiusIcon, ScanFaceIcon, Share2Icon, SirenIcon, TabletSmartphoneIcon, Tv2Icon, UndoIcon } from "lucide-react";
import { ReactNode } from "react";


type ServiceItem = {
  title: string;
  content: ReactNode;
  icon: ReactNode;
  bgColor: string;
};

export const servicesMedia: ServiceItem[] = [
  {
    title: "Print Advertising",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Strategic print advertising solutions designed to deliver brand
        visibility, targeted reach, and measurable audience impact.
      </p>
    ),
    icon: <PrinterCheckIcon className="w-6 h-6 text-slate-800" />,
    bgColor: "slate-100",
  },
  {
    title: "Radio Advertising",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        High-reach radio advertising campaigns that connect brands with
        engaged audiences through impactful audio messaging.
      </p>
    ),
    icon: <RadioReceiverIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "accent",
  },
  {
    title: "Television Advertising",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Television advertising strategies built to maximize brand awareness,
        audience trust, and large-scale market penetration.
      </p>
    ),
    icon: <Tv2Icon className="w-6 h-6 text-slate-100" />,
    bgColor: "primary-dark",
  },
  {
    title: "Digital Media",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Data-driven digital media solutions that optimize channel mix,
        audience targeting, and campaign performance.
      </p>
    ),
    icon: <TabletSmartphoneIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "secondary",
  },
  {
    title: "Corporate Events",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Professionally managed corporate events designed to strengthen
        brand presence and create lasting business impressions.
      </p>
    ),
    icon: <RadiusIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "primary",
  },
  {
    title: "Consumer Connect Programs",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Consumer engagement programs focused on building meaningful brand
        connections and driving real customer interaction.
      </p>
    ),
    icon: <Share2Icon className="w-6 h-6 text-slate-100" />,
    bgColor: "accent",
  },
  {
    title: "Brand Activations",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        High-impact brand activation campaigns designed to generate awareness,
        engagement, and immediate audience response.
      </p>
    ),
    icon: <SirenIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "primary-dark",
  },
  {
    title: "Social & Cultural Events",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Curated social and cultural events that enhance brand storytelling
        and create memorable consumer experiences.
      </p>
    ),
    icon: <ScanFaceIcon className="w-6 h-6 text-slate-800" />,
    bgColor: "slate-100",
  },
];

