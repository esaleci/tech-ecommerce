"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface AltBTLSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  quote: string;
  authorName: string;
  authorPosition: string;
  // authorImage?: string;
  highlightedText?: string;
}


// <Testimonial
// companyLogo="https://assets.rapidui.dev/testimonials/companies/vercel.svg"
// quote="Webtics delivers powerful insights that turn complex data into actionable decisions"
// highlightedText="Webtics"
// authorName="Guillermo Rauch"
// authorPosition="CEO, Vercel"
// authorImage="https://assets.rapidui.dev/testimonials/people/guillermo-rauch.webp"
// />
// );



export default function AltBTLSection({
 
  title,
  quote,
  authorName,
  authorPosition,
  // authorImage,
  highlightedText,
  className,
  ...props
}: AltBTLSectionProps) {
  const formattedQuote = highlightedText
    ? quote.replace(
        highlightedText,
        `<strong class="font-semibold">${highlightedText}</strong>`
      )
    : quote;

  return (
    <div
      className={cn("py-8 md:py-10 lg:py-16 xl:py-24", className)}
      {...props}
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 ">
        <div className="flex flex-col items-center">
          {title && (
            <div className="mb-7 relative pb-4 w-64 text-center">
              <h3 className="text-2xl font-bold ">{title}</h3>
            </div>
          )}
          <p 
            className="max-w-xl text-balance text-left text-xl sm:text-2xl text-foreground"
            dangerouslySetInnerHTML={{ __html: `"${formattedQuote}"` }}
          />
          <h5 className="mt-5 font-medium text-muted-foreground">
            {authorName}
          </h5>
          <h5 className="mt-1.5 font-medium text-foreground/40">
            {authorPosition}
          </h5>
          {/* {authorImage && ( */}
            <div className="mt-5 relative px-5 py-3 rounded-xl overflow-hidden bg-secondary hover:bg-accent transition-all duration-300">
            <Link
            href="/atl-btl"
            className=" text-lg font-medium text-white "
          >
            View ATL & BTL services
          </Link>
              {/* <Image
                src={authorImage}
                alt={authorName}
                fill
                className="object-cover"
              /> */}
            </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
