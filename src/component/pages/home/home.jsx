import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {PostsThunk} from "../../store/thunk/posts.think";
import PostsCart from "./posts.cart/posts.cart";

const Home = () => {
  const text = useSelector(state => state.filter.text)
  const posts = useSelector(state => state.posts.posts)
  const [isSort, setIsSort] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(PostsThunk())
  },[])

  const filetPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(text.toLowerCase())
  })

  // const sortByDate = posts.created_date.sort((a, b) => a - b ) posts.sort((a, b) => a.Number.parseFloat(posts.created_date) - b.Number.parseFloat(posts.created_date)

  const dates = Number.parseFloat(posts.created_date)

  const hendDate = () =>{
    return posts.sort((a, b) => Number.parseFloat(b.created_date) - Number.parseFloat(a.created_date))
  }
  return (
      <div className="col">
        <button onClick={() => console.log(posts.sort((a, b) => b.id - a.id))}></button>
        {isSort?filetPosts.map(post => <PostsCart posts={post}/>)
          :posts.map(post => <PostsCart posts={post}/>)}
      </div>
  );
};

export default Home;
