"use client";
import newsletterBg from "@/images/newsletter.jpg";
import Image from "next/image";
import { Button } from "./modules/Button";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";

const newsletterData = async (email: string) => {
  const res = await fetch("/api/emailSubmission", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to subscribe");
  }

  return res.json();
};

export const Newsletter = ({ socials }: { socials: string[] }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      await newsletterData(email);
      setMessage("Thanks for signing up!");
      setEmail("");
    } catch (err) {
      console.error(err);
      setMessage("There was a problem. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative px-4 tablet-lg:px-8 py-10 tablet-lg:py-[140px] text-center">
      <Image
        src={newsletterBg.src}
        alt=""
        height={newsletterBg.height}
        width={newsletterBg.width}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 select-none pointer-events-none"
        placeholder="blur"
        blurDataURL={newsletterBg.blurDataURL}
      />
      <div className="bg-offwhite-translucent tablet-lg:bg-offwhite max-w-[674px] mx-auto px-4 py-[80px] flex justify-center">
        <div className="max-w-[460px] flex flex-col gap-8">
          <h4 className="text-pretty text-[45px] font-extrabold leading-[1.2]">
            Stay in the know.
          </h4>
          <p className="text-pretty">
            Sign up for our email list and follow us on social to stay
            up-to-date with our seasonal offerings, events, and more!
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 items-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              placeholder="email@email.com"
              className="w-full h-[44px] px-4 border border-black"
            />
            <Button
              type="submit"
              color="bg-black"
              disabled={isLoading}
              className="px-4 min-w-[224px]"
            >
              {isLoading ? "Sending..." : "Sign me up!"}
            </Button>
          </form>
          {message && (
            <p className="text-sm font-semibold text-center text-black">
              {message}
            </p>
          )}
          <div className="flex gap-4 justify-center">
            {socials?.map((soc) => (
              <SocialIcon
                key={soc}
                url={soc}
                target="_blank"
                rel="noopener noreferrer"
                bgColor="#a97858"
                className="hover:opacity-80 transition-all duration-200 ease-in-out"
                style={{ height: 28, width: 28 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
