import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

const Categories = ({ categories }) => {

  const history = useHistory();
  return (
    <div>
      <div className="container">
        Category Component
        <div className="buttons-holder">
        <button
            onClick={() => {
              return history.push({
                pathname: "/"
              });
            }}
            className="btn btn-info"
          >
            Go Home
          </button>
        </div>
        <ul>
          {categories.categories.map((category, key) => (
            <li key={key}>{category.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categoriesData
    // currency: state.currencyData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchCategories: () => {
    //   console.log('fetchCategories component!')
    //   dispatch(fetchCategories());
    // },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
