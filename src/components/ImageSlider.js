import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
const ImageSlider = () => {
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    const fetchUrl = fetch("https://kitsu.io/api/edge/trending/anime")
      .then((resp) => resp.json())
      .then((data) => setAnime(data.data.slice(0, 7)));
  }, []);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Wrapper>
      <div className='title'></div>
      <Slider {...settings} className='slider'>
        {anime.map((item) => {
          return (
            <AnimeSlider key={item.id}>
              <header
                className='banner'
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url(${item.attributes.coverImage.original})`,
                  backgroundPosition: "center center",
                }}
              >
                <div className='banner-contents'>
                  <h1 className='banner-title'>
                    {item.attributes.titles.en_jp}
                  </h1>
                  <div className='banner-buttons'>
                    <button className='banner-button'>Trailer</button>
                  </div>

                  <h1 className='banner-description'>
                    {item.attributes.description.slice(0, 350)}...
                  </h1>
                </div>
                <div className='banner-fadeBottom'></div>
              </header>
            </AnimeSlider>
          );
        })}
      </Slider>
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
    background: rgba(0, 0, 0, 0.5);
    margin-left: 30px;
    padding-top: 60px;
    padding-left: 20px;
    height: 100%;
    width: 40%;
    .banner-description {
      opacity: 1;
    }
  }
  .banner-contents:hover {
    .banner-description {
      opacity: 1;
    }
  }
  .banner-title {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }
  .banner-description {
    width: 55rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 360px;
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
    bottom: -9rem;
  }
`;
const AnimeSlider = styled.div`
  height: 4rem;
`;

export default ImageSlider;
