import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { sortSocials } from "@/utils/sortSocials";
import { BsEnvelope } from "react-icons/bs";
import { FooterBlock } from "./FooterBlock";

export const Connect = ({
  email,
  phone,
  socials,
}: {
  email: string;
  phone: string;
  socials: (string | null)[];
}) => {
  return (
    <div className="tablet-lg:hidden bg-white flex flex-col gap-8 items-center justify-center px-4 pb-16 pt-8">
      <p className="uppercase text-center text-pangea font-extrabold tracking-wider text-[18px]">
        Connect With Us
      </p>
      <FooterBlock>
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-4">
            <div className="bg-pangea w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <FaFacebookF color="white" size={16} />
            </div>
            <div className="flex flex-col gap-1">
              {sortSocials(socials).facebook.map((social, index) => {
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tablet-lg:text-black block tablet-lg:hover:text-pangea-dark transition-colors"
                  >
                    {social.handle}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-4">
            <div className="bg-pangea w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <FaInstagram color="white" size={16} />
            </div>
            <div className="flex flex-col gap-1">
              {sortSocials(socials).instagram.map((social, index) => {
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tablet-lg:text-black block tablet-lg:hover:text-pangea-dark transition-colors"
                  >
                    @{social.handle}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-4">
            <div className="bg-pangea w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <BsEnvelope color="white" size={16} />
            </div>
            <div className="flex flex-col gap-1">
              <a
                href={`mailto:${email}`}
                className="tablet-lg:text-black block tablet-lg:hover:text-pangea-dark transition-colors"
              >
                {email}
              </a>
              <a
                href={`tel:${phone}`}
                className="tablet-lg:text-black block tablet-lg:hover:text-pangea-dark transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </FooterBlock>
    </div>
  );
};
