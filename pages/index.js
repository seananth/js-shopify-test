import React, { useState } from "react";
import { Page } from "@shopify/polaris";
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
      />
    </Page>
  );
}

export default Index;

//icons
//https://polaris-icons.shopify.com/?icon=StoreStatusMajor&q=stat
