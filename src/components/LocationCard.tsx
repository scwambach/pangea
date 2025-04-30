import { bgTheme, logo, textTheme } from "@/utils/themes";

export const LocationCard = (props: {
  name: string;
  slug: string;
  flavorsFrom: string[];
  orderOnlineLink: string;
}) => {
  return (
    <div
      key={props.slug}
      className="text-center bg-offwhite relative top-[72.5px] mb-[60px]"
    >
      <div
        className={`${bgTheme(props.slug)} pb-7 px-7 min-h-[145px] flex flex-col justify-between`}
      >
        <div className="flex justify-center items-center relative h-[120px] w-[120px] bg-white rounded-full mx-auto shadow-icon -mb-[60px] -top-[60px]">
          {logo({
            slug: props.slug,
            className: "h-[87px] mx-auto w-auto",
          })}
        </div>
        <p className="text-xl font-black tracking-wider text-white uppercase">
          {props.name}
        </p>
      </div>
      {props.flavorsFrom && (
        <div className="p-[30px]">
          <p className={`${textTheme(props.slug)} uppercase font-bold`}>
            Flavors from:
          </p>
          <p>{props.flavorsFrom}</p>
        </div>
      )}
    </div>
  );
};
