import { RestaurantGrid } from "@/components/RestaurantGrid";
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

  const gridData = data.restaurants.map((restaurant) => {
    return {
      name: restaurant.name,
      slug: restaurant.slug,
      flavorsFrom: restaurant.flavorsFrom,
      orderOnlineLink: restaurant.orderOnlineLink,
    };
  });

  return (
    <div>
      <RestaurantGrid items={gridData} />
    </div>
  );
}
