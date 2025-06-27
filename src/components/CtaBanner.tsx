import { CtaBannerProps } from "@/utils/types";
import { PortableText } from "next-sanity";
import { ButtonLink } from "./modules/ButtonLink";
import { SectionHeading } from "./modules/SectionHeading";
import { ImageObject } from "./modules/ImageObject";

export const CtaBanner = ({
  image,
  heading,
  copy,
  buttons,
}: CtaBannerProps) => {
  return (
    <section className="px-2 tablet-md:px-8 py-[100px] flex flex-col gap-2">
      <SectionHeading
        title={heading}
        className="text-pangea pb-[25px] tablet:pb-[50px]"
        element="h4"
      />

      <div className="flex flex-col mobile-lg:flex-row mobile-lg:max-w-[900px] mx-auto items-center gap-8 justify-center">
        <ImageObject
          {...image}
          imageWidth={350}
          className="w-full max-w-[250px] mobile-lg:max-w-[200px] tablet-md:max-w-[315px] h-auto"
          alt=""
        />
        <div className="mobile-lg:w-1/2 px-8 mobile-lg:px-0 flex flex-col gap-4 tablet-md:gap-8 items-start">
          <PortableText
            value={copy}
            components={
              {
                block: {
                  h1: ({ children }: { children: string }) => (
                    <h1 className="text-pretty text-[22px] tablet-md:text-[37px] font-[900] leading-[1.2]">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }: { children: string }) => (
                    <h2 className="text-pretty text-[22px] tablet-md:text-[37px] font-[900] leading-[1.2]">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }: { children: string }) => (
                    <h3 className="text-pretty text-[22px] tablet-md:text-[37px] font-[900] leading-[1.2]">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }: { children: string }) => (
                    <h4 className="text-pretty text-[22px] tablet-md:text-[37px] font-[900] leading-[1.2]">
                      {children}
                    </h4>
                  ),
                  h5: ({ children }: { children: string }) => (
                    <h5 className="text-pretty text-[22px] tablet-md:text-[37px] font-[900] leading-[1.2]">
                      {children}
                    </h5>
                  ),
                  h6: ({ children }: { children: string }) => (
                    <h6 className="text-pretty text-[22px] tablet-md:text-[37px] font-[900] leading-[1.2]">
                      {children}
                    </h6>
                  ),
                  normal: ({ children }: { children: string }) => (
                    <p className="text-pretty text-[12px] tablet-md:text-[16px] leading-[1.5]">
                      {children}
                    </p>
                  ),
                },
                list: {
                  bullet: ({ children }: { children: string }) => (
                    <ul className="list-disc list-inside text-[12px] tablet-md:text-[16px] ">
                      {children[0]}
                    </ul>
                  ),
                  number: ({ children }: { children: string }) => (
                    <ol className="list-decimal list-inside text-[12px] tablet-md:text-[16px] ">
                      {children[0]}
                    </ol>
                  ),
                },
              } as any
            }
          />
          {buttons.map((button) => (
            <ButtonLink
              key={button._key}
              href={button.href}
              text={button.text}
              className="text-[12px] tablet-md:text-[16px] px-8"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
