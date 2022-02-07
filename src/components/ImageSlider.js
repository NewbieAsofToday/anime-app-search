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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  return (
    <Wrapper>
      <div className='title'></div>
      <Slider {...settings} className='slider'>
        {anime.map((item) => {
          return (
            <AnimeSlider key={item.id}>
              <img
                src={item.attributes.coverImage.original}
                alt={item.attributes.coverImage.original}
              />
              <Overlay>
                <div className='slider-details'>
                  <div className='titles'>
                    <h1>{item.attributes.titles.en_jp}</h1>
                    <h3>{item.attributes.titles.ja_jp}</h3>
                  </div>
                  <div className='synopsis'>
                    <h4>Synopsis:</h4>
                    <p>{item.attributes.synopsis.slice(0, 320)}...</p>
                  </div>
                  <a
                    href={`https://www.youtube.com/watch?v=${item.attributes.youtubeVideoId}`}
                    target='_blank'
                    className='trailer-btn'
                  >
                    <h2>Watch Trailer</h2>
                  </a>
                </div>
              </Overlay>
            </AnimeSlider>
          );
        })}
      </Slider>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  min-width: 520px;
  width: 95vw;
  margin: 0 auto;
  position: relative;
  color: white;
  .slider {
  }
  .title {
    margin: 0.2rem 0;
  }
`;
const AnimeSlider = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 45vh;
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
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    .trailer-btn {
      background-color: yellow;
      outline: none;
      border: none;
      padding: 1rem 1.5rem;
      margin-bottom: 1rem;
      transition: 0.4s ease;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
export default ImageSlider;
//arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        position: "absolute",
        zIndex: "2",
        borderRadius: "2rem",
        alignItems: "center",
        background: "#333",
        padding: "1.5rem",
        justifyContent: "center",
      }}
      onClick={onClick}
    />
  );
}
