import { ButtonLink } from "./ButtonLink";
import { ArrowRight } from "@/icons";
import { ImageObject } from "./ImageObject";
import { CustomImageProps } from "@/utils/types";

export interface MediaCardProps {
  title: string;
  image: CustomImageProps;
  description: string;
  textColor?:
    | "text-paprika"
    | "text-brick"
    | "text-pizzaria"
    | "text-tan"
    | "text-black"
    | "text-wheat"
    | "text-pangea";
  buttonColor?:
    | "bg-paprika"
    | "bg-brick"
    | "bg-pizzaria"
    | "bg-tan"
    | "bg-black"
    | "bg-wheat"
    | "bg-pangea";
  url: string;
  buttonText?: string;
}

export const MediaCard = ({
  title,
  image,
  description,
  textColor = "text-paprika",
  buttonColor = "bg-paprika",
  url,
  buttonText = "Explore",
}: MediaCardProps) => {
  return (
    <div className="bg-white p-2 tablet:p-[30px] flex tablet:flex-col gap-8 justify-between">
      <p
        className={`hidden tablet:block ${textColor} leading-[1.2] font-[900] tracking-wider uppercase text-[24px]`}
      >
        {title}
      </p>
      <div className="w-[152px] tablet:w-auto relative tablet:h-[170px]">
        <ImageObject
          {...image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover  select-none pointer-events-none"
        />
      </div>
      <div className="flex flex-col gap-4 tablet:gap-8 justify-between py-4 tablet:py-0 w-[calc(100%-190px)] tablet:w-full">
        <p
          className={`${textColor} leading-[1.2] font-[900] tracking-wider uppercase text-[26px] tablet:hidden`}
        >
          {title}
        </p>
        <p className="text-lg text-pretty leading-[1.3] line-clamp-2">
          {description}
        </p>
        <ButtonLink
          href={url}
          text="Explore"
          color={buttonColor}
          className="w-10 h-10 tablet:w-auto tablet:h-auto w-max-w-[220px] tablet:mx-auto tablet:px-8 rounded-full tablet:rounded-none"
        >
          <span className="hidden tablet:block">{buttonText}</span>
          <span className="flex items-center justify-center">
            <ArrowRight
              color="white"
              className="tablet:hidden w-[15px] h-auto ml-[2px] mt-[2px]"
            />
          </span>
        </ButtonLink>
      </div>
    </div>
  );
};
