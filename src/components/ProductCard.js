import React from "react";
import Navbar from "./Navbar";
import {
  Card,
  CardBody,
  CardCategory,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Count,
  Detail,
  Id,
  Image,
  MainContainer,
  Price,
  Rate,
} from "./ProductCardElements";

const ProductCard = ({ products }) => {
  return products.map(({ id, title, image }) => (
    <>
      <MainContainer>
        <Card key={id}>
          <CardHeader>
            <Image src={image} />
            {/* <Price>S/ {price}</Price> */}¿
            {/* <Count>Count {rating.count}</Count> */}
            {/* <Rate>Rate {rating.rate}</Rate> */}
          </CardHeader>
          <CardBody>
            <Id>Id: {id}</Id>
            <CardTitle>{title}</CardTitle>
            <Detail to={`/products/${id}`}>Got To Detail</Detail>
            {/* <CardCategory>Category: {category}</CardCategory> */}
            {/* <CardDescription>{description}</CardDescription> */}
          </CardBody>
        </Card>
      </MainContainer>
    </>
  ));
};

export default ProductCard;
