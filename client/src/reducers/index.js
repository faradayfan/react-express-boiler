import { combineReducers } from 'redux'
import articleListReducers from '../components/Views/ArticleList/reducers'
export default combineReducers({
  articles: articleListReducers
})