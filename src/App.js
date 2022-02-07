import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AnimeList from "./components/AnimeList";
import ImageSlider from "./components/ImageSlider";
import styled from "styled-components";
import Row from "./components/Row";
import Banner from "./components/Banner";

const App = () => {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
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
  //=====================Schedule anime
  useEffect(() => {
    const fetchUrl = fetch("https://api.jikan.moe/v4/top/anime")
      .then((resp) => resp.json())
      .then((data) => setTopAnime(data.data.slice(0, 10)));
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
            <Row isLarge title='Recommended' topAnime={topAnime} />
            <Row title='Top Rated' topAnime={topAnime} />
            <Row title='Upcoming' topAnime={topAnime} />
          </>
        </>
      )}
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
`;
export default App;
