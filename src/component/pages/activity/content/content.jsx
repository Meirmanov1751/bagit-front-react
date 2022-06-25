import React from 'react';
import {useSelector} from "react-redux";
import clasess from "./content.module.css"
import {Outlet} from "react-router-dom"
import Preloader from "../../common/preloader";
import Event from "./event/event";

const Content = () => {
  const posts = useSelector(state => state.posts.posts)
  const category = useSelector(state => state.filter.categories)
  const event= useSelector(state => state.filter.event)
  const postsCategoryList = posts.filter(post => post.category == category ?? post.event == event)

  let postsList = posts ? postsCategoryList.map(post => <Event posts={post}/>) :posts.map(post => <Event posts={post}/>)

  return (
    <section className={clasess.content}>
      {posts.length === 0 ? <Preloader className={'preloader'}/> :
        <div>
          <Outlet/>
          {postsList}
        </div>
      }
    </section>
  );
};

export default Content;
