import React, { useState } from "react";

const AnimeList = ({ animeList }) => {
  console.log(animeList);
  return (
    <div>
      {animeList.map((item) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
};

export default AnimeList;
