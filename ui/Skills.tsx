import React from "react";

const data: {
  title: string;
  items: { text: string; src?: string }[][];
}[] = [
  {
    title: "Front-end",
    items: [
      [
        {
          text: "React",
          src: "/memes/react.jpg",
        },
        {
          text: "Next.js",
        },
        {
          text: "CRA",
        },
      ],
      [{ text: "Angular" }],
      [
        {
          text: "JavaScript",
          src: "/memes/javascript.jpg",
        },
        {
          text: "TypeScript",
          src: "/memes/typescript.jpg",
        },
        {
          text: "CSS",
          src: "/memes/typescript.jpg",
        },
      ],

      [{ text: "Vue.js" }],
    ],
  },
  {
    title: "Back-end",
    items: [
      [{ text: "Node.js" }],
      [{ text: "REST & GraphQL APIs" }],
      [{ text: "MySQL & PostgreSQL" }],
      [
        {
          text: "Prisma",
          src: "/memes/prisma.jpg",
        },
      ],
    ],
  },
  {
    title: "Design",
    items: [
      [
        {
          text: "Figma",
          src: "/memes/figma.jpg",
        },
      ],
      [
        {
          text: "Tailwind",
        },
      ],
      [{ text: "styled-components" }],
      [{ text: "Design systems" }],
      
    ],
  },
  {
    title: "Other",
    items: [
      [
        {
          text: "Vercel",
        },
        {
          text: "AWS",
          src: "/memes/aws.gif",
        },
        { text: "Heroku" },
      ],
      [{ text: "React Native" }],
      [{ text: "WPO" }, {text: "SEO"}],
      [{ text: "Scrum & Kanban" }],
    ],
  },
];

const Skills = () => {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Skills and tools</h2>
      <h4 className="text-gray-700 lg:text-lg">
        Some of the languages, tools and concepts I have experience with.
      </h4>

      <div className="flex flex-wrap mt-5 -mx-4 group">
        {data.map((field, fieldIndex) => {
          return (
            <div key={fieldIndex} className="w-1/2 px-4 mt-4 lg:w-1/4">
              <div className="text-lg font-bold text-gray-800">
                {field.title}
              </div>
              <ul className="mt-2 space-y-1 text-sm text-gray-600 transition-colors group-hover:text-gray-500">
                {field.items.map((item, itemIndex) => {
                  return (
                    <li key={itemIndex} className="leading-8">
                      {item.map((child, childIndex) => {
                        const prefix =
                          childIndex === 0
                            ? null
                            : item.length > 1 && item.length - 1 === childIndex
                            ? " & "
                            : ", ";

                        return (
                          <React.Fragment key={childIndex}>
                            {prefix}

                            {child.text}
                          </React.Fragment>
                        );
                      })}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
