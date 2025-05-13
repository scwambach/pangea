import { Pagination } from "@/components/modules/Pagination";
import { PostCard } from "@/components/modules/PostCard";
import { BLOGROLL } from "@/queries/blog";
import { getLiveData } from "@/utils/pageData";
import { CustomImageProps } from "@/utils/types";

export default async function Blog() {
  const {
    data,
  }: {
    data: {
      posts: {
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
      totalPostCount: number;
    };
  } = await getLiveData({
    query: BLOGROLL,
    params: {
      slug: "",
    },
    usePreview: false,
  });

  return (
    <div className="px-4 text-center">
      <h1 className="font-extrabold text-[45px] text-black py-12">
        Sed feugiat, sem ut laoreet.
      </h1>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-16 max-w-[1200px] mx-auto">
        {data.posts.map((item) => (
          <PostCard key={item._id} {...item} />
        ))}
      </div>
      <Pagination total={data.totalPostCount} />
    </div>
  );
}
