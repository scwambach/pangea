import { ImageObject } from "@/components/modules/ImageObject";
import { BLOGROLL } from "@/queries/blog";
import { getLiveData } from "@/utils/pageData";
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
          <div key={item._id}>
            <div className="relative h-[354px]">
              <ImageObject
                {...item.image}
                className="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
            <p className="text-pangea text-center uppercase font-black tracking-widest text-[22px]">
              {item.title}
            </p>
            <p className=" text-pretty leading-[1.3] line-clamp-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
