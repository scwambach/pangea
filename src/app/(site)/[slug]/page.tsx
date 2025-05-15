import { CtaBanner } from "@/components/CtaBanner";
import { Features } from "@/components/Features";
import { ImageGrid } from "@/components/ImageGrid";
import { Menus } from "@/components/Menus";
import { Newsletter } from "@/components/Newsletter";
import { RecentPosts } from "@/components/RecentPosts";
import { RestaurantHero } from "@/components/ResaurantHero";
import { RESTAURANT } from "@/queries/restaurant";
import { getLiveData } from "@/utils/pageData";
import { RestaurantProps } from "@/utils/types";
import { urlFor } from "@/utils/urlFor";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const {
    data,
  }: {
    data: RestaurantProps;
  } = await getLiveData({
    query: RESTAURANT,
    params: {
      slug,
    },
    usePreview: false,
  });

  if (!data || data.isActive === false) {
    notFound();
  }

  return {
    title: `${data.name} | Pangea`,
    openGraph: {
      images: `${urlFor(data.banner.backgroundImage.imageFor).width(600)}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const {
    data,
  }: {
    data: RestaurantProps;
  } = await getLiveData({
    query: RESTAURANT,
    params: {
      slug,
    },
    usePreview: false,
  });

  if (!data || data.isActive === false) {
    notFound();
  }

  return (
    <>
      <RestaurantHero {...data.banner} />
      <Menus {...data.menus} fullMenu={data.fullMenu} />
      <Features {...data.featuresBanner} />
      {data.relatedPosts.items.length > 0 && (
        <RecentPosts {...data.relatedPosts} name={data.name} />
      )}
      <CtaBanner {...data.ctaBanner} />
      <Newsletter socials={data.socialLinks} />
      <ImageGrid items={data.gallery} />
    </>
  );
}
