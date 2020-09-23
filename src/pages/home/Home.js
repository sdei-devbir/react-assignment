import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import fetchCategories from "../../redux/actions/categoriesActions";

const Home = ({ fetchCategories }) => {
  const history = useHistory();

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
        <div className="buttons-holder">
          <button
            onClick={() => {
              return history.push({
                pathname: "/categories"
              });
            }}
            className="btn btn-info"
          >
            Go To Categories Page
          </button>

          <button
            onClick={() => {
              fetchCategories();
            }}
            className="btn btn-danger"
          >
            Get Categories
          </button>

          <button
            onClick={() => {
              // categorySearch("ery");
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

// export default Home;

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => {
      dispatch(fetchCategories());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
