export const PERSONAL_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  gender: "male",
  birthDate: "03/13/1992",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Germany",
    addressLocality: "Passau",
    addressRegion: "Bayern",
    postalCode: "94034",
  },
  email: "email@stanislavpanchenko.de",
  telephone: "+4917645840631",
  image: {
    "@type": "ImageObject",
    contentUrl:
      "https://avatars1.githubusercontent.com/u/28537457?s=460&u=46c3ae998f6493ecc346c45209f8762e0856d41f&v=4",
    description: "Portrait",
  },
  jobTitle: "Software Developer",
  name: "Stanislav Panchenko",
  url: "http://www.stanislavpanchenko.de",
  sameAs: [
    "https://github.com/rilexus",
    "https://www.linkedin.com/in/stanislav-p-98b254192/",
  ],
  knowsAbout: [
    "JavaScript",
    "Node.js",
    "React",
    "NestJs",
    "Prisma",
    "Styled-Components",
    "CSS",
    "HTML",
  ],
  knowsLanguage: [
    {
      "@type": "Language",
      name: "English",
      alternateName: "en",
    },
    {
      "@type": "Language",
      name: "German",
      alternateName: "de",
    },
    {
      "@type": "Language",
      name: "Russian",
      alternateName: "ru",
    },
    {
      "@type": "Language",
      name: "Ukraine",
      alternateName: "ua",
    },
  ],
};

export const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.stanislavpanchenko.de",
  about: {
    "@type": "CreativeWork",
    author: {
      "@type": "Person",
      name: "Stanislav Panchenko",
    },
  },
  offers: {
    "@type": "Service",
    serviceType: "Software Development",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Frontend Development",
            description:
              "Development of complex frontend systems with React and plain JavaScript. Familiar with CSS/SCSS/Styled-Components and the common styling solutions.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Backend Development",
            description:
              "Implementation of interfaces to connect the external web services. Development of REST endpoints or micro services, mainly with node and nestjs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "JavaScript Tutoring",
            description:
              "Private, one-on-one JavaScript tutoring lessons tailored to your level and goals, from the fundamentals to working with React and Node.js.",
          },
        },
      ],
    },
  },
};

export const CONTACT_PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  givenName: "Stanislav",
  familyName: "Panchenko",
  name: "Stanislav Panchenko",
  email: "email@stanislavpanchenko.de",
  sameAs: ["https://www.linkedin.com/in/stanislav-p-98b254192/"],
  makesOffer: {
    "@type": "Offer",
    url: "https://stanislavpanchenko.de#service-list",
  },
};
