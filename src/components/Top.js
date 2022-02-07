import React from "react";
import styled from "styled-components";
//
import Slider from "react-slick";

const Top = ({ topAnime }) => {
  console.log(topAnime);
  return (
    <Wrapper>
      <h1>Top Anime</h1>
      <div className='card-list'>
        {topAnime.map((item) => (
          <div className='image-container' key={item.mal_id}>
            <img
              className='anime-image'
              src={item.images.webp.large_image_url}
              alt=''
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;

  .card-list {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 10px;
  }
  .card-list::-webkit-scrollbar {
    display: none;
  }
  .card-list {
  }

  .anime-image {
    object-fit: contain;
    width: 100%;
    min-width: 200px;
    max-height: 200px;
    /* margin-right: 5px; */
    transition: transform 450ms;
  }
  .anime-image:hover {
    transform: scale(1.08);
    opacity: 1;
  }
`;
export default Top;
