type ImageNode = {
  src: string;
};

type VariantNode = {
  price: {
    amount: string;
  };
};

type ProductNode = {
  id: string;
  title: string;
  description: string;
  images: {
    edges: { node: ImageNode }[];
  };
  variants: {
    edges: { node: VariantNode }[];
  };
};

export type ProductEdge = {
  node: ProductNode;
};
