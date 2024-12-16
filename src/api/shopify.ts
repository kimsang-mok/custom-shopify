import axios from "axios";

const shopify = axios.create({
  baseURL: `https://${
    import.meta.env.VITE_SHOPIFY_STORE_URL
  }/api/2023-10/graphql.json`,
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": import.meta.env
      .VITE_SHOPIFY_STOREFRONT_TOKEN,
  },
});

export default shopify;
