import tasteBg from "@/images/tasteBg.png";
import { TasteMakerItemProps } from "@/utils/types";
import Image from "next/image";
import { MediaCard } from "./modules/MediaCard";
import { SectionHeading } from "./modules/SectionHeading";

export const TasteMakers = ({ items }: { items: TasteMakerItemProps[] }) => {
  return (
    <section className="relative px-8 py-[100px]">
      <Image
        src={tasteBg.src}
        width={tasteBg.width}
        height={tasteBg.height}
        placeholder="blur"
        blurDataURL={tasteBg.blurDataURL}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 select-none pointer-events-none"
      />
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          title="For our Tastemakers"
          className="text-white pb-[50px]"
          element="h3"
        />
        <div className="grid tablet:grid-cols-2 tablet:text-center tablet-xl:grid-cols-3 gap-8 desktop-lg:gap-[60px]">
          {items.map((item) => (
            <MediaCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
