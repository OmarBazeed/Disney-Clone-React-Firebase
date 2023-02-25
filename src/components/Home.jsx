import React from "react";
import styled from "styled-components";
import HomeImage from "../assests/home-background.png";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommands from "./Recommands";
import Trending from "./Trending";
import Viewer from "./Viewer";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Recommands />
      <NewDisney />
      <Trending />
      <Originals />
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
  padding: 5px 30px;
  overflow-x: hidden;
`;
