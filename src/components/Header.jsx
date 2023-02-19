import {
  faBars,
  faCameraAlt,
  faFilm,
  faHome,
  faPlus,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assests//logo.svg";
const Header = () => {
  const handleClick = () => {
    console.log("done");
    document.getElementById("list").classList.toggle("show");
  };
  return (
    <ZHeader>
      <Link to="/">
        <HeaderLogo src={Logo} />
      </Link>
      <List id="list">
        <ListItem>
          <Link to="/home">
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </ListItem>
        <ListItem>
          <Link to="">
            <FontAwesomeIcon icon={faSearch} /> Search
          </Link>
        </ListItem>
        <ListItem>
          <Link to="">
            <FontAwesomeIcon icon={faPlus} /> WatchList
          </Link>
        </ListItem>
        <ListItem>
          <Link to="">
            <FontAwesomeIcon icon={faStar} /> Originals
          </Link>
        </ListItem>
        <ListItem>
          <Link to="">
            <FontAwesomeIcon icon={faCameraAlt} /> Movies
          </Link>
        </ListItem>
        <ListItem>
          <Link to="">
            <FontAwesomeIcon icon={faFilm} /> Series
          </Link>
        </ListItem>
      </List>

      <LoginButton> Login </LoginButton>
      <ListIcon onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </ListIcon>
    </ZHeader>
  );
};

export default Header;

const ZHeader = styled.div`
  height: 120px;
  padding: 10px 5px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;
const HeaderLogo = styled.img`
  height: 100px;
  width: 100px;
  margin-left: 10px;
`;
const LoginButton = styled.div`
  border: 1px solid gray;
  background-color: transparent;
  padding: 20px 30px;
  border-radius: 10px;
  transition: 0.3s;
  font-weight: 700;
  letter-spacing: 3px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;
const List = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  transition: 0.5s;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
const ListItem = styled.li`
  margin-left: 20px;
  font-size: 20px;
  font-family: cursive;
  letter-spacing: 3px;
  text-align: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background: #0483ee;
    height: 3px;
    width: 0;
    transition: 0.5s;
  }
  &:hover {
    &::before {
      width: 100%;
    }
  }
  svg {
    color: #0483ee;
    margin-right: 5px;
  }
`;
const ListIcon = styled.p`
  display: none;
  font-size: 20px;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    display: block;
    position: absolute;
    bottom: -20px;
    left: 30px;
  }
`;
