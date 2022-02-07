import React from "react";
import styled from "styled-components";
//
import Slider from "react-slick";
//

//
const settings = {
  infinite: true,
  slidesToShow: 5,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1228,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 5,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 6,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 6,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 6,
        infinite: true,
        dots: true,
      },
    },
  ],
};

//
const Top = ({ topAnime }) => {
  console.log(topAnime);
  return (
    <Wrapper>
      <h1>Top Anime</h1>
      <div className='card-list'>
        <Slider {...settings}>
          {topAnime.map((item) => (
            <div className='image-container' key={item.mal_id}>
              <img
                className='anime-image'
                src={item.images.webp.image_url}
                alt=''
              />
            </div>
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
color: white;
  padding:0 2rem;
  .card-list {
    min-width: 500px;
   padding-left: 2rem;
  } 
    img {
      height: 300px;
      @media (max-width: 720px) {
        height: 250px;
        width: 150px;
      }
    }
  }
`;
export default Top;
