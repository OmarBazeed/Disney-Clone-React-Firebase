import React from "react";
import styled from "styled-components";
import Viewer1 from "../assests/viewers-disney.png";
import Viewer2 from "../assests/viewers-marvel.png";
import Viewer3 from "../assests/viewers-national.png";
import Viewer4 from "../assests/viewers-pixar.png";
import Viewer5 from "../assests/viewers-starwars.png";

import DisneyV1 from "../assests/videos/1564674844-disney.mp4";
import DisneyV2 from "../assests/videos/1564676115-marvel.mp4";
import DisneyV3 from "../assests/videos/1564676296-national-geographic.mp4";
import DisneyV4 from "../assests/videos/1564676714-pixar.mp4";
import DisneyV5 from "../assests/videos/1608229455-star-wars.mp4";

const Viewer = () => {
  return (
    <Container>
      <Content>
        <Img src={Viewer1} alt="viewerImg" />
        <Video autoPlay={true} loop={true} playsInline={true}>
          <source src={DisneyV1} type="video/mp4" />
        </Video>
      </Content>
      <Content>
        <Img src={Viewer2} alt="viewerImg" />
        <Video autoPlay={true} loop={true} playsInline={true}>
          <source src={DisneyV2} type="video/mp4" />
        </Video>
      </Content>
      <Content>
        <Img src={Viewer3} alt="viewerImg" />
        <Video autoPlay={true} loop={true} playsInline={true}>
          <source src={DisneyV3} type="video/mp4" />
        </Video>
      </Content>
      <Content>
        <Img src={Viewer4} alt="viewerImg" />{" "}
        <Video autoPlay={true} loop={true} playsInline={true}>
          <source src={DisneyV4} type="video/mp4" />{" "}
        </Video>
      </Content>
      <Content>
        <Img src={Viewer5} alt="viewerImg" />{" "}
        <Video autoPlay={true} loop={true} playsInline={true}>
          <source src={DisneyV5} type="video/mp4" />{" "}
        </Video>
      </Content>
    </Container>
  );
};

export default Viewer;

const Container = styled.div`
  margin-top: 80px;
  padding: 5px 10px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
  gap: 25px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Content = styled.div`
  padding: 5px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border-radius: 10p;
  cursor: pointer;
  position: relative;
  height: 200px;
  overflow: hidden;
  transition: all 0.3s linear;
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.5);
    video {
      opacity: 1;
    }
  }
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-in-out;
  z-index: 2;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 200px;
  z-index: 1;
  transform: scale(2.2);
  opacity: 0;
  transition: all 0.4s ease;
`;
