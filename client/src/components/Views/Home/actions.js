
import { UPDATE_HOME_CONTENT, UPDATE_ARTICLES_LIST } from './constants'

export const initiateContentUpdate = () => {
  return {
    type: UPDATE_HOME_CONTENT
  }
}

export const updateArticlesList = (articles) => {
  return {
    type: UPDATE_ARTICLES_LIST,
    articles
  }
}