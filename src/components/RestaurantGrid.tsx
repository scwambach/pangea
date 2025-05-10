import { LocationCard } from "./LocationCard";

export const RestaurantGrid = ({
  items,
}: {
  items: {
    name: string;
    slug: string;
    flavorsFrom: string[];
    orderOnlineLink: string;
  }[];
}) => {
  return (
    <section className="max-w-[1250px] mx-auto px-4 overflow-hidden pt-[80px] pb-[120px]">
      <h2 className="text-center uppercase text-pangea font-black tracking-widest pb-[50px] text-[26px]">
        Select your destination
      </h2>
      <div className="grid tablet:grid-cols-2 gap-[30px] tablet-xl:grid-cols-4">
        {items.map((item) => (
          <LocationCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
};
