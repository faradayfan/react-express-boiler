import axios from 'axios'

import { UPDATE_HOME_CONTENT } from "./constants";


const initialState = {
  isLoading: false
}


export default async (state = initialState, action) => {
  console.log('handling', action, state)
  switch (action.type) {
    case UPDATE_HOME_CONTENT:
      let result = await axios.get('/news', { crossdomain: true })
      return {
        ...state,
        isLoading: false,
        articles: result
      }
    default:
      return {
        ...state
      }
  }
}