import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import CtaLogo from "../assests/cta-logo-one.svg";
import CtaLogo2 from "../assests/cta-logo-two.png";
import BackgroundImg from "../assests/login-background.jpg";
import { auth } from "../firebase";
const Login = () => {
  const { pic } = useSelector((state) => state.userReducer);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        Swal.fire({
          title: `<div> 
        <span style="color:#F9B300;font-size:20px">Hint!</span> <span style="color:black;font-size:18px;font-weight:normal"> You Have To Login To Go For Movies </span>
        </div>`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
    });
  });
  return (
    <Conatiner>
      <Content>
        <Ct src={CtaLogo} alt="cta-logo" />
        <Link to={pic && "/home"}>
          <Button>GET ALL THERE</Button>
        </Link>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CtLogoTwo src={CtaLogo2} alt="cta-logo2" />
      </Content>
    </Conatiner>
  );
};

export default Login;
const Ct = styled.img`
  max-width: 650px;
  @media (max-width: 500px) {
    width: 300px !important;
  }
  @media (max-width: 768px) {
    width: 500px;
  }
`;

const Button = styled.div`
  background: #0063e5;
  width: 650px;
  height: 100px;
  border: 1px solid white;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  font-weight: bold;
  word-spacing: 7px;
  font-size: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: 0.5s;
  margin-top: 10px;

  &:hover {
    background-color: #0483ee;
  }
  @media (max-width: 500px) {
    width: 300px !important;
  }
  @media (max-width: 768px) {
    width: 500px;
  }
`;
const Description = styled.div`
  max-width: 650px;
  margin: 20px 0;
  word-spacing: 4px;
  font-style: italic;
  @media (max-width: 500px) {
    width: 300px !important;
  }
  @media (max-width: 768px) {
    width: 500px;
  }
`;
const CtLogoTwo = styled.img`
  max-width: 650px;
  @media (max-width: 500px) {
    width: 300px !important;
  }
  @media (max-width: 768px) {
    width: 500px;
  }
`;
const Conatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 100vh;
`;

const Content = styled.section`
  height: 100vh;
  width: 100%;
  background-image: url("${BackgroundImg}");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
