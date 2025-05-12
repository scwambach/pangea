import { LocationCard } from "./modules/LocationCard";
import { SectionHeading } from "./modules/SectionHeading";

export const RestaurantGrid = ({
  items,
}: {
  items: {
    name: string;
    slug: string;
    isActive?: boolean;
    externalUrl?: string;
    flavorsFrom: string[];
    orderOnlineLink: string;
  }[];
}) => {
  return (
    <section className="max-w-[1250px] mx-auto px-4 overflow-hidden pt-[80px] pb-[120px]">
      <SectionHeading
        title="Select your destination"
        className="text-pangea pb-[50px]"
        element="h2"
      />

      <div className="grid tablet:grid-cols-2 gap-[30px] tablet-xl:grid-cols-4">
        {items.map((item) => (
          <LocationCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
};
