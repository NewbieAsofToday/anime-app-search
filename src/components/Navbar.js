import React from "react";
import styled from "styled-components";
const Navbar = ({ handleSearch, search, setSearch }) => {
  return (
    <>
      <h1>AniSearch</h1>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
    </>
  );
};

export default Navbar;
