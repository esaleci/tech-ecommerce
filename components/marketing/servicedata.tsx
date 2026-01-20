import { BarChartIcon, BookOpenCheckIcon, BrainCogIcon, CircleFadingPlusIcon, HandCoinsIcon, ImagesIcon, MailsIcon, MonitorSmartphoneIcon, PaletteIcon, PanelsTopLeftIcon, PhoneCall, PrinterCheckIcon, ProjectorIcon, SnailIcon, SquareDashedMousePointerIcon, TabletSmartphoneIcon, UndoIcon, WifiPenIcon } from "lucide-react";
import { ReactNode } from "react";


type ServiceItem = {
  title: string;
  content: ReactNode;
  icon: ReactNode;
  bgColor: string;
};

export const digitalMarketingServices: ServiceItem[] = [
  {
    title: "Pay Per Click Advertising (PPC)",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Performance-driven PPC campaigns designed to attract high-intent users,
        maximize ad spend efficiency, and generate measurable conversions.
      </p>
    ),
    icon: <HandCoinsIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "primary-dark",
  },
  {
    title: "Search Engine Optimization",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Strategic SEO solutions that improve search visibility, increase organic
        traffic, and build long-term authority across search engines.
      </p>
    ),
    icon: <BrainCogIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "secondary",
  },
  {
    title: "Social Media Marketing",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Data-led social media strategies focused on brand awareness, audience
        engagement, and consistent growth across key platforms.
      </p>
    ),
    icon: <CircleFadingPlusIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "accent",
  },
  {
    title: "Mobile Marketing & Advertising",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Mobile-first marketing campaigns optimized to reach users at the right
        moment, drive action, and support multi-device journeys.
      </p>
    ),
    icon: <MonitorSmartphoneIcon className="w-6 h-6 text-slate-800" />,
    bgColor: "slate-100",
  },
  {
    title: "Email Marketing Services",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Targeted email marketing solutions built to nurture leads, retain
        customers, and deliver measurable ROI through personalized messaging.
      </p>
    ),
    icon: <MailsIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "accent",
  },
  {
    title: "Analytics & Reporting",
    content: (
      <p className="text-sm leading-6 text-slate-600">
        Actionable analytics and reporting that track performance, uncover
        insights, and support smarter marketing decisions.
      </p>
    ),
    icon: <BarChartIcon className="w-6 h-6 text-slate-100" />,
    bgColor: "primary-dark",
  },
];

