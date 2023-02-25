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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assests//logo.svg";
import { auth, provider } from "../firebase";
import { addUser, logOutUser } from "../redux/userSlice";

const Header = () => {
  const { name, pic } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    document.getElementById("list").classList.toggle("show");
  };
  const handleAuth = async () => {
    await auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch(addUser(res.user));
      })
      .catch((err) => alert(err.message));
  };
  const handleLogOut = () => {
    auth.signOut();
    dispatch(logOutUser());
    navigate("/");
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(addUser(user));
        navigate("/home");
      }
    });
  }, []);
  return (
    <ZHeader>
      <Link to="/">
        <HeaderLogo src={Logo} alt="logo" />
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
      {name !== "" ? (
        <SignInPic onClick={handleLogOut}>
          <img
            src={pic}
            alt="..."
            style={{ width: "75px", height: "75px", borderRadius: "50%" }}
          />
        </SignInPic>
      ) : (
        <LoginButton onClick={handleAuth}> Login </LoginButton>
      )}

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
  filter: drop-shadow(5px 5px 10px white);
`;
const LoginButton = styled.div`
  border: 1px solid gray;
  background: transparent;
  padding: 20px 30px;
  border-radius: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
    box-shadow: 0 0 20px 9px #0063e582;
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
const SignInPic = styled.div`
  cursor: pointer;
  position: relative;
  &::before {
    position: absolute;
    content: "Sign Out";
    bottom: -19px;
    left: -56px;
    background: #0063e5;
    color: white;
    -webkit-transition: all 0.3s;
    transition: all 0.5s;
    padding: 5px;
    border-radius: 3px;
    font-weight: bold;
    opacity: 0;
  }
  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;
