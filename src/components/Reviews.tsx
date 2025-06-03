import { ReviewsProps } from "@/utils/types";
import { IoStar } from "react-icons/io5";
import { SectionHeading } from "./modules/SectionHeading";

export const Reviews = ({ heading, reviews }: ReviewsProps) => {
  return (
    <section className="text-center px-4 py-[100px]">
      {heading && (
        <SectionHeading
          title={heading}
          className="text-pangea pb-[25px] tablet:pb-[50px]"
          element="h4"
        />
      )}

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {reviews.map((review) => (
          <div
            key={review._key}
            className="bg-offwhite w-full max-w-[357px] p-[45px] flex flex-col items-center gap-4"
          >
            <p className="font-bold">{review.author}</p>
            <div className="flex items-center gap-2 justify-center">
              {Array.from({ length: review.rating }).map((_, i) => (
                <IoStar key={i} className="text-wheat" />
              ))}
            </div>
            <p className="text-pretty">{review.text}</p>
            {review.link && (
              <a
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline"
              >
                Read more
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
