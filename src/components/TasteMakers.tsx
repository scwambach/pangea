import tasteBg from "@/images/tasteBg.png";
import { TasteMakerItemProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
export const TasteMakers = ({ items }: { items: TasteMakerItemProps[] }) => {
  return (
    <section className="relative px-8 py-[100px] text-center">
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
        <h3 className="text-white uppercase font-black tracking-widest pb-[50px] text-[26px]">
          For our Tastemakers
        </h3>
        <div className="grid tablet:grid-cols-2 tablet-xl:grid-cols-3 gap-8 desktop-lg:gap-[60px]">
          {items.map((item) => (
            <div
              className="bg-white p-[30px] flex flex-col gap-8 justitfy-between"
              key={item._id}
            >
              <p className="text-paprika leading-[1.2] font-[900] tracking-wider uppercase text-[26px]">
                {item.title}
              </p>
              <div className="relative h-[170px]">
                <Image
                  {...item.image}
                  placeholder="blur"
                  alt={item.title}
                  className="absolute top-0 left-0 w-full h-full object-cover  select-none pointer-events-none"
                />
              </div>
              <p className="text-lg text-pretty leading-[1.3]">
                {item.description}
              </p>
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-paprika block w-full text-white uppercase font-extrabold p-2 tracking-wide hover:opacity-80 transition-all duration-200 ease-in-out max-w-[220px] mx-auto"
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
