import { bgTheme, logo } from "@/utils/themes";
import { PortableText } from "next-sanity";
import { ButtonLink } from "./modules/ButtonLink";
import { CustomImageProps } from "@/utils/types";
import { ImageObject } from "./modules/ImageObject";

export const RestaurantHero = ({
  backgroundImage,
  slug,
  copy,
  orderOnlineLink,
}: {
  backgroundImage?: CustomImageProps;
  slug: string;
  copy: any[];
  orderOnlineLink: string;
}) => {
  const headingClasses =
    "text-pretty text-[35px] tablet-md:text-[45px] leading-[1.2]";
  const paragraphClasses =
    "text-pretty max-w-[550px] text-[16px] leading-[1.5]";
  const listClasses =
    "list-disc list-inside text-[12px] tablet-md:text-[16px] ";
  return (
    <section className="relative">
      {backgroundImage && (
        <ImageObject
          {...backgroundImage}
          imageWidth={1200}
          className="absolute
        top-0 left-0 w-full h-full object-cover select-none pointer-events-none"
        />
      )}
      <div className="max-w-[1370px] text-center mx-auto relative flex justify-between items-center tablet-lg:px-4">
        <div className="px-4 py-16 tablet-lg:px-[50px] tablet-lg:py-[90px] relative text-white w-full tablet-lg:max-w-[460px] z-10">
          <div
            className={`${bgTheme(slug)} absolute top-0 left-0 w-full h-full opacity-80 tablet-lg:opacity-100`}
          />
          <div className="relative flex flex-col items-center gap-8 ">
            {logo({
              slug,
              color: "#fff",
              className: "h-[152px] w-auto mx-auto",
            })}
            <PortableText
              value={copy}
              components={
                {
                  block: {
                    h1: ({ children }: { children: string }) => (
                      <h1 className={headingClasses}>{children}</h1>
                    ),
                    h2: ({ children }: { children: string }) => (
                      <h2 className={headingClasses}>{children}</h2>
                    ),
                    h3: ({ children }: { children: string }) => (
                      <h3 className={headingClasses}>{children}</h3>
                    ),
                    h4: ({ children }: { children: string }) => (
                      <h4 className={headingClasses}>{children}</h4>
                    ),
                    h5: ({ children }: { children: string }) => (
                      <h5 className={headingClasses}>{children}</h5>
                    ),
                    h6: ({ children }: { children: string }) => (
                      <h6 className={headingClasses}>{children}</h6>
                    ),
                    normal: ({ children }: { children: string }) => (
                      <p className={paragraphClasses}>{children}</p>
                    ),
                  },
                  list: {
                    bullet: ({ children }: { children: string }) => (
                      <ul className={listClasses}>{children[0]}</ul>
                    ),
                    number: ({ children }: { children: string }) => (
                      <ol className={listClasses}>{children[0]}</ol>
                    ),
                  },
                } as any
              }
            />
            <ButtonLink
              href={orderOnlineLink}
              text="Order Online"
              color="bg-black"
              className="text-[12px] tablet-md:text-[16px] px-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
