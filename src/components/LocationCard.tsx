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
      className="text-center bg-offwhite relative top-[72.5px] mb-[30px] tablet:mb-[60px] tablet:max-w-[300px] sm:max-w-none mx-auto w-full flex items-stretch tablet:flex-col"
    >
      <div
        className={`${bgTheme(slug)} pb-4 tablet:pb-7 px-4 tablet:px-7 w-full max-w-[170px] tablet:max-w-none tablet:min-h-[145px] flex flex-col justify-between`}
      >
        <div className="flex justify-center items-center relative h-[120px] w-[120px] bg-white rounded-full mx-auto shadow-icon -mb-[15px] tablet:-mb-[60px] -top-[30px] tablet:-top-[60px]">
          {logo({
            slug: slug,
            className: "h-[87px] mx-auto w-auto",
          })}
        </div>
        <p className="text-xl font-black tracking-wider text-white uppercase">
          {name}
        </p>
      </div>
      <div className="tablet:py-[30px] flex flex-col h-full justify-center tablet:justify-between gap-4 tablet:gap-10 w-full">
        {flavorsFrom && (
          <div className="px-[16px] tablet:max-w-none mx-auto">
            <p className={`${textTheme(slug)} uppercase font-bold`}>
              Flavors from:
            </p>
            <p className="text-pretty">{flavorsFrom.join(", ")}</p>
          </div>
        )}

        <div className="flex tablet:flex-col gap-2 px-4 tablet:px-[30px]">
          <span className="hidden tablet:block">
            <ButtonLink
              href={`${slug}#menu`}
              color={bgTheme(slug)}
              text="View the Menu"
              className="px-4 text-[16px] w-full"
            />
          </span>
          <span className="tablet:hidden w-full">
            <ButtonLink
              href={`${slug}#menu`}
              color={bgTheme(slug)}
              text="Menu"
              className="px-4 text-[14px] w-full"
            />
          </span>

          {orderOnlineLink && (
            <span className="hidden tablet:block">
              <ButtonLink
                href={orderOnlineLink}
                color={bgTheme(slug)}
                text="Order online"
                className="px-4 text-[16px] w-full"
              />
            </span>
          )}
          {orderOnlineLink && (
            <span className="tablet:hidden w-full">
              <ButtonLink
                href={orderOnlineLink}
                color={bgTheme(slug)}
                text="Order"
                className="px-4 text-[14px] w-full"
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
