/* eslint camelcase: 0 */
import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Stripe",
  name: "reaction-stripe",
  icon: "fa fa-cc-stripe",
  autoEnable: true,
  settings: {
    "mode": false,
    "api_key": "",
    "reaction-stripe": {
      enabled: false,
      support: [
        "Authorize",
        "Capture",
        "Refund"
      ]
    }
  },
  registry: [
    // Settings panel
    {
      label: "Stripe",
      provides: "paymentSettings",
      container: "dashboard",
      template: "stripeSettings"
    },

    // Payment form for checkout
    {
      template: "stripePaymentForm",
      provides: "paymentMethod",
      icon: "fa fa-cc-stripe"
    },

    // Redirect for Stripe Connect Sign-In
    {
      template: "stripeConnectRedirect",
      route: "/stripe-connect-redirect"
    },

    // Payment Signup for Merchants
    {
      label: "Setup Stripe Merchant Account",
      icon: "fa fa-cc-stripe",
      container: "dashboard",
      provides: "marketplaceMerchantSettings",
      template: "stripeConnectMerchantSignup",
      hideForShopTypes: ["primary"]
    }
  ]
});
