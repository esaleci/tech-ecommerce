import { BookOpenCheckIcon, ImagesIcon, MailsIcon, PaletteIcon, PanelsTopLeftIcon, PhoneCall, PrinterCheckIcon, ProjectorIcon, SnailIcon, SquareDashedMousePointerIcon, TabletSmartphoneIcon, UndoIcon, WifiPenIcon } from "lucide-react";
import { ReactNode } from "react";


type ServiceItem = {
  title: string;
  content: ReactNode;
  icon: ReactNode;
  bgColor: string;
};

export const services: ServiceItem[] = [
  {
    title: "UI/UX Design",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        User-focused UI/UX design that improves usability, solves real problems,
        and creates intuitive digital experiences.
      </p>
    ),
    icon: <PaletteIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "primary-dark",
  },
  {
    title: "Web Banners",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        High-impact web banner designs crafted to capture attention, communicate
        clearly, and drive engagement.
      </p>
    ),
    icon: <ProjectorIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "accent",
  },
  {
    title: "Marketing Communication Design & Concepts",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Strategic communication concepts that transform brand ideas into clear,
        consistent, and compelling visual messages.
      </p>
    ),
    icon: <PhoneCall className="w-6 h-6 text-slate-100" />,
    bgColor: "secondary",
  },
  {
    title: "Landing Pages Design",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Conversion-focused landing page designs built to guide users, increase
        engagement, and improve ROI.
      </p>
    ),
    icon: <PanelsTopLeftIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "accent",
  },
  {
    title: "Artworks",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Professional artwork and visual designs that reflect brand identity,
        quality standards, and creative excellence.
      </p>
    ),
    icon: <SquareDashedMousePointerIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "primary",
  },
  {
    title: "Print Ads & Magazines",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Print ads and magazine designs delivering strong visuals, clear
        messaging, and lasting brand recall.
      </p>
    ),
    icon: <PrinterCheckIcon className="w-6 h-6 text-slate-800" />,
    bgColor: "slate-100",
  },
  {
    title: "Photo & Color Corrections & Effects",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Professional photo editing, color correction, and effects to enhance
        image quality and visual consistency.
      </p>
    ),
    icon: <ImagesIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "secondary",
  },
  {
    title: "Book Designs",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Thoughtful book designs combining layout clarity, visual storytelling,
        and print-ready execution.
      </p>
    ),
    icon: <BookOpenCheckIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "accent",
  },
  {
    title: "Emailers Design",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Clean, responsive email designs focused on readability, brand alignment,
        and user engagement.
      </p>
    ),
    icon: <MailsIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "primary-dark",
  },
  {
    title: "Animation Videos",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Engaging animation videos designed to simplify ideas, tell stories, and
        strengthen brand communication.
      </p>
    ),
    icon: <SnailIcon className="w-6 h-6 text-slate-800" />,
    bgColor: "slate-100",
  },
  {
    title: "Mobile Sites",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Mobile-first website designs optimized for speed, usability, and seamless
        on-the-go experiences.
      </p>
    ),
    icon: <TabletSmartphoneIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "secondary",
  },
];
