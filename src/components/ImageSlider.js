import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
const ImageSlider = () => {
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    const fetchUrl = fetch("https://kitsu.io/api/edge/trending/anime")
      .then((resp) => resp.json())
      .then((data) => setAnime(data.data.slice(0, 10)));
  }, []);
  console.log(anime);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Wrapper>
      <div className='title'>
        <h1>Trending Anime</h1>
      </div>
      <Slider {...settings} className='slider'>
        {anime.map((item) => {
          return (
            <AnimeSlider key={item.id}>
              <img
                src={item.attributes.coverImage.original}
                alt={item.attributes.coverImage.original}
              />
              <Overlay>
                <div className='slider-details'>Details</div>
              </Overlay>
            </AnimeSlider>
          );
        })}
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  height: 30vh;
  position: relative;
  color: white;
  .slider {
  }
  .title {
    position: absolute;
    z-index: 1;
    padding: 0 2rem;
  }
`;
const AnimeSlider = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    border-radius: 4px;
    object-fit: cover;
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
      rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    min-width: 500px;
  }
`;
const Overlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.75);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  transition: 0.4s ease;
  .slider-details {
    padding: 2rem;
    top: 0;
    left: 0;
    color: white;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
export default ImageSlider;
