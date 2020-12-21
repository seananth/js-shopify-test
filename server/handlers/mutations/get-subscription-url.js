import "isomorphic-fetch";
import { gql } from "apollo-boost";

export function RECURRING_CREATE(url) {
  return gql`
    mutation {
      appSubscriptionCreate(
          name: "Super Duper Plan"
          returnUrl: "${url}"
          test: true
          lineItems: [
          {
            plan: {
              appUsagePricingDetails: {
                  cappedAmount: { amount: 49, currencyCode: USD }
                  terms: "3 flows"
              }
            }
          }
          {
            plan: {
              appRecurringPricingDetails: {
                  price: { amount: 149, currencyCode: USD }
              }
            }
          }
          ]
        ) {
            userErrors {
              field
              message
            }
            confirmationUrl
            appSubscription {
              id
            }
        }
    }`;
}

export const getSubscriptionUrl = async ctx => {
  const { client } = ctx;
  const confirmationUrl = await client
    .mutate({
      mutation: RECURRING_CREATE(process.env.HOST)
    })
    .then(response => response.data.appSubscriptionCreate.confirmationUrl);

  return ctx.redirect(confirmationUrl);
};
