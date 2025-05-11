import { ButtonLink } from "./ButtonLink";
import { ArrowRight } from "@/icons";
import { ImageObject } from "./ImageObject";
import { CustomImageProps } from "@/utils/types";

export interface MediaCardProps {
  title: string;
  image: CustomImageProps;
  description: string;
  url: string;
}

export const MediaCard = ({
  title,
  image,
  description,
  url,
}: MediaCardProps) => {
  return (
    <div className="bg-white p-2 tablet:p-[30px] flex tablet:flex-col gap-8 justitfy-between">
      <p className="hidden tablet:block text-paprika leading-[1.2] font-[900] tracking-wider uppercase text-[26px]">
        {title}
      </p>
      <div className="w-[152px] tablet:w-auto relative tablet:h-[170px]">
        <ImageObject
          {...image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover  select-none pointer-events-none"
        />
      </div>
      <div className="flex flex-col gap-4 tablet:gap-8 justitfy-between py-4 tablet:py-0">
        <p className="text-paprika leading-[1.2] font-[900] tracking-wider uppercase text-[26px] tablet:hidden">
          {title}
        </p>
        <p className="text-lg text-pretty leading-[1.3]">{description}</p>
        <ButtonLink
          href={url}
          text="Explore"
          className="w-10 h-10 tablet:w-auto tablet:h-auto w-max-w-[220px] tablet:mx-auto tablet:px-8 rounded-full tablet:rounded-none"
        >
          <span className="hidden tablet:block">Explore</span>
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
