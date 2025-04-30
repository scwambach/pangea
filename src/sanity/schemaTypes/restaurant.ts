import { defineField, defineType } from "sanity";
import { richTextProps } from "./protableProps";
import { IoRestaurantOutline } from "react-icons/io5";

export const restaurant = defineType({
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  icon: IoRestaurantOutline,
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
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "days",
              title: "Days",
              type: "array",
              validation: (Rule) => Rule.required(),
              of: [{ type: "string" }],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "orderOnlineLink",
      title: "Order Online Link",
      type: "url",
    }),
    defineField({
      name: "menus",
      title: "Menus",
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
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        defineField({
          name: "url",
          title: "URL",
          type: "url",
          validation: (Rule: any) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "imageGallery",
      title: "Image Gallery",
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
    defineField({
      name: "featuresBanner",
      title: "Feature Banner",
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
        defineField({
          name: "buttons",
          title: "Buttons",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "text",
                  title: "Text",
                  type: "string",
                }),
                defineField({
                  name: "href",
                  title: "Href",
                  type: "url",
                  validation: (Rule: any) =>
                    Rule.required().uri({
                      allowRelative: true,
                    }),
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
});
