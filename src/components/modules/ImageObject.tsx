import { CustomImageProps } from "@/utils/types";
import { urlFor } from "@/utils/urlFor";
import Image from "next/image";

export const ImageObject = (props: CustomImageProps) => {
  return (
    <Image
      src={urlFor(props.imageFor).url()}
      width={props.width}
      height={props.height}
      blurDataURL={props.blurDataURL}
      alt={props.alt || ""}
      placeholder="blur"
      className={props.className}
    />
  );
};
