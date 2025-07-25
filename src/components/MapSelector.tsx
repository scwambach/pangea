"use client";
import { decorationTheme, logo } from "@/utils/themes";
import { MapSelectorItemProps } from "@/utils/types";
import { useState } from "react";
import { ImageObject } from "./modules/ImageObject";
import defaultMap from "@/images/defaultMap.png";
import Image from "next/image";

export const MapSelector = ({
  heading,
  items,
}: {
  heading: string;
  items: MapSelectorItemProps[];
}) => {
  const [activeLocation, setActiveLocation] = useState<MapSelectorItemProps>(
    items[0]
  );

  return (
    <section className="mapSelector bg-black text-white">
      <div className="relative overflow-hidden min-h-[196px] flex flex-col justify-center tablet-md:min-h-[744px] tablet-md:max-w-[1440px] mx-auto">
        <div className="mapNav px-4 flex flex-col gap-8 pt-[50px] pb-[50px] tablet-md:pb-[100px] tablet-md:pl-[50px] tablet-md:max-w-[420px] relative z-10">
          <h1 className="text-[32px] tablet-md:max-w-[306px] text-pretty text-center tablet-md:text-left leading-[1.3]">
            {heading}
          </h1>
          <div className="hidden tablet-md:flex flex-col gap-8">
            {items.map((item) => (
              <span
                key={item._id}
                onMouseOver={() => setActiveLocation(item)}
                className={`item flex items-center font-extrabold tracking-wide uppercase text-lg relative z-10 justify-start gap-8 border-b-[1px] pb-8 border-tan${activeLocation.slug === item.slug ? " active" : ""}`}
              >
                {logo({
                  slug: item.slug,
                  color: "#fff",
                  className: "h-[87px] w-auto",
                })}
                <span className={decorationTheme(item.slug)}>{item.name}</span>
              </span>
            ))}
          </div>
        </div>
        <ImageObject
          {...activeLocation.mapImage}
          alt={`${activeLocation.name} Map`}
          imageWidth={1200}
          className="hidden tablet-md:block absolute w-[1175px] top-1/2 object-cover -translate-y-1/2 right-0 h-[591px] pointer-events-none select-none"
        />
        <Image
          src={defaultMap.src}
          width={defaultMap.width}
          height={defaultMap.height}
          blurDataURL={defaultMap.blurDataURL}
          alt={`${activeLocation.name} Map`}
          className="block tablet-md:hidden absolute w-[1175px] top-1/2 object-contain -translate-y-1/2 right-0 h-[591px] pointer-events-none select-none"
        />
      </div>
    </section>
  );
};
