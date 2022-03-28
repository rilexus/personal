/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react";
import Helmet from "react-helmet";

const meta = {
  title: `Stanislav Panchenko`,
  description: `Personal site of Stanislav Panchenko.`,
  author: `Stanislav Panchenko mail@stanislavpanchenko.de`,
  url: "http://www.stanislavpanchenko.de",
  twitterUsername: "@rilexus",
  keywords:
    "stanislav sanchenko, web developer, aachen, developer, programmierer, ",
  revised: `Stanislav Panchenko: ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
  identifierURL: "www.stanislavpanchenko.de",
  category: "development",
  rating: "Safe For Kids",
  ogLocality: "Aachen Germany"
};

interface SEOPropsI {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
}
function SEO({ lang, title }: SEOPropsI) {
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
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
      ]}
    />
  );
}
export default SEO;
