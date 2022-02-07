import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
const Navbar = ({ handleSearch, search, setSearch }) => {
  return (
    <Wrapper>
      <h1>
        Ani<span>Search</span>
      </h1>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder='Search for Anime...'
        />
        <FaSearch className='logo' />
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: sticky;
  top: 0;
  min-width: 520px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  padding: 0 2rem;
  height: 10vh;
  h1 {
    color: #fff;
    span {
      color: #ccc;
    }
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      font-size: 1.2rem;
    }
    .logo {
      color: white;
      font-size: 2rem;
    }
  }
`;
export default Navbar;
