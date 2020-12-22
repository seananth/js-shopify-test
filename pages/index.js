import React, { useState } from "react";
import { Page, Layout, Card, Thumbnail } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { Icon } from "@shopify/polaris";
import {
  CirclePlusMinor,
  EditMajor,
  AnalyticsMajor,
  ActivitiesMajor,
  StoreStatusMajor,
} from "@shopify/polaris-icons";

function Index() {
  const [open, setOpen] = useState(false);
  const [resources, setResources] = useState();

  return (
    <Page
      title="Select Product"
      primaryAction={{
        content: "Select product",
        onAction: () => setOpen(true),
      }}
    >
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        allowMultiple={false}
        open={open}
        onCancel={() => setOpen(false)}
        onSelection={(resources) => handleSelection(resources)}
      />

      <Layout>
        <Layout.Section>
          <Card title="Product" sectioned>
            <p>bababoey</p>
            <Thumbnail
              source=""
              size="large"
              alt="Black choker necklace"
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
  function handleSelection(resources) {
    setResources(resources);
    console.log(resources);
  }
}

export default Index;

//icons
//https://polaris-icons.shopify.com/?icon=StoreStatusMajor&q=stat
