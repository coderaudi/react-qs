import { ADD_ARTICLE } from "../constants/action-type";

const INIT_STATE = {
  articles: ["Article_one", "article_two"],
  counter: 8
};

function rootReducer(state = INIT_STATE, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;
