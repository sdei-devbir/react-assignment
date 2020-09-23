import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import logo from "../../logo.svg";
import apis from "../../services/api.service";

const Home = ({}) => {
  console.log(apis, " checkking in home ");

  const getCategories = async () => {
    const { categories, err } = await apis.getCategories();

    if (!err && categories.data && categories.data.length) {
      console.log(categories.data, "categories received");
    }
  };

  const categorySearch = async keyword => {
    const { categories, err } = await apis.categorySearch(keyword);
    if (!err && categories.data && categories.data.length) {
      console.log(categories.data, "categories searched received");
    }
  };

  return (
    <div>
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}

      <div className="container">
        Home Component
        <div class="buttons-holder">
          <button
            onClick={() => {
              getCategories();
            }}
            className="btn btn-danger"
          >
            Get Categories
          </button>

          <button
            onClick={() => {
              categorySearch("ery");
            }}
            className="btn btn-danger"
          >
            Categories search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
