
import { UPDATE_HOME_CONTENT, UPDATE_ARTICLES_LIST } from "./constants";

const initialState = {
  isLoading: false,
  articles: []
}


export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HOME_CONTENT:
      return {
        ...state,
        isLoading: true,
      }
    case UPDATE_ARTICLES_LIST:
      return {
        ...state,
        isLoading: false,
        articles: [...action.articles]
      }
    default:
      return {
        ...state
      }
  }
}