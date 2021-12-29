import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { Main } from "../components/ProductCardElements";
import Footer from "../components/Footer";
import styled from "styled-components";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: "/products",
    }).then(({ data }) => setProducts(data));
  }, []);

  const TitleHome = styled.h1`
    text-align: center;
    padding: 25px;
  `;

  return (
    <>
      <Navbar />
      <TitleHome>Products</TitleHome>
      <Main>
        <ProductCard products={products} />
      </Main>
      <Footer />
    </>
  );
};

export default Products;
