import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import HomeImage from "../assests/home-background.png";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommands from "./Recommands";
import Trending from "./Trending";
import Viewer from "./Viewer";
import { setMovies } from "../redux/movieSlice";
import db from "../firebase";
const Home = () => {
  const dispatch = useDispatch();

  let recommends = [];
  let originals = [];
  let newDisneys = [];
  let trendings = [];
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        if (doc.data().type === "trending") {
          trendings.push({ id: doc.id, ...doc.data() });
        } else if (doc.data().type === "new") {
          newDisneys.push({ id: doc.id, ...doc.data() });
        } else if (doc.data().type === "original") {
          originals.push({ id: doc.id, ...doc.data() });
        } else if (doc.data().type === "recommend") {
          recommends.push({ id: doc.id, ...doc.data() });
        }
      });
      dispatch(
        setMovies({
          trending: trendings,
          original: originals,
          newDisney: newDisneys,
          recommend: recommends,
        })
      );
    });
  }, []);
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
