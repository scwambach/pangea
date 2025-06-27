import { CtaBanner } from "@/components/CtaBanner";
import { ImageGrid } from "@/components/ImageGrid";
import { MapSelector } from "@/components/MapSelector";
import { RestaurantGrid } from "@/components/RestaurantGrid";
import { MediaCardRow } from "@/components/MediaCardRow";
import { HOME } from "@/queries/homepage";
import { getLiveData } from "@/utils/pageData";
import { HomePageProps } from "@/utils/types";
import { Reviews } from "@/components/Reviews";

export const revalidate = 3600;

export default async function Home() {
  const {
    data,
  }: {
    data: HomePageProps;
  } = await getLiveData({
    query: HOME,
    params: {
      slug: "/",
    },
    usePreview: false,
  });

  return (
    <>
      <MapSelector {...data.mapSelector} />
      <ImageGrid items={data.introGallery} />
      <RestaurantGrid items={data.restaurantGrid} />
      <MediaCardRow items={data.mediaCardRow} />
      <CtaBanner {...data.ctaBanner} />
      <ImageGrid items={data.gallery} />
      <Reviews {...data.reviews} />
    </>
  );
}
