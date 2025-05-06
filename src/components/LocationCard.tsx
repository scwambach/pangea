import { bgTheme, logo, textTheme } from "@/utils/themes";
import { ButtonLink } from "./ButtonLink";

export const LocationCard = ({
  name,
  slug,
  flavorsFrom,
  orderOnlineLink,
}: {
  name: string;
  slug: string;
  flavorsFrom: string[];
  orderOnlineLink?: string;
}) => {
  return (
    <div
      key={slug}
      className="text-center bg-offwhite relative top-[72.5px] mb-[60px] max-w-[300px] sm:max-w-none mx-auto w-full flex flex-col"
    >
      <div
        className={`${bgTheme(slug)} pb-7 px-7 min-h-[145px] flex flex-col justify-between`}
      >
        <div className="flex justify-center items-center relative h-[120px] w-[120px] bg-white rounded-full mx-auto shadow-icon -mb-[60px] -top-[60px]">
          {logo({
            slug: slug,
            className: "h-[87px] mx-auto w-auto",
          })}
        </div>
        <p className="text-xl font-black tracking-wider text-white uppercase">
          {name}
        </p>
      </div>
      <div className="py-[30px] flex flex-col h-full justify-between gap-10">
        {flavorsFrom && (
          <div className="px-[16px]">
            <p className={`${textTheme(slug)} uppercase font-bold`}>
              Flavors from:
            </p>
            <p className="text-pretty">{flavorsFrom.join(", ")}</p>
          </div>
        )}

        <div className="flex flex-col gap-2 px-[30px]">
          <ButtonLink
            href={`${slug}#menu`}
            color={bgTheme(slug)}
            text="View the Menu"
            className="px-4"
          />

          {orderOnlineLink && (
            <ButtonLink
              href={orderOnlineLink}
              color={bgTheme(slug)}
              text="Order online"
              className="px-4"
            />
          )}
        </div>
      </div>
    </div>
  );
};
