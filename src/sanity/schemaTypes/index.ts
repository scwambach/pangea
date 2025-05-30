import { globalSettings } from "./globalSettings";
import { type SchemaTypeDefinition } from "sanity";
import { restaurant } from "./restaurant";
import { tasteMakerLink } from "./tasteMakerLink";
import { post } from "./post";
import { category } from "./category";
import { homePage } from "./homePage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [globalSettings, homePage, restaurant, tasteMakerLink, post, category],
};
