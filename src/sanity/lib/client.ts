import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false for ISR with stale-while-revalidate
  perspective: "published", // Only fetch published documents
  stega: {
    studioUrl: `${process.env.SITE_URL}/studio`,
  },
});
