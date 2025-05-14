"use client";
import { PopUpCtaProps } from "@/utils/types";
import { ButtonLink } from "./modules/ButtonLink";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";

export const PopUpCta = ({ heading, copy, button }: PopUpCtaProps) => {
  const [hasBeenClosed, setHasBeenClosed] = useState(true);
  useEffect(() => {
    const closePopUp = sessionStorage.getItem("closePopUp");
    if (closePopUp === "true") {
      setHasBeenClosed(true);
    } else {
      setHasBeenClosed(false);
    }
  }, [hasBeenClosed]);

  return !hasBeenClosed ? (
    <div className="fixed bottom-4  right-4 z-[999] text-center w-[calc(100%-32px)] max-w-[320px] bg-white border-[1px] border-gray-100 shadow-lg py-8 px-4 flex flex-col items-center gap-4">
      <button
        className="absolute top-2 right-2 hover:opacity-50 transition-opacity duration-200 cursor-pointer"
        onClick={() => {
          sessionStorage.setItem("closePopUp", "true");
          setHasBeenClosed(true);
        }}
      >
        <IoMdClose size={32} />
      </button>
      {heading && (
        <p className="text-lg font-extrabold uppercase text-pangea tracking-widest">
          {heading}
        </p>
      )}
      {copy && <p className="text-sm">{copy}</p>}
      {button && button.href && button.text && (
        <ButtonLink
          text={button.text}
          href={button.href}
          color="bg-black"
          className="mt-2 inline-block px-4 w-full text-white rounded"
        />
      )}
    </div>
  ) : (
    <></>
  );
};
