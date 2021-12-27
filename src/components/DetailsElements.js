import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  margin-top: 25px;
  flex-wrap: wrap;
  padding: 10px;
  max-width: 1248px;
  justify-content: center;
  margin: 50px auto;
  box-shadow: #aaa 0px 0px 8px;
`;

export const ContainerImage = styled.div`
  width: 500px;
  margin: 25px;
  text-align: center;
`;

export const Image = styled.img`
  width: 100%;
  cursor: zoom-in;
`;

export const ContainerDetail = styled.div`
  /* padding-top: 10px; */
  width: 500px;
  margin: 25px;
`;

export const Title = styled.h2`
  margin: 15px 0;
`;

export const Category = styled.div`
  margin: 15px 0;
  border-radius: 15px;
  border: 1px solid gainsboro;
  width: fit-content;
  padding: 5px 15px;
`;

export const Id = styled.h3`
  margin-bottom: 15px;
`;

export const Price = styled.p`
  font-size: 25px;
  font-weight: bold;
  margin: 15px 0;
`;

export const Add = styled.div`
  background-color: #7b39ff;
  border: none;
  color: #ffffff;
  text-align: center;
  padding: 5px;
  border-radius: 50px;
  margin: 15px 0;
`;

export const Description = styled.p`
  font-size: 15px;
  margin: 15px 0;
  line-height: 25px;
`;
