import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <p>
          Copyright © 2022 Anisearch | Euger Bonete. All right reserved.
          <br />
          This website is made using React.JS and styled-components.
        </p>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333;
  color: white;
  padding: 3rem 0;
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
  }
`;
export default Footer;
