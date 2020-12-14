import { Heading, Page, Navigation } from "@shopify/polaris";
import { Icon } from "@shopify/polaris";
import {
  CirclePlusMinor,
  EditMajor,
  AnalyticsMajor,
  ActivitiesMajor,
  StoreStatusMajor,
} from "@shopify/polaris-icons";

const Index = () => (
  <Page>
    <Heading>Flow Cart :P</Heading>

    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "./ActiveFlows",
            label: "Active Flows",
            icon: ActivitiesMajor,
          },
          {
            url: "/path/to/place",
            label: "Analytics",
            icon: AnalyticsMajor,
          },
          {
            url: "/path/to/place",
            label: "Usage",
            icon: StoreStatusMajor,
          },
        ]}
      />
      <Navigation.Section
        title="Build"
        items={[
          {
            url: "/path/to/place",
            label: "New Flow",
            icon: CirclePlusMinor,
          },
          {
            url: "/path/to/place",
            label: "Edit Flow",
            icon: EditMajor,
          },
        ]}
        action={{
          accessibilityLabel: "Add sales channel",
          icon: CirclePlusMinor,
          onClick: () => {},
        }}
      />
    </Navigation>
  </Page>
);

export default Index;

//icons
//https://polaris-icons.shopify.com/?icon=StoreStatusMajor&q=stat