import React from "react";
import styled from "styled-components";
import HomeImage from "../assests/home-background.png";
import ImgSlider from "./ImgSlider";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 100vh;
  background-image: url(${HomeImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  padding: 10px 30px;
`;
