import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AnimeList from "./components/AnimeList";
import ImageSlider from "./components/ImageSlider";
import styled from "styled-components";
import Row from "./components/Row";
import Footer from "./components/Footer";

const App = () => {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [topManga, setTopManga] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(false);

  //========search anime
  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };
  const fetchAnime = async (query) => {
    const searchAnime = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());
    setAnimeList(searchAnime.results);
    setLoading(true);
  };
  //=====================
  useEffect(() => {
    const fetchUrl = fetch("https://api.jikan.moe/v4/top/anime")
      .then((resp) => resp.json())
      .then((data) => setTopAnime(data.data.slice(0, 10)));
  }, []);
  useEffect(() => {
    const fetchUrl = fetch("https://api.jikan.moe/v4/top/manga")
      .then((resp) => resp.json())
      .then((data) => setTopManga(data.data.slice(0, 10)));
  }, []);
  useEffect(() => {
    const fetchUrl = fetch("https://api.jikan.moe/v4/seasons/upcoming")
      .then((resp) => resp.json())
      .then((data) => setUpcoming(data.data.slice(0, 10)));
  }, []);
  return (
    <>
      <Navbar
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      {loading ? (
        <AnimeList animeList={animeList} />
      ) : (
        <>
          <ImageSlider />
          <>
            <Row isLarge title='Top Anime' topAnime={topAnime} />
            <Row title='Upcoming' topAnime={upcoming} />
            <Row title='Top Manga' topAnime={topManga} />
          </>
        </>
      )}
      <Footer />
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
`;
export default App;
