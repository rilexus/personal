import * as React from "react";
import Helmet from "react-helmet";

export function SchemaOrg({ data }: any) {
  const schemaOrgData = JSON.stringify(data);

  return (
    <Helmet>
      <script type="application/ld+json">{schemaOrgData}</script>
    </Helmet>
  );
}
