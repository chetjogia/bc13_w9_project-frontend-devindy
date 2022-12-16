import React from "react";
import "./Search.css";

export function Search({ inputHandler, searchFilterChoice }) {
  return (
    <div className="search">
      <select
        onChange={searchFilterChoice}
        id="search-filter"
        name="search-filter"
      >
        <option value="first_name">First Name</option>
        <option value="last_name">Last Name</option>
        <option value="strength">Strength</option>
        <option value="weakness">Weakness</option>
      </select>
      <input
        placeholder="Enter search criteria here"
        onChange={inputHandler}
        className="input"
      ></input>
    </div>
  );
}

export default Search;
