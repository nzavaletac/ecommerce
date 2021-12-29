import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

export const MainContainer = styled.div`
  display: flex;
  width: 450px;
  margin-left: 15px;
  /* flex-wrap: wrap; */
  justify-content: center;
`;

export const Card = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  cursor: pointer;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: #aaa 0px 0px 8px;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05, 1.05);
    box-shadow: #aaa 0px 0px 20px;
  }
`;

export const CardHeader = styled.div`
  position: relative;
  height: 360px;
  overflow: hidden;
  transition: all 0.5s ease;
`;

export const Image = styled.img`
  width: 100%;
  transition: all 0.5s ease;
`;

export const Price = styled.p`
  padding: 6px 10px;
  /* background-color: #e94a3e; */
  background-color: #7b39ff;
  color: #eee;
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: bold;
`;
export const Detail = styled(Link)`
  padding: 6px 10px;
  background-color: #7b39ff;
  color: #eee;
  border-radius: 50px;
  /* font-weight: bold; */
  text-decoration: none;
  bottom: 0;
  top: 0;
`;

export const Rate = styled.p`
  background-color: #e94a3e;
  color: #eee;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  text-align: center;
  padding-top: 10px;
  font-weight: bold;
`;

export const Count = styled.p`
  background-color: #e94a3e;
  color: #eee;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 10px;
  text-align: center;
  padding-top: 10px;
  font-weight: bold;
`;

export const CardBody = styled.div`
  padding: 15px;
  height: 200px;
`;

export const Id = styled.h3`
  margin-bottom: 15px;
`;

export const CardTitle = styled.h3`
  margin-bottom: 15px;
  /* text-align: center; */
`;

export const CardCategory = styled.h4`
  color: #e94a3e;
  margin-bottom: 15px;
`;

export const CardDescription = styled.p`
  font-size: 13px;
  line-height: 22px;
  color: #666;
  height: 0px;
  /* overflow: hidden; */
  transition: all 0.5s ease;
`;

export const CardFooter = styled.div`
  margin-top: 30px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
`;
