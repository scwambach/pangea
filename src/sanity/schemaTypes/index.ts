import { globalSettings } from "./globalSettings";
import { type SchemaTypeDefinition } from "sanity";
import { restaurant } from "./restaurant";
import { tasteMakerLink } from "./tasteMakerLink";
import { post } from "./post";
import { category } from "./category";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [globalSettings, restaurant, tasteMakerLink, post, category],
};
