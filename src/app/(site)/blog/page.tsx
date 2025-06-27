import { Pagination } from "@/components/modules/Pagination";
import { PostCard } from "@/components/modules/PostCard";
import { BLOGROLL } from "@/queries/blog";
import { getLiveData } from "@/utils/pageData";
import { CustomImageProps } from "@/utils/types";

export const revalidate = 3600;

export const metadata = {
  title: "Blog | Pangea",
  description: "Sed feugiat, sem ut laoreet.",
};

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ p?: string }>;
}) {
  const { p } = await searchParams;
  const currentPage = parseInt(p || "1", 10);
  const itemsPerPage = 8;
  const start = (currentPage - 1) * itemsPerPage;

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
      start,
      limit: itemsPerPage,
    },
    usePreview: false,
  });

  const totalPages = Math.ceil(data.totalPostCount / itemsPerPage);

  return (
    <div className="px-4 text-center ">
      <h1 className="font-extrabold text-[28px] tablet-md:text-[45px] text-black pt-6 tablet-md:pt-12">
        Food for Thought
      </h1>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-16 max-w-[1200px] mx-auto mt-10 tablet-md:mt-16 mb-16">
        {data.posts.map((item) => (
          <PostCard key={item._id} {...item} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          totalItems={data.totalPostCount}
          itemsPerPage={itemsPerPage}
        />
      )}
    </div>
  );
}
