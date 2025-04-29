import { defineField, defineType } from "sanity";
import { richTextProps } from "./protableProps";

export const restaurant = defineType({
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fieldsets: [
    {
      name: "details",
      title: "Details",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "listing",
      title: "Listing",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        defineField({
          name: "street",
          title: "Street",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "cityStateZip",
          title: "City, State, and ZIP",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "hours",
      title: "Hours",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "menus",
      title: "Menus",
      fieldset: "details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "menu",
              title: "Menu",
              type: "file",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "flavorsFrom",
      title: "Flavors From",
      fieldset: "listing",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "imageGallery",
      title: "Image Gallery",
      fieldset: "details",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "banner",
      fieldset: "details",
      title: "Banner",
      type: "object",
      fields: [
        defineField({
          name: "backgroundImage",
          title: "Background Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "copy",
          title: "Copy",
          type: "array",
          of: richTextProps(),
        }),
      ],
    }),
  ],
});
