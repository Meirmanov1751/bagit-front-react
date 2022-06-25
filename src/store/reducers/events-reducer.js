import {GET_ACTION_TYPE, GET_CATEGORIE, GET_POSTS} from "../const";


const initial = {
  posts: [],
  categories: [],
  activity_type: [],
  loading: false
}

export const EventsReducer = (state = initial, action) => {
  // console.log(action.payload)
  switch (action.type){
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case GET_ACTION_TYPE:
      return {
        ...state,
        activity_type: action.payload
      }
    case GET_CATEGORIE:
      return {
        ...state,
        categories: action.payload,
        loading: true
      }
    default:
      return state
  }
}
