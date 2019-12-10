import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../../actions/article_actions";

class AddArticle extends Component {
  state = {
    title: ""
  };

  nameChangeHandler = event => {
    const enterdName = event.target.value;
    this.setState({ title: enterdName });
  };

  handlerSubmitAritcle = event => {
    event.preventDefault();
    if (this.state.title.trim() != "") this.props.addArticle(this.state.title);
    console.log(this.state.title);
  };

  render() {
    return (
      <div>
        <h1>Add new Article</h1>
        <form onSubmit={event => this.handlerSubmitAritcle(event)}>
          <input
            type="text"
            onChange={event => this.nameChangeHandler(event)}
          />
          <button type="submit">Add Article</button>
        </form>
        {this.state.name}
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

const mapDispatchToProps = dispatch => {
  return {
    addArticle: articles => dispatch(addArticle(articles))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddArticle);
