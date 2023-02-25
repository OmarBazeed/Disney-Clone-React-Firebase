import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import rec1 from "../assests/viewers-national.png";
const Recommands = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <h4
        style={{
          filter: "drop-shadow(2px 3px 3px tomato)",
          wordSpacing: "5px",
          letterSpacing: "5px",
          fontSize: "20px",
        }}
      >
        Recommands For You...
      </h4>
      <Container>
        <Content>
          <Link to="">
            <img src={rec1} alt="recommand-img" />
          </Link>
        </Content>
        <Content>
          <Link to="">
            <img src={rec1} alt="recommand-img" />
          </Link>
        </Content>
        <Content>
          <Link to="">
            <img src={rec1} alt="recommand-img" />
          </Link>
        </Content>
        <Content>
          <Link to="">
            <img src={rec1} alt="recommand-img" />
          </Link>
        </Content>
      </Container>
    </div>
  );
};

export default Recommands;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 25px;
  @media (max-width: 540px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  margin-bottom: 10px;
`;

const Content = styled.div`
  border-radius: 15px;
  padding: 5px;
  transition: all 0.3s ease-in-out;
  img {
    width: 100%;
    height: 100%;
    border: 4px solid rgb(249 249 249 / 10%);
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5),
      0px 5px 5px 5px rgba(0, 0, 0, 0.8);
    border-color: rgba(225, 225, 225, 0.5);
  }
`;
