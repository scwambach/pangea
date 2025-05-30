import { defineField, defineType } from "sanity";

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
      name: "popUpCta",
      title: "Pop Up CTA",
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
      name: "popUpCta",
      title: "Pop Up CTA",
      fieldset: "popUpCta",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
        }),
        defineField({
          name: "copy",
          title: "Copy",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "button",
          title: "Button",
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
              validation: (Rule) =>
                Rule.uri({
                  allowRelative: true,
                }),
            }),
          ],
        }),
      ],
    }),
  ],
});
