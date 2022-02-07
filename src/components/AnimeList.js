import React, { useState } from "react";
import styled from "styled-components";
import AnimeCard from "./AnimeCard";

const AnimeList = ({ animeList }) => {
  const data = animeList.slice(0, 10);
  console.log(data);
  return (
    <Wrapper>
      {data.map((item) => {
        return <h1>hello world</h1>;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  margin: 2rem;
`;
export default AnimeList;
