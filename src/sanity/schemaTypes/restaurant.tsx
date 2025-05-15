import { defineField, defineType } from "sanity";
import { richTextProps } from "./protableProps";
import { IoRestaurantOutline } from "react-icons/io5";
import { logo } from "@/utils/themes";
import { MdOutlineMenuBook } from "react-icons/md";

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
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      initialValue: true,
      description: "Uncheck to hide this restaurant from the website.",
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
      hidden: ({ document }: any) => {
        return document?.isActive;
      },
    }),
    defineField({
      name: "mapImage",
      title: "Map Image",
      type: "image",
      options: {
        hotspot: true,
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
      name: "fullMenu",
      title: "PDF Full Menu",
      description: "Upload a PDF menu of all menus sections in one file.",
      type: "file",
      options: {
        accept: ".pdf",
      },
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
              title: "PDF Menu",
              description: "Upload a PDF menu of just this menu section.",
              type: "file",
              options: {
                accept: ".pdf",
              },
            }),
            defineField({
              name: "menuSections",
              title: "Menu Sections",
              type: "array",
              of: [
                defineField({
                  name: "section",
                  title: "Section",
                  type: "object",
                  fields: [
                    defineField({
                      name: "title",
                      title: "Title",
                      type: "string",
                      validation: (Rule: any) => Rule.required(),
                    }),
                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                      rows: 3,
                    }),

                    defineField({
                      name: "items",
                      title: "Items",
                      type: "array",
                      of: [
                        defineField({
                          name: "item",
                          title: "Item",
                          type: "object",
                          fields: [
                            defineField({
                              name: "name",
                              title: "Name",
                              type: "string",
                              validation: (Rule: any) => Rule.required(),
                            }),
                            defineField({
                              name: "description",
                              title: "Description",
                              type: "string",
                              validation: (Rule: any) => Rule.required(),
                            }),
                            defineField({
                              name: "price",
                              title: "Price",
                              type: "string",
                              validation: (Rule: any) => Rule.required(),
                            }),
                            defineField({
                              name: "image",
                              title: "Image",
                              type: "image",
                              options: {
                                hotspot: true,
                              },
                            }),
                            defineField({
                              name: "isVegetarian",
                              title: "Is Vegetarian",
                              type: "boolean",
                              initialValue: false,
                            }),
                            defineField({
                              name: "isVegan",
                              title: "Is Vegan",
                              type: "boolean",
                              initialValue: false,
                            }),
                            defineField({
                              name: "canBeVegetarian",
                              title: "Can be vegetarian",
                              type: "boolean",
                              initialValue: false,
                            }),
                            defineField({
                              name: "canBeVegan",
                              title: "Can be vegan",
                              type: "boolean",
                              initialValue: false,
                            }),
                          ],
                          preview: {
                            select: {
                              title: "name",
                              subtitle: "description",
                              price: "price",
                              image: "image",
                            },
                            prepare(selection: any) {
                              return {
                                title: selection.title,
                                subtitle: `${selection.price} - ${selection.subtitle}`,
                                media: selection.image,
                              };
                            },
                          },
                        }),
                      ],
                    }),
                  ],
                  preview: {
                    select: {
                      title: "title",
                      subtitle: "items",
                    },
                    prepare(selection: any) {
                      return {
                        title: selection.title,
                        subtitle: `${selection.subtitle.length} items`,
                        media: MdOutlineMenuBook,
                      };
                    },
                  },
                }),
              ],
            }),
            defineField({
              name: "footnote",
              title: "Footnote",
              type: "text",
              rows: 3,
              description: "This will be displayed at the bottom of the menu.",
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
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
      active: "isActive",
    },
    prepare(selection: any) {
      return {
        title: selection.title,
        subtitle: `${selection.active ? "✅" : "🚫"} - ${selection.subtitle}`,
        media: (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {logo({
              style: {
                maxWidth: "none",
                maxHeight: "none",
                width: "26px",
                height: "auto",
                padding: "2px",
              },
              color: "black",
              slug: selection.subtitle,
            })}
          </div>
        ),
      };
    },
  },
});
