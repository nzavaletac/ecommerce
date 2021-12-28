import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { Main } from "../components/ProductCardElements";
import Footer from "../components/Footer";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: "/products",
    }).then(({ data }) => setProducts(data));
  }, []);

  return (
    <>
      <Navbar />
      <Main>
        <ProductCard products={products} />
      </Main>
      <Footer />
    </>
  );
};

export default Products;
