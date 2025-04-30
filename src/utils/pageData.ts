import { getClient } from "./client";
import { sanityFetch } from "../sanity/lib/live";

export async function getData({
  query,
  usePreview,
  params,
}: {
  query: string;
  usePreview: boolean;
  params?: any;
}) {
  const data = await getClient({ usePreview }).fetch(query, params);

  return {
    data,
  };
}

export async function getLiveData({
  query,
  params,
}: {
  query: string;
  usePreview: boolean;
  params?: any;
}) {
  const { data } = await sanityFetch({ query, params });

  return {
    data,
  };
}
