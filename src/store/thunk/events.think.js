import {getPostsActionCreator, getPostsActionTypeActionCreator, getPostsCategoriesActionCreator} from "../action.creators/posts.action";
import instance from "../api";
import {GET_CATEGORIE} from "../const";

export const PostsThunk = () => (dispatch) => {
  instance.get('posts/')
    .then(res => dispatch(getPostsActionCreator(res.data)))
}

export const ActivityTypeThunk = () => (dispatch) => {
  instance.get('activity_type/')
    .then(res => dispatch(getPostsActionTypeActionCreator(res.data)))
}

export const CategoriesTypeThunk = () => (dispatch) => {
  instance.get('category/')
    .then(res => dispatch(getPostsCategoriesActionCreator(res.data)))
}


