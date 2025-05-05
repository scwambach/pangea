import { CtaBannerProps } from "@/utils/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export const CtaBanner = ({
  image,
  heading,
  copy,
  buttons,
}: CtaBannerProps) => {
  return (
    <section className="px-8 py-[100px]">
      <h4 className="text-pangea text-center uppercase font-black tracking-widest text-[26px]">
        {heading}
      </h4>
      <div className="flex max-w-[830px] mx-auto items-center gap-8 justify-center">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          className="w-full max-w-[315px] h-auto"
          alt=""
        />
        <div className="w-1/2 flex flex-col gap-8 items-start">
          <PortableText
            value={copy}
            components={
              {
                block: {
                  h1: ({ children }: { children: string }) => (
                    <h1 className="text-pretty text-[45px] font-[900] leading-[1.2]">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }: { children: string }) => (
                    <h2 className="text-pretty text-[45px] font-[900] leading-[1.2]">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }: { children: string }) => (
                    <h3 className="text-pretty text-[45px] font-[900] leading-[1.2]">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }: { children: string }) => (
                    <h4 className="text-pretty text-[45px] font-[900] leading-[1.2]">
                      {children}
                    </h4>
                  ),
                  h5: ({ children }: { children: string }) => (
                    <h5 className="text-pretty text-[45px] font-[900] leading-[1.2]">
                      {children}
                    </h5>
                  ),
                  h6: ({ children }: { children: string }) => (
                    <h6 className="text-pretty text-[45px] font-[900] leading-[1.2]">
                      {children}
                    </h6>
                  ),
                  normal: ({ children }: { children: string }) => (
                    <p className="text-pretty leading-[1.5]">{children}</p>
                  ),
                },
                list: {
                  bullet: ({ children }: { children: string }) => (
                    <ul className="list-disc list-inside">{children[0]}</ul>
                  ),
                  number: ({ children }: { children: string }) => (
                    <ol className="list-decimal list-inside">{children[0]}</ol>
                  ),
                },
              } as any
            }
          />
          {buttons.map((button) => (
            <Link
              key={button._key}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-paprika inline-block text-center text-white uppercase font-extrabold p-2 tracking-wide hover:opacity-80 transition-all duration-200 ease-in-out px-8"
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
