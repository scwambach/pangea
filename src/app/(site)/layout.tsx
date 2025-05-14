import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { getLiveData } from "@/utils/pageData";
import { GLOBAL } from "@/queries/global";
import { GlobalProps } from "@/utils/types";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { urlFor } from "@/utils/urlFor";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import { SanityLive } from "@/sanity/lib/live";
import { PopUpCta } from "@/components/PopUpCta";

const montSans = Montserrat({
  variable: "--font-geist-sans",
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
});

export async function generateMetadata() {
  const {
    data,
  }: {
    data: GlobalProps;
  } = await getLiveData({
    query: GLOBAL,
    params: {
      slug: "/",
    },
    usePreview: false,
  });

  return {
    title: `${data.siteName} | ${data.siteTagline}`,
    description: data.siteDescription,
    openGraph: {
      images: `${urlFor(data.ogImage.imageFor).width(600)}`,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    data,
  }: {
    data: GlobalProps;
  } = await getLiveData({
    query: GLOBAL,
    params: {
      slug: "/",
    },
    usePreview: false,
  });

  return (
    <html lang="en">
      <body
        className={`${montSans.variable} antialiased leading-[1.3] bg-white`}
      >
        <Header {...data.header} />
        <main>{children}</main>
        <Footer {...data.footer} />
        {data.popUpCta && <PopUpCta {...data.popUpCta} />}
        <SanityLive />
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  );
}
