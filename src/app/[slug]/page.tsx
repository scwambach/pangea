import { CtaBanner } from "@/components/CtaBanner";
import { ImageGrid } from "@/components/ImageGrid";
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

  if (!data) {
    notFound();
  }

  return (
    <>
      <RestaurantHero {...data.banner} />
      <CtaBanner {...data.ctaBanner} />
      <ImageGrid items={data.gallery} />
    </>
  );
}
