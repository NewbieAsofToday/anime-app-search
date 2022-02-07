import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Banner = () => {
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    const fetchUrl = fetch("https://kitsu.io/api/edge/trending/anime")
      .then((resp) => resp.json())
      .then((data) => setAnime(data.data.slice(0, 1)));
  }, []);
  console.log(anime);
  return (
    <Wrapper>
      {anime.map((item) => {
        console.log(item.attributes);
        return (
          <header
            key={item.id}
            className='banner'
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${item.attributes.posterImage.original})`,
              backgroundPosition: "center center",
            }}
          >
            <div className='banner-contents'>
              <h1 className='banner-title'>{item.attributes.titles.en_jp}</h1>
              <div className='banner-buttons'>
                <button className='banner-button'>Trailer</button>
                <button className='banner-button'>Trailer</button>
              </div>

              <h1 className='banner-description'>
                {item.attributes.description}
              </h1>
              <div className='banner-fadeBottom'></div>
            </div>
          </header>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .banner {
    color: white;
    object-fit: contain;
    height: 448px;
  }
  .banner-contents {
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;
  }
  .banner-title {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }
  .banner-description {
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 360px;
    height: 80px;
  }
  .banner-button {
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    padding-bottom: 0.5rem;
  }
  .banner-button:hover {
    color: #000;
    background: #e6e6e6;
    transition: all 0.2s;
  }
  .banner-fadeBottom {
    position: relative;
    height: 7.4rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #111
    );
    bottom: -6px;
  }
`;
export default Banner;
