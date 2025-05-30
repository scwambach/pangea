import mediaRowBg from "@/images/tasteBg.png";
import { MediaCardRowProps } from "@/utils/types";
import Image from "next/image";
import { MediaCard } from "./modules/MediaCard";

export const MediaCardRow = ({ items }: { items: MediaCardRowProps[] }) => {
  return (
    <section className="relative px-4 py-[100px]">
      <Image
        src={mediaRowBg.src}
        width={mediaRowBg.width}
        height={mediaRowBg.height}
        placeholder="blur"
        blurDataURL={mediaRowBg.blurDataURL}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 select-none pointer-events-none"
      />
      <div className="max-w-[1200px] mx-auto">
        <div className="grid tablet:grid-cols-2 tablet:text-center tablet-xl:grid-cols-3 gap-8 desktop-lg:gap-[60px]">
          {items.map((item) => (
            <MediaCard key={item._key} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
