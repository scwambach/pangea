import { defineLive } from "next-sanity";
// import your local configured client
import { client } from "./client";

// set your viewer token
const token = process.env.SANITY_API_READ_TOKEN;
if (!token) {
  throw new Error("Missing SANITY_API_READ_TOKEN");
}

// export the sanityFetch helper and the SanityLive component
export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});
