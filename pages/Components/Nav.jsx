import { Heading, Page, Navigation } from "@shopify/polaris";
import { Icon } from "@shopify/polaris";
import {
  CirclePlusMinor,
  EditMajor,
  AnalyticsMajor,
  ActivitiesMajor,
  StoreStatusMajor,
} from "@shopify/polaris-icons";

const Nav = () => (
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
          url: "./Flows",
          label: "View Flows",
          icon: CirclePlusMinor,
        },
      ]}
      action={{
        accessibilityLabel: "Add sales channel",
        icon: CirclePlusMinor,
        onClick: () => {},
      }}
    />
  </Navigation>
);

export default Nav;
