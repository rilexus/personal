import * as React from "react";
import SEO from "../components/seo";
import Header from "../components/header/header";
import PageTitle from "../components/page-title/page-title";
import Layout from "../components/layout/layout";
import H1 from "../components/H1/H1";
import DropdownList from "../components/dropdown-list/DropdownList";
import DunckelfeldListElement from "../page-components/collaborations/DunckelfeldListElement";
import AvengaListElement from "../page-components/collaborations/AvengaListElement";
import SnapbusListElement from "../page-components/collaborations/SnabbusListElement";
import PrymListElement from "../page-components/collaborations/PrymListElement";

const Collaborations = () => {
  const prym_logo = "prym_logo.png";
  const dunckelfeld_logo = "dunckelfeld-logo.png";
  const avenga_logo = "avenga_logo.png";
  const snapbus_logo = "snapbus_logo.jpg";

  return (
    <div>
      <SEO title="Collaborations" />
      <Header />
      <PageTitle title={"Collaborations"} />
      <main>
        <Layout>
          <section>
            <div
              style={{
                marginTop: "20vh"
              }}
            >
              <H1>Collaborations</H1>

              <DropdownList>
                <PrymListElement imgSrc={prym_logo} />
                <DunckelfeldListElement imgSrc={dunckelfeld_logo} />
                <AvengaListElement imgSrc={avenga_logo} />
                <SnapbusListElement imgSrc={snapbus_logo} />
              </DropdownList>
            </div>
          </section>
        </Layout>
      </main>
    </div>
  );
};

export default Collaborations;
