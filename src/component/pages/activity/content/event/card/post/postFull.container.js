import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import PostFull from "./postFull";

const PostFullContainer = () => {
  let posts = useSelector(state => state.posts.posts)
  let {postId} = useParams()
  let navigate = useNavigate()
  let post = posts.find(post => post.id == postId)
  let date = new Date(post.created_date);
  let MyDateString = ('0' + date.getDate()).slice(-2) + '/'
    + ('0' + (date.getMonth()+1)).slice(-2) + '/'
    + date.getFullYear();

  return (
    <PostFull post={post} MyDateString={MyDateString} navigate={navigate}/>
  );
};

export default PostFullContainer;
