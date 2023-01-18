import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import "./SearchBar.css";

function SearchBar() {
  const [recipes, setRecipes] = useState();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("adobo");
  const [validQuery, setValidQuery] = useState(false);
  const [load, setLoad] = useState(true);

  //get request to localhost:5000
  useEffect(() => {
    setLoad(true);
    const getResponse = () => {
      axios.get(`http://localhost:5000/recipes/${query}`).then((response) => {
        setRecipes(response.data);
        setLoad(false);
      });
    };

    if (
      !query ||
      query === " " ||
      !query.charAt(0).match(/[a-z]/i) ||
      !/[a-z]/i.test(query)
    ) {
      setLoad(false);
      setValidQuery(false);
      console.log("Not Valid");
      return;
    }
    setValidQuery(true);
    getResponse();
  }, [query]);

  //search input
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <>
      <div className="recipe-container">
        <section className="nav-bar">
          <div className="search-bar">
            <form className="form" onSubmit={onSubmit}>
              <input
                type="text"
                value={search}
                onChange={onChange}
                placeholder="Search a food"
                required
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </section>
        <section className="_cards">
          <div className="_cards-container">
            <Cards load={load} validQuery={validQuery} recipes={recipes} />
          </div>
        </section>
      </div>
    </>
  );
}

export default SearchBar;
