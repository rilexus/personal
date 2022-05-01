import React from "react";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { v4 as uuid } from "uuid";

async function toString(readable: any) {
  let res = "";
  for await (const chunk of readable) {
    res = `${res}${chunk.toString("utf8")}`;
  }
  return res;
}

function Code({ value }: any) {
  return <pre>{value}</pre>;
}

function Paragraph({ _children }: any) {
  return (
    <p>
      <Children _children={_children} />
    </p>
  );
}

const Text = ({ value }: any) => {
  return value;
};

function Heading({ depth, _children }: any) {
  if (depth === 1) {
    return (
      <h1>
        <Children _children={_children} />
      </h1>
    );
  }
  if (depth === 2) {
    return (
      <h2>
        <Children _children={_children} />
      </h2>
    );
  }
  return null;
}

function Children({ _children }: any) {
  return (
    <>
      {_children.map(({ type, value, children, depth }: any) => {
        if (type === "heading") {
          return <Heading _children={children} depth={depth} key={uuid()} />;
        }
        if (type === "code") {
          return <Code value={value} key={uuid()} />;
        }
        if (type === "paragraph") {
          return <Paragraph _children={children} key={uuid()} />;
        }
        if (type === "text") {
          return <Text value={value} key={uuid()} />;
        }
        return null;
      })}
    </>
  );
}

function ArticlePage({ tree }: any) {
  return (
    <div>
      <Children _children={tree?.children ?? []} />
    </div>
  );
}

export async function getStaticProps(context: {
  params: { fileName: string };
}) {
  const {
    params: { fileName }
  } = context;

  console.log(`Fetching file with name: ${fileName}...`);
  const response = await fetch(
    `https://raw.github.com/rilexus/articles/main/${fileName}.md`,
    {
      method: "GET"
    }
  );
  console.log("Building AST...");
  const tree = await toString(response.body).then(s => {
    return unified()
      .use(remarkParse)
      .parse(s);
  });

  console.log(tree);

  return {
    props: {
      tree: tree
    }
  };
}

export async function getStaticPaths() {
  console.log("Fetching commits on master...");
  const {
    // get latest commit on master
    commit: {
      tree: { url }
    }
  } = await (
    await fetch("https://api.github.com/repos/rilexus/articles/commits/main")
  ).json();

  console.log(`Got url: ${url}`);

  console.log(`Fetching tree at: ${url}`);
  // get files names
  const { tree } = await (await fetch(url)).json();
  console.log(`Got tree at: ${url}`);

  return {
    paths: tree.map(({ path }: { path: string }) => {
      const [name] = path.split(".");
      return {
        params: {
          fileName: name
        }
      };
    }),
    fallback: true // false or 'blocking'
  };
}

export default ArticlePage;
