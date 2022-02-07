import React from "react";
import styled from "styled-components";
//

const Row = ({ topAnime, title, isLarge }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className='card-list'>
        {topAnime.map((item) => (
          <div className='image-container' key={item.mal_id}>
            <a href={item.url} target='_blank'>
              <img
                className={isLarge ? "large anime-image" : "anime-image"}
                src={item.images.webp.large_image_url}
                alt=''
              />
            </a>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  cursor: pointer;
  color: white;
  margin-left: 20px;
  .card-list {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 10px;
  }
  .card-list::-webkit-scrollbar {
    display: none;
  }
  .anime-image {
    object-fit: contain;
    width: 100%;
    min-width: 200px;
    max-height: 250px;
    margin-right: 10px;
    transition: transform 450ms;
  }
  .anime-image:hover {
    transform: scale(1.08);
    opacity: 1;
  }
  .large {
    max-height: 250px;
  }
  .large:hover {
    transform: scale(1.09);
  }
`;
export default Row;
