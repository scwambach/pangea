import { defineField, defineType } from "sanity";

export const globalSettings = defineType({
  name: "globalSettings",
  title: "Global Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "Site Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "siteLogo",
      title: "Site Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "url" }],
    }),
    defineField({
      name: "fallbackSeo",
      title: "Fallback SEO",
      type: "object",
      fields: [
        defineField({
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "ogImage",
          title: "Open Graph Image",
          validation: (Rule: any) => Rule.required(),
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
});
