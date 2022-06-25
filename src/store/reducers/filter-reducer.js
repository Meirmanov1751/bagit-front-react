import { SET_CATEGORIES_ID, SET_EVENT_ID} from "../const";

const initial = {
  event: 0,
  categories: 0,
}

export const FilterReducer = (state = initial, action) => {
  console.log(state)
  let copyState;
  switch (action.type){
    case SET_EVENT_ID:
      return {
        ...state,
        event: action.payload
      }
    case SET_CATEGORIES_ID:
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state
  }
}
