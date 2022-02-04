import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AnimeList from "./components/AnimeList";
import ImageSlider from "./components/ImageSlider";
const App = () => {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);

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
  return (
    <>
      <Navbar
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      {loading ? <AnimeList animeList={animeList} /> : <ImageSlider />}
    </>
  );
};

export default App;
