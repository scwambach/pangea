"use client";
import { useState } from "react";
import { SectionHeading } from "./modules/SectionHeading";
import { ButtonLink } from "./modules/ButtonLink";
import { textTheme } from "@/utils/themes";
import { MenuItemProps, SingleMenuProps } from "@/utils/types";
import { FaCameraRetro } from "react-icons/fa";
import { ImageObject } from "./modules/ImageObject";
import { LuVegan } from "react-icons/lu";
import { PiPlant } from "react-icons/pi";
import { TbWheat } from "react-icons/tb";

const MenuItem = (item: MenuItemProps) => {
  const [openImage, setOpenImage] = useState(false);
  return (
    <div key={item._key} className="flex flex-col gap-4">
      <div>
        <div className="flex justify-between items-start gap-4">
          {item.name && (
            <p className="font-bold flex gap-4">
              {item.name}
              {item.image && (
                <button
                  className="cursor-pointer"
                  onClick={() => setOpenImage(!openImage)}
                >
                  <FaCameraRetro
                    color={openImage ? "var(--color-paprika)" : undefined}
                  />
                </button>
              )}
            </p>
          )}
          {item.price && <p>{item.price}</p>}
        </div>
        {item.description && <p>{item.description}</p>}
        <div className="flex flex-wrap mt-2">
          {item.isVegetarian && (
            <span className="flex items-center gap-2 mr-4">
              <PiPlant size={24} />
              is vegetarian
            </span>
          )}
          {item.isVegan && (
            <span className="flex items-center gap-2 mr-4">
              <LuVegan size={18} />
              is vegan
            </span>
          )}
          {item.isGlutenFree && (
            <span className="flex items-center gap-2 mr-4">
              <TbWheat size={18} />
              is gluten free
            </span>
          )}
          {item.canBeVegetarian && (
            <span className="flex items-center gap-2 mr-4">
              <PiPlant size={24} color="var(--color-pangea)" />
              can be made vegetarian
            </span>
          )}
          {item.canBeVegan && (
            <span className="flex items-center gap-2 mr-4">
              <LuVegan size={18} color="var(--color-pangea)" />
              can be made vegan
            </span>
          )}
          {item.canBeGlutenFree && (
            <span className="flex items-center gap-2 mr-4">
              <TbWheat size={18} color="var(--color-pangea)" />
              can be made gluten free
            </span>
          )}
        </div>
      </div>
      {item.image && openImage && (
        <div className="max-w-[600px]">
          <ImageObject {...item.image} className="w-full h-auto" />
        </div>
      )}
    </div>
  );
};

export const Menus = ({
  items,
  fullMenu,
  slug,
}: {
  slug: string;
  fullMenu?: string;
  items: SingleMenuProps[];
}) => {
  const [activeMenu, setActiveMenu] = useState<SingleMenuProps | undefined>();
  return (
    <section className="flex flex-col gap-8 py-[100px] px-4 tablet-md:px-8">
      <SectionHeading
        title="Our Menus"
        className={textTheme(slug)}
        element="h2"
      />
      <div className="flex flex-col tablet-md:flex-row tablet-md:flex-wrap tablet-md:justify-center tablet-md:items-center w-full tablet-md:max-w-[1090px] tablet-md:mx-auto gap-8">
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
        <div className="flex flex-col gap-16 max-w-[1090px] w-full mx-auto">
          <div className="text-center flex flex-col gap-4 items-center justify-center w-full mt-8">
            <p
              className={`menuTitle ${textTheme(slug)} mobile-lg:px-8 bg-white text-center uppercase font-black tracking-widest text-[26px] relative mb-4`}
            >
              {activeMenu.name}
            </p>
            {activeMenu.menu && (
              <ButtonLink
                href={activeMenu.menu}
                className="text-white px-10 py-2 w-full max-w-[300px]"
                color="bg-black"
                text="Download Menu"
              />
            )}
            {fullMenu && (
              <ButtonLink
                href={fullMenu}
                className="text-white px-10 py-2 w-full max-w-[300px]"
                color="bg-black"
                text="Download Full Menu"
              />
            )}
          </div>
          {activeMenu.menuSections && (
            <div className="w-full max-w-[800px] mx-auto flex flex-col gap-16">
              <p>
                <FaCameraRetro className="inline-block" /> = Click this to view
                an image of the item.
              </p>
              {activeMenu.menuSections.map((section) => (
                <div key={section._key} className="flex flex-col gap-4">
                  {section.title && (
                    <p className="font-extrabold text-xl uppercase tracking-widest text-center">
                      {section.title}
                    </p>
                  )}
                  {section.description && (
                    <p className="opacity-80 max-w-[500px] mb-4 text-[14px] mx-auto text-center">
                      {section.description}
                    </p>
                  )}
                  {section.items && (
                    <div className="flex flex-col gap-10">
                      {section.items.map((item) => (
                        <MenuItem key={item._key} {...item} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          <p className="opacity-40 max-w-[500px] text-[14px] mx-auto text-center">
            {activeMenu.footnote}
          </p>
        </div>
      )}
    </section>
  );
};
