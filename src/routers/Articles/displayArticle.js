import React, { Component } from "react";
import { connect } from "react-redux";

class DisplayArticle extends Component {
  render() {
    return (
      <div>
        <h3>Show redux store data</h3>
        <h5>Article List</h5>
        {this.props.storeArticles.map((article, index) => {
          return (
            <li>
              {index + 1} {article}
            </li>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    storeCounter: state.counter,
    storeArticles: state.articles
  };
};

export default connect(mapStateToProps)(DisplayArticle);
