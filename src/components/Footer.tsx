import { combineLocationsByAddress } from "@/utils/combineLocationsByAddress";
import { sortSocials } from "@/utils/sortSocials";
import { FooterProps } from "@/utils/types";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Connect } from "./modules/Connect";
import { FooterBlock } from "./modules/FooterBlock";
import { FooterColumn } from "./modules/FooterColumn";

export const Footer = ({
  addresses,
  email,
  hours,
  phone,
  socials,
}: FooterProps) => {
  return (
    <footer className="tablet-lg:py-[100px]">
      <Connect email={email} phone={phone} socials={socials} />
      <div className="max-w-[1200px] mx-auto p-10 tablet-lg:py-0 tablet-lg:px-8 grid mobile-md:grid-cols-2 tablet-lg:grid-cols-4 gap-8 text-white tablet-lg:text-inherit  bg-pizzaria-dark tablet-lg:bg-white">
        <FooterColumn className="hidden tablet-lg:flex">
          <FooterBlock heading="Connect With Us">
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
          </FooterBlock>
          <FooterBlock heading="Contact">
            <div className="flex flex-col gap-2">
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
          </FooterBlock>
        </FooterColumn>
        <FooterColumn>
          <FooterBlock heading="Our Locations">
            {combineLocationsByAddress(addresses)?.map((address, index) => {
              return (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${address.address?.street},${address.address?.cityStateZip}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="tablet-lg:text-black block tablet-lg:hover:text-pangea-dark transition-colors"
                >
                  <span className="block">{address.name}</span>
                  <span className="block">{address.address?.street}</span>
                  <span className="block">{address.address?.cityStateZip}</span>
                </a>
              );
            })}
          </FooterBlock>
        </FooterColumn>
        <FooterColumn>
          <FooterBlock heading="Hours">
            {hours.map((hour, index) => {
              return (
                hour.hours && (
                  <div key={index} className="flex flex-col gap-2">
                    {hour.hours?.map((item) => (
                      <div key={item._key}>
                        {item.title}
                        <div className="flex flex-col gap-1">
                          {item.days.map((day, index) => (
                            <p key={index}>{day}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )
              );
            })}
          </FooterBlock>
          <FooterBlock heading="Careers ">
            <a
              href="/careers"
              className="tablet-lg:text-black block tablet-lg:hover:text-pangea-dark transition-colors"
            >
              Join Our Team
            </a>
          </FooterBlock>
        </FooterColumn>
        <FooterColumn className="hidden tablet-lg:flex">
          <FooterBlock heading="Careers ">
            <a
              href="/careers"
              className="tablet-lg:text-black block tablet-lg:hover:text-pangea-dark transition-colors"
            >
              Join Our Team
            </a>
          </FooterBlock>
        </FooterColumn>
      </div>
    </footer>
  );
};
