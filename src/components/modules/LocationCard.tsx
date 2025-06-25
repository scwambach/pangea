import { bgTheme, logo, textTheme } from "@/utils/themes";
import { ButtonLink } from "./ButtonLink";
import { Address } from "@/utils/types";
import Link from "next/link";

export const LocationCard = ({
  name,
  slug,
  isActive = true,
  externalUrl,
  flavorsFrom,
  address,
  orderOnlineLink,
}: {
  name: string;
  slug: string;
  address?: Address;
  isActive?: boolean;
  externalUrl?: string;
  flavorsFrom: string[];
  orderOnlineLink?: string;
}) => {
  return (
    <div
      key={slug}
      className="text-center  bg-offwhite relative top-[72.5px] mb-[30px] tablet:mb-[60px] tablet:max-w-[300px] sm:max-w-none mx-auto w-full flex items-center mobile-lg:items-stretch tablet:items-center flex-col mobile-lg:flex-row tablet:flex-col"
    >
      <Link
        href={isActive ? `${slug}#menu` : externalUrl || "#"}
        className={`${bgTheme(slug)} pb-4 tablet:pb-7 px-4 w-full mobile-lg:max-w-[170px] tablet:max-w-none tablet:min-h-[145px] flex flex-col justify-between`}
      >
        <div className="flex justify-center items-center relative h-[120px] w-[120px] bg-white rounded-full mx-auto shadow-icon -mb-[15px] tablet:-mb-[60px] -top-[30px] tablet:-top-[60px]">
          {logo({
            slug: slug,
            className: "h-[87px] mx-auto w-auto",
          })}
        </div>
        <p className="tablet:text-[18px] font-black tracking-wider text-white uppercase">
          {name}
        </p>
      </Link>

      {address && (
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${address.street},${address.cityStateZip}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-[13px] px-4 mt-[30px] inline-block mobile-lg:hidden tablet:inline-block cursor-pointer hover:underline"
        >
          {address.street}
          <span className="tablet:block inline-block w-1" />
          {address.cityStateZip}
        </a>
      )}
      <div className="tablet:py-[30px] py-4 mobile-lg:py-4 flex flex-col h-full justify-center tablet:justify-between gap-4 tablet:gap-[30px] w-full">
        {address && (
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${address.street},${address.cityStateZip}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black text-[13px] px-4 hidden mobile-lg:inline-block tablet:hidden cursor-pointer hover:underline"
          >
            {address.street}
            <span className="tablet:block inline-block w-1" />
            {address.cityStateZip}
          </a>
        )}
        {flavorsFrom && (
          <div className="px-[16px] text-[16px] mobile-lg:text-xs tablet:text-[16px] tablet:max-w-none mx-auto">
            <p className={`${textTheme(slug)} uppercase font-bold`}>
              Flavors from:
            </p>
            <p className="text-pretty">{flavorsFrom.join(", ")}</p>
          </div>
        )}

        <div className="flex tablet:flex-col gap-2 px-4 tablet:px-[30px]">
          <span className="w-full hidden tablet:block">
            <ButtonLink
              href={isActive ? `${slug}#menu` : externalUrl || "#"}
              color={bgTheme(slug)}
              text={isActive ? "View the Menu" : "Website"}
              className="px-4 text-[16px] w-full"
            />
          </span>
          <span className="w-full tablet:hidden">
            <ButtonLink
              href={isActive ? `${slug}#menu` : externalUrl || "#"}
              color={bgTheme(slug)}
              text={isActive ? "Menu" : "Website"}
              className="px-4 text-[14px] w-full"
            />
          </span>

          {orderOnlineLink && (
            <span className="w-full hidden tablet:block">
              <ButtonLink
                href={orderOnlineLink}
                color={bgTheme(slug)}
                text="Order online"
                className="px-4 text-[16px] w-full"
              />
            </span>
          )}
          {orderOnlineLink && (
            <span className="w-full tablet:hidden">
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
