import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import SliderImg1 from "../assests/slider-badag.jpg";
import SliderImg2 from "../assests/slider-badging.jpg";
import SliderImg3 from "../assests/slider-scale.jpg";
import SliderImg4 from "../assests/slider-scales.jpg";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Warp>
        <Img src={SliderImg1} alt="slider-pic" />
      </Warp>
      <Warp>
        <Img src={SliderImg2} alt="slider-pic" />
      </Warp>
      <Warp>
        <Img src={SliderImg3} alt="slider-pic" />
      </Warp>
      <Warp>
        <Img src={SliderImg4} alt="slider-pic" />
      </Warp>
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Warp = styled.div`
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  &:hover {
    border: 4px solid gray;
  }
`;
