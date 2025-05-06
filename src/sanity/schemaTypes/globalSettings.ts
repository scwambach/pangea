import { defineField, defineType } from "sanity";
import { richTextProps } from "./protableProps";

export const globalSettings = defineType({
  name: "globalSettings",
  title: "Global Settings",
  type: "document",
  fieldsets: [
    {
      name: "global",
      title: "Global Settings",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: "homepage",
      title: "Homepage ",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "passportProgram",
      title: "Passport Program",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "locationHeirarchy",
      title: "Location Heirarchy",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      fieldset: "global",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "Site Description",
      fieldset: "global",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainEmail",
      title: "Main Email",
      fieldset: "global",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainPhone",
      title: "Main Phone",
      fieldset: "global",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "siteLogo",
      title: "Site Logo",
      fieldset: "global",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      fieldset: "global",
      validation: (Rule: any) => Rule.required(),
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "siteTagline",
      title: "Site Tagline",
      fieldset: "global",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "locations",
      title: "Locations",
      fieldset: "locationHeirarchy",
      validation: (Rule: any) => Rule.required(),
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "restaurant" }],
        },
      ],
    }),
    defineField({
      name: "ctaBanner",
      title: "CTA Banner",
      fieldset: "passportProgram",
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
  ],
});
