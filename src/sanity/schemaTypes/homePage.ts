import { defineField, defineType } from "sanity";
import { richTextProps } from "./protableProps";
import { FaStar } from "react-icons/fa6";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "heroBannerHeading",
      title: "Hero Banner Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introImageGallery",
      title: "Intro Image Gallery",
      type: "array",
      validation: (Rule: any) => Rule.required().min(4).max(4),
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
      name: "locationGrid",
      title: "Location Grid",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "locations",
          title: "Locations",
          validation: (Rule: any) => Rule.required(),
          type: "array",
          of: [
            {
              type: "reference",
              to: [{ type: "restaurant" }],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "mediaCards",
      title: "Media Cards",
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
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              validation: (Rule) => Rule.required(),
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "buttonText",
              title: "Button Text",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
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
    defineField({
      name: "ctaBanner",
      title: "CTA Banner",
      type: "object",
      fields: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
          validation: (Rule: any) => Rule.required(),
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
    defineField({
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      validation: (Rule: any) => Rule.required().min(4).max(4),
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
      name: "reviews",
      title: "Reviews",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "reviews",
          title: "Reviews",
          type: "array",
          validation: (Rule) => Rule.required().min(3).max(6),
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "author",
                  title: "Author",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "text",
                  title: "Text",
                  type: "text",
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "rating",
                  title: "Rating",
                  type: "number",
                  validation: (Rule) => Rule.required().min(1).max(5),
                }),
                defineField({
                  name: "link",
                  title: "Link",
                  type: "url",
                  validation: (Rule: any) =>
                    Rule.uri({
                      allowRelative: true,
                    }).required(),
                }),
              ],
              preview: {
                select: {
                  title: "author",
                },
                prepare(selection: any) {
                  return {
                    title: selection.title,
                    media: FaStar,
                  };
                },
              },
            },
          ],
        }),
      ],
    }),
  ],
});
