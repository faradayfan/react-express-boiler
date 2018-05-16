import { UPDATE_HOME_CONTENT } from "./constants";

const initialState = {
  isLoading: false
}


export default (state = initialState, action) => {
  console.log('handling', action, state)
  switch (action.type) {
    case UPDATE_HOME_CONTENT:
      return {
        ...state,
        isLoading: true
      }
    default:
      return {
        ...state
      }
  }
}