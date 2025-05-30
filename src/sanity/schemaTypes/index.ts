import { globalSettings } from "./globalSettings";
import { type SchemaTypeDefinition } from "sanity";
import { restaurant } from "./restaurant";
import { post } from "./post";
import { category } from "./category";
import { homePage } from "./homePage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [globalSettings, homePage, restaurant, post, category],
};
