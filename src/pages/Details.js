import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {
  Container,
  ContainerDetail,
  ContainerImage,
  Id,
  Image,
  Title,
  Category,
  Price,
  Description,
  Add,
} from "../components/DetailsElements";
import Navbar from "../components/Navbar";

const Details = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  // Estado para obtener el objeto rating
  const [rating, setRating] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: `/products/${productId}`,
    }).then(({ data }) => {
      setProduct(data);
      setRating(data.rating);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <ContainerImage>
          <Image src={product.image} />
        </ContainerImage>
        <ContainerDetail>
          <Title>{product.title}</Title>
          <Id>Id: {product.id}</Id>
          <Category>{product.category}</Category>
          <p>
            <strong>Precio unitario</strong>
          </p>
          <Price>S/ {product.price}</Price>
          <Add>
            <FaShoppingCart size="30px" />
          </Add>
          <p>
            <strong>Description</strong>
          </p>
          <Description>{product.description}</Description>
          <p>
            Rate <strong>{rating.rate}</strong> Count{" "}
            <strong>{rating.count}</strong>
          </p>
        </ContainerDetail>
      </Container>
    </>
  );
};

export default Details;
