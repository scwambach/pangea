import { ImageObject } from "@/components/modules/ImageObject";
import { ArrowRight } from "@/icons";
import { POST } from "@/queries/post";
import { customBlockComponents } from "@/utils/customBlockComponents";
import { getLiveData } from "@/utils/pageData";
import { bgTheme, logo } from "@/utils/themes";
import { PostProps } from "@/utils/types";
import { urlFor } from "@/utils/urlFor";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const { post } = await params;
  const {
    data,
  }: {
    data: PostProps;
  } = await getLiveData({
    query: POST,
    params: {
      post,
    },
    usePreview: false,
  });

  if (!data) {
    notFound();
  }

  return {
    title: `${data.title} | Blog | Pangea`,
    description: data.description,
    openGraph: {
      images: `${urlFor(data.mainImage.imageFor).width(600)}`,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const { post } = await params;
  const {
    data,
  }: {
    data: PostProps;
  } = await getLiveData({
    query: POST,
    params: {
      post,
    },
    usePreview: false,
  });

  if (!data) {
    notFound();
  }

  return (
    <div>
      <div className="w-full flex-col flex gap-16 max-w-[882px] mx-auto px-4 py-24">
        <div className="text-center flex flex-col gap-8">
          <h1 className="text-[45px] text-pretty font-extrabold">
            {data.title}
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p>Location:</p>
            <Link
              href={
                data.attachedLocation.isActive
                  ? `/${data.attachedLocation.slug}`
                  : data.attachedLocation.externalUrl || "#"
              }
              className="text-[18px] tracking-wide font-bold text-pangea uppercase hover:opacity-80 transition-all ease-in-out"
            >
              {data.attachedLocation?.name}
            </Link>
          </div>
        </div>
        <div className="relative w-full h-[400px]">
          <div
            className={`${bgTheme(data.attachedLocation.slug)} w-[100px] h-[100px] flex justify-center items-center z-10 absolute top-0 left-4 p-4`}
          >
            {logo({
              slug: data.attachedLocation.slug,
              color: "white",
              className: "w-[70px] h-[70px]",
            })}
          </div>
          <ImageObject
            {...data.mainImage}
            className="w-full h-[400px] object-cover absolute top-0 left-0 "
          />
        </div>
        <div className="flex flex-col gap-4 max-w-[750px] mx-auto">
          <PortableText
            value={data.content}
            components={customBlockComponents}
          />
        </div>
        <div className="flex justify-between items-center">
          {data.previousPost ? (
            <Link
              href={`/blog/${data.previousPost?.slug}`}
              className="uppercase tracking-wide hover:text-paprika transition-all ease-in-out flex items-center gap-2"
            >
              <ArrowRight
                className="w-[25px] tablet:w-auto h-auto rotate-180 -translate-y-[1px]"
                color="var(--color-pangea"
              />
              <span className="leading-[1] hidden tablet:block">
                {data.previousPost?.title}
              </span>
            </Link>
          ) : (
            <Link
              href="/blog"
              className="uppercase tracking-wide hover:text-paprika transition-all ease-in-out flex items-center gap-2"
            >
              <ArrowRight
                className="w-[25px] tablet:w-auto h-auto rotate-180 -translate-y-[1px]"
                color="var(--color-pangea"
              />
              <span className="leading-[1] hidden tablet:block">
                Back to Blog
              </span>
            </Link>
          )}
          {data.nextPost ? (
            <Link
              href={`/blog/${data.nextPost?.slug}`}
              className="uppercase tracking-wide hover:text-paprika transition-all ease-in-out flex items-center gap-2"
            >
              <span className="leading-[1] hidden tablet:block text-right">
                {data.nextPost?.title}
              </span>
              <ArrowRight
                className="w-[25px] tablet:w-auto h-auto  -translate-y-[1px]"
                color="var(--color-pangea"
              />
            </Link>
          ) : (
            <Link
              href="/blog"
              className="uppercase tracking-wide hover:text-paprika transition-all ease-in-out flex items-center gap-2"
            >
              <span className="leading-[1] hidden tablet:block text-right">
                Back to Blog
              </span>
              <ArrowRight
                className="w-[25px] tablet:w-auto h-auto  -translate-y-[1px]"
                color="var(--color-pangea"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
