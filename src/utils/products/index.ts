import shopify from "../../api/shopify";

export const fetchProducts = async () => {
  const query = `
        {
            products(first: 10) {
                edges {
                    node {
                        id
                        title
                        description
                        images(first: 1) {
                            edges {
                                node {
                                    src
                                }
                            }
                        }
                        variants(first: 1) {
                            edges {
                                node {
                                    price {
                                        amount
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `;

  const response = await shopify.post("", { query });
  return response.data.data.products.edges;
};
