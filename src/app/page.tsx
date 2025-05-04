import { MapSelector } from "@/components/MapSelector";
import { RestaurantGrid } from "@/components/RestaurantGrid";
import { TasteMakers } from "@/components/TasteMakers";
import { HOME } from "@/queries/homepage";
import { getLiveData } from "@/utils/pageData";
import { HomePageProps } from "@/utils/types";

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
    <div>
      <MapSelector items={data.mapSelector} />
      <RestaurantGrid items={data.restaurantGrid} />
      <TasteMakers items={data.tasteMakers} />
    </div>
  );
}
