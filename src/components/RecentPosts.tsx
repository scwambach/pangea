import { blogBgTheme, textTheme } from "@/utils/themes";
import { PostItemProps } from "@/utils/types";
import Image from "next/image";
import { SectionHeading } from "./modules/SectionHeading";
import { MediaCard } from "./modules/MediaCard";

export const RecentPosts = ({
  slug,
  name,
  items,
}: {
  slug: string;
  name: string;
  items: PostItemProps[];
}) => {
  return (
    <section className="relative px-8 py-[100px] border-y-[2px] tablet-lg:border-none border-offwhite">
      <Image
        src={blogBgTheme(slug).src}
        alt=""
        height={blogBgTheme(slug).height}
        width={blogBgTheme(slug).width}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 select-none pointer-events-none"
        placeholder="blur"
        blurDataURL={blogBgTheme(slug).blurDataURL}
      />
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          title={`Explore more from ${name}`}
          className="text-white pb-[50px]"
          element="h3"
        />
        <div className="grid tablet:grid-cols-2 tablet:text-center tablet-xl:grid-cols-3 gap-8 desktop-lg:gap-[60px]">
          {items.map((item) => (
            <MediaCard
              key={item._id}
              {...item}
              buttonText="Read more"
              textColor={textTheme(slug)}
              buttonColor="bg-black"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
