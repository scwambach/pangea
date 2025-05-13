import { defineField, defineType } from "sanity";
import { richTextProps } from "./protableProps";
import dayjs from "dayjs";

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm:ss",
      },
    }),
    defineField({
      name: "attachedLocation",
      title: "Attached Location",
      type: "reference",
      validation: (Rule) => Rule.required(),
      to: [{ type: "restaurant" }],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: richTextProps(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      attachedLocation: "attachedLocation.name",
      media: "mainImage",
    },
    prepare(selection: any) {
      return {
        title: selection.title,
        subtitle: `${dayjs(selection.subtitle).format("MMM D, YY")} for ${selection.attachedLocation}`,
        media: selection.media,
      };
    },
  },
});
