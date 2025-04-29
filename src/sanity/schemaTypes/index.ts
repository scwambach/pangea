import { globalSettings } from "./globalSettings";
import { type SchemaTypeDefinition } from "sanity";
import { restaurant } from "./restaurant";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [globalSettings, restaurant],
};
