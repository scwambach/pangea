"use client";
import { logo } from "@/utils/themes";
import Link from "next/link";
import { Button } from "./modules/Button";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export const Header = ({
  items,
  tagline,
}: {
  tagline: string;
  items: {
    _key: string;
    isActive?: boolean;
    externalUrl?: string;
    text: string;
    href: string;
  }[];
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (open && !target.closest("nav") && !target.closest(".closeButton")) {
        setOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (open && event.key === "Escape") {
        setOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="bg-white relative z-20">
      <div className="max-w-[1370px] mx-auto relative flex justify-between items-center px-4">
        <div className="flex items-center justify-start gap-8">
          <Link
            href="/"
            title="Pangea"
            className="bg-pangea h-[101px] w-[104px] flex items-center justify-center"
          >
            {logo({
              slug: "pangea-kitchen",
              color: "#fff",
              className: "h-[74px] w-auto",
            })}
          </Link>
          <span className="hidden tablet-md:block uppercase tracking-widest font-[900] text-pangea text-[24px]">
            {tagline}
          </span>
        </div>
        <Button
          text="Locations"
          color="bg-brick"
          onClick={() => {
            if (open) {
              document.body.style.overflow = "auto";
            } else {
              if (window.innerWidth <= 768) {
                document.body.style.overflow = "hidden";
              }
            }
            setOpen(!open);
          }}
          className="px-6"
        />
        <nav
          className={`fixed tablet-md:absolute top-0 tablet-md:top-full w-full tablet-md:w-auto right-0 tablet-md:right-4 h-full tablet-md:h-auto flex flex-col text-black px-8 pb-8 transition-all duration-500 ease-in-out overflow-hidden bg-offwhite-translucent ${
            open ? "open" : "closed"
          }`}
        >
          <button
            onClick={() => setOpen(false)}
            className="closeButton tablet-md:hidden absolute z-10 top-4 right-[38px] cursor-pointer"
          >
            <IoClose size={40} color="#c09d4f" />
          </button>
          {items.map((item, index) => (
            <Link
              key={item._key}
              href={item.isActive ? `/${item.href}` : item.externalUrl || "#"}
              target={item.isActive ? "_self" : "_blank"}
              rel={item.isActive ? undefined : "noopener noreferrer"}
              tabIndex={open ? 0 : -1} // <-- add this line
              className={`flex gap-4 items-center font-extrabold py-4 tracking-wide uppercase text-lg cursor-pointer relative z-10 border-b-[2px] border-tan transition-opacity duration-300 ease-in-out tablet-md:hover:text-tan ${
                open ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => {
                document.body.style.overflow = "auto";
                setOpen(false);
              }}
            >
              {logo({
                slug: item.href,
                color: "#2d291f",
                className: "h-[51px] w-auto",
              })}
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
