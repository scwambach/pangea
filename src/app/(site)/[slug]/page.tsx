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
import { notFound } from "next/navigation";

export default async function Home({ params }: any) {
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
      <Menus {...data.menus} />
      <Features {...data.featuresBanner} />
      <RecentPosts {...data.relatedPosts} />
      <CtaBanner {...data.ctaBanner} />
      <Newsletter socials={data.socialLinks} />
      <ImageGrid items={data.gallery} />
    </>
  );
}
