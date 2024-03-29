import { Meta } from "../../../Meta";
import React from "react";

const meta = {
  title: `Stanislav Panchenko`,
  description: `Stanislav Panchenko.`,
  author: `Stanislav Panchenko mail@stanislavpanchenko.de`,
  url: "http://www.stanislavpanchenko.de",
  twitterUsername: "@rilexus",
  keywords:
    "stanislav panchenko, web developer, developer, softwareentwickler, freelancer",
  revised: `Stanislav Panchenko: ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  identifierURL: "www.stanislavpanchenko.de",
  category: "development",
  rating: "Safe For Kids",
  ogLocality: "Passau Germany"
};
const title = "Start";

const metas = [
  {
    name: `description`,
    content: meta.description
  },
  {
    property: `og:title`,
    content: title
  },
  {
    property: `og:description`,
    content: meta.description
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    name: `twitter:card`,
    content: `summary`
  },
  {
    name: `twitter:creator`,
    content: meta.twitterUsername
  },
  {
    name: `twitter:title`,
    content: title
  },
  {
    name: `twitter:description`,
    content: meta.description
  },
  {
    name: "keywords",
    content: meta.keywords
  },
  {
    name: "author",
    content: meta.author
  },
  {
    name: "revised",
    content: meta.revised
  },
  {
    name: "identifier-URL",
    content: meta.identifierURL
  },
  {
    name: "rating",
    content: meta.rating
  },
  {
    name: "og:locality",
    content: meta.ogLocality
  }
];

const HomeMeta = () => {
  return <Meta metas={metas} />;
};
export default HomeMeta;
