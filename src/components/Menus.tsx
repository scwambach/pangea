"use client";
import { useState } from "react";
import { SectionHeading } from "./modules/SectionHeading";
import { ButtonLink } from "./modules/ButtonLink";
import { textTheme } from "@/utils/themes";

export const Menus = ({
  items,
  slug,
}: {
  slug: string;
  items: {
    name: string;
    menu: string;
  }[];
}) => {
  const [activeMenu, setActiveMenu] = useState<
    | {
        name: string;
        menu: string;
      }
    | undefined
  >(items ? items[0] : undefined);
  return (
    <section className="flex flex-col gap-8 py-[100px] px-4 tablet-md:px-8">
      <SectionHeading
        title="Our Menus"
        className={textTheme(slug)}
        element="h2"
      />
      <div className="flex flex-col tablet-md:flex-row tablet-md:flex-wrap tablet-md:justify-center tablet-md:items-center w-full tablet-md:max-w-[1000px] tablet-md:mx-auto gap-8">
        {items?.map((item) => (
          <button
            key={item.name}
            className={`text-black uppercase tracking-widest text-[24px] tablet-md:w-[calc(33.3333%-24px)] cursor-pointer hover:underline${
              activeMenu?.name === item.name ? " activeMenu" : ""
            }`}
            onClick={() => {
              if (activeMenu?.name !== item.name) {
                setActiveMenu(item);
              }
            }}
          >
            {item.name}
          </button>
        ))}
      </div>

      {activeMenu && (
        <div className="text-center flex flex-col gap-4 items-center justify-center w-full max-w-[1000px] mx-auto mt-8">
          <p
            className={`menuTitle ${textTheme(slug)} mobile-lg:px-8 bg-white text-center uppercase font-black tracking-widest text-[26px] relative mb-4`}
          >
            {activeMenu.name}
          </p>
          <ButtonLink
            href={activeMenu.menu}
            className="text-white px-10 py-2"
            color="bg-black"
            text="Download Menu"
          />
        </div>
      )}
    </section>
  );
};
