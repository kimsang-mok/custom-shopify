import { useEffect, useState } from "react";
import HomeView from "./view";
import { fetchProducts } from "../../utils/products";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  useEffect(() => {
    console.log("Products: ", products);
  }, [products]);

  return <HomeView data={products} />;
}
