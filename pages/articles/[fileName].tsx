import React from "react";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { Children } from "../../page-components";
import { Center } from "../../components";

async function toString(readable: any) {
  let res = "";
  for await (const chunk of readable) {
    res = `${res}${chunk.toString("utf8")}`;
  }
  return res;
}

function ArticlePage({ tree }: any) {
  return (
    <div>
      <div
        style={{
          paddingBottom: "4rem"
        }}
      />
      <Center xsm={95} sm={80} md={70} xl={50}>
        <article>
          <Children _children={tree?.children ?? []} />
        </article>
      </Center>
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
