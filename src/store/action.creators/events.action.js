import {GET_ACTION_TYPE, GET_CATEGORIE, GET_POSTS} from "../const";


export const getPostsActionCreator = (posts) => {
  return {type: GET_POSTS,payload: posts }
}

export const getPostsActionTypeActionCreator = (activity_type) => {
  return {type: GET_ACTION_TYPE,payload: activity_type }
}

export const getPostsCategoriesActionCreator = (categorie) => {
  return {type: GET_CATEGORIE,payload: categorie }
}
