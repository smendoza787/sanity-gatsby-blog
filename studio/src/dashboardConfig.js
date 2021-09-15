export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "614231ae8921121495de9bfd",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-6z48cgm9",
                  apiId: "a5001101-9583-48fb-9a62-b2b2d38f6673",
                },
                {
                  buildHookId: "614231ae8921121923de9d0d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-w8ge14da",
                  apiId: "5a96adc4-1662-4db7-b079-55babccb0769",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/smendoza787/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-w8ge14da.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
