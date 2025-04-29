export const richTextProps = () => [
  {
    type: "block",
    styles: [
      { title: "Normal", value: "normal" },
      { title: "H1", value: "h1" },
      { title: "H2", value: "h2" },
      { title: "H3", value: "h3" },
      { title: "H4", value: "h4" },
      { title: "Quote", value: "blockquote" },
    ],
    marks: {
      annotations: [
        {
          name: "link",
          type: "object",
          title: "Link",
          fields: [
            {
              name: "href",
              type: "url",
              title: "URL",
              validation: (Rule: any) =>
                Rule.uri({
                  allowRelative: true,
                }),
            },
          ],
        },
      ],
    },
  },
  {
    type: "image",
    options: {
      hotspot: true,
    },
  },
];
