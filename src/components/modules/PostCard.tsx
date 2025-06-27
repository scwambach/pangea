import Link from "next/link";
import { ImageObject } from "./ImageObject";
import { bgTheme, logo } from "@/utils/themes";
import { buttonClasses } from "@/utils/buttonClasses";
import { CustomImageProps } from "@/utils/types";

export interface PostCardProps {
  _id: string;
  title: string;
  slug: string;
  description: string;
  image: CustomImageProps;
  attachedLocation: string;
  categories: {
    _id: string;
    title: string;
    slug: string;
  }[];
}

export const PostCard = ({
  slug,
  title,
  description,
  image,
  attachedLocation,
  _id,
}: PostCardProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      key={_id}
      className="flex flex-col gap-10 items-center opacity-100 hover:opacity-80 transition-all duration-300"
    >
      <div className="relative h-[200px] tablet-md:h-[354px] w-full ">
        <ImageObject
          imageWidth={568}
          {...image}
          className="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none z-0"
        />
        <div
          className={`${bgTheme(attachedLocation)} w-[100px] h-[100px] flex justify-center items-center z-10 absolute top-0 left-4 p-4`}
        >
          {logo({
            slug: attachedLocation,
            color: "white",
            className: "w-[70px] h-[70px]",
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <p className="text-pangea text-center uppercase font-black tracking-widest tablet-md:text-[22px]">
          {title}
        </p>
        <p className="hidden text-pretty leading-[1.3] tablet-md:line-clamp-2 max-w-[400px]">
          {description}
        </p>
        <p className={`${buttonClasses} mt-2 px-8 bg-black`}>Read more</p>
      </div>
    </Link>
  );
};
