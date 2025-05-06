import Image, { ImageProps } from "next/image";

export const ImageGrid = ({ items }: { items: { image: ImageProps }[] }) => {
  return (
    <section>
      <div className="grid gap-[2px] grid-cols-2 tablet-xl:grid-cols-4">
        {items.map(({ image }, index) => (
          <div key={index} className="relative max-h-[357px] overflow-hidden">
            <div className="relative top-1/2 left-0 -translate-y-1/2 pb-[100%]">
              <Image
                {...image}
                placeholder="blur"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
