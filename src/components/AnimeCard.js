import React from "react";
import styled from "styled-components";
const AnimeCard = ({ item }) => {
  console.log(item);
  const { image_url, title, url } = item;
  return (
    <Container>
      <a href={url} target='_blank'>
        <img className='image' src={image_url} alt={image_url} />
        <div className='title'>{title}</div>
      </a>
    </Container>
  );
};
const Container = styled.div`
  height: 350px;
  width: 250px;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .image {
    height: 250px;
    width: 200px;
    border-radius: 10px;
    transition: 0.4s;
  }
  .image:hover {
    transform: translateY(-5px);
  }
  .title {
    color: white;
    width: 250px;
    font-weight: 600;
  }
`;
export default AnimeCard;
