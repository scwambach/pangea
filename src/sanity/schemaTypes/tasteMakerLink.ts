import { defineType } from "sanity";

export const tasteMakerLink = defineType({
  name: "tasteMakerLink",
  title: "Taste Maker Link",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule: any) =>
        Rule.required().uri({
          allowRelative: true,
        }),
    },
  ],
});
