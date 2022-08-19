import React, { VFC } from "react";

import { HomeMeta } from "../HomeMeta";
import Head from "next/head";

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.stanislavpanchenko.de",
  about: {
    "@type": "CreativeWork",
    author: {
      "@type": "Person",
      name: "Stanislav Panchenko"
    }
  },
  offers: {
    "@type": "Service",
    serviceType: "Software Development",
    hasOfferCatalog: {
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Frontend Developement"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Backend Developement"
          }
        }
      ]
    }
  }
};

const PERSONAL_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  gender: "male",
  birthDate: "03/13/1992",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Passau",
    addressRegion: "Bayern",
    postalCode: "94034"
  },
  email: "email@stanislavpanchenko.de",
  image: {
    "@type": "ImageObject",
    contentUrl:
      "https://avatars1.githubusercontent.com/u/28537457?s=460&u=46c3ae998f6493ecc346c45209f8762e0856d41f&v=4",
    description: "Portrait"
  },
  jobTitle: "Software Developer",
  name: "Stanislav Panchenko",
  url: "http://www.stanislavpanchenko.de",
  knowsLanguage: [
    {
      "@type": "Language",
      name: "English",
      alternateName: "en"
    },
    {
      "@type": "Language",
      name: "German",
      alternateName: "de"
    },
    {
      "@type": "Language",
      name: "Russian",
      alternateName: "ru"
    },
    {
      "@type": "Language",
      name: "Ukraine",
      alternateName: "ua"
    }
  ]
};

const SchemaScript: VFC<{ schema: any }> = ({ schema }) => {
  return (
    <script
      type={"application/ld+json"}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    ></script>
  );
};

const HomeHead = () => {
  return (
    <Head>
      <title>Stanislav Panchenko</title>
      <HomeMeta />
    </Head>
  );
};

export default HomeHead;
