import { ButtonLink } from "@/components/modules/ButtonLink";
import { ImageObject } from "@/components/modules/ImageObject";
import { BLOGROLL } from "@/queries/blog";
import { getLiveData } from "@/utils/pageData";
import { bgTheme, logo } from "@/utils/themes";
import { CustomImageProps } from "@/utils/types";

export default async function Blog() {
  const {
    data,
  }: {
    data: {
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
    }[];
  } = await getLiveData({
    query: BLOGROLL,
    params: {
      slug: "",
    },
    usePreview: false,
  });

  return (
    <section className="px-4 text-center">
      <h1 className="font-extrabold text-[45px] text-black py-12">
        Sed feugiat, sem ut laoreet.
      </h1>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-16 max-w-[1200px] mx-auto">
        {data.map((item) => (
          <div key={item._id} className="flex flex-col gap-8 items-center">
            <div className="relative h-[354px] w-full ">
              <ImageObject
                {...item.image}
                className="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none z-0"
              />
              <div
                className={`${bgTheme(item.attachedLocation)} w-[100px] h-[100px] flex justify-center items-center z-10 absolute top-0 left-4 p-4`}
              >
                {logo({
                  slug: item.attachedLocation,
                  color: "white",
                  className: "w-[70px] h-[70px]",
                })}
              </div>
            </div>
            <p className="text-pangea text-center uppercase font-black tracking-widest text-[22px]">
              {item.title}
            </p>
            <p className=" text-pretty leading-[1.3] line-clamp-2">
              {item.description}
            </p>
            <ButtonLink
              text="Read more"
              href={`/blog/${item.slug}`}
              color="bg-black"
              className="px-8"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
