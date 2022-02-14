import React, { useState } from "react";
import styled from "styled-components";
import AnimeCard from "./AnimeCard";

const AnimeList = ({ animeList }) => {
  const data = animeList.slice(0, 10);
  return (
    <Wrapper>
      {data.map((item) => {
        return <AnimeCard item={item} key={item.mal_id} />;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 2rem;
  color: white;
`;
export default AnimeList;
