import React from "react";
import { FaGithub } from "react-icons/fa";
import {
  Container,
  ContainerImage,
  ContainerInformation,
  Image,
  Title,
  Name,
  Description,
  Email,
  Github,
} from "../components/AboutElements";
import Navbar from "../components/Navbar";
import photo from "../images/moe.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <Container>
        <ContainerImage>
          <Image src={photo} alt="" />
        </ContainerImage>

        <ContainerInformation>
          <Title>Personal Information</Title>
          <Name>Noe Zavaleta Cardeña</Name>

          <Description>
            I am 27 years old and I am a JavasCript fullstack web developer. I'm
            from Lima, Perú.
          </Description>
          <div>
            <strong>I learned</strong> <div className="skills">HTML</div>{" "}
            <div className="skills">CSS3</div>
            <div className="skills">React</div>
          </div>
          <Email>nzavaletac@gmail.com</Email>
          <Github href="https://github.com/nzavaletac">
            <FaGithub size="3em" />
          </Github>
        </ContainerInformation>
        <br />
      </Container>
    </>
  );
};

export default About;
