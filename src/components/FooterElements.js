import styled from "styled-components";

export const Container = styled.footer`
  background: black;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0px 0px 0px;
  padding: 25px;
  font-size: 15px;
`;

export const Links = styled.a`
  margin: 0px 25px;
  text-decoration: none;
  color: #fff;
  padding: 5px;
  &:hover {
    text-decoration: underline;
  }
`;
