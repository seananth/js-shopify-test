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
        onSelection={(payloadData) => handleSelection(payloadData)}
      />

      <Layout>
        <Layout.Section>
          <Card title="Product" sectioned>
            <p>pic</p>
            <Thumbnail
              source="https://cdn.shopify.com/s/files/1/0368/1802/6632/products/76990-pinto-bridle_1024x1024@2x.jpg?v=1596035977"
              size="large"
              alt="cool horse"
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
  
  function handleSelection(payloadData) {
    console.log(payloadData);
    setOpen(false)
  }
}

export default Index;

//icons
//https://polaris-icons.shopify.com/?icon=StoreStatusMajor&q=stat
