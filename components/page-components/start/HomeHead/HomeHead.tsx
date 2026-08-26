import React from "react";

import { HomeMeta } from "../HomeMeta";
import Head from "next/head";
import { SchemaScript } from "../../../schema-org/SchemaScript";
import { PERSONAL_SCHEMA, SERVICE_SCHEMA } from "../../../schema-org/schema-data";

const HomeHead = () => {
  return (
    <Head>
      <title>Stanislav Panchenko</title>
      <HomeMeta />
      <SchemaScript schema={PERSONAL_SCHEMA} />
      <SchemaScript schema={SERVICE_SCHEMA} />
    </Head>
  );
};

export default HomeHead;
