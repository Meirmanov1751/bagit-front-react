import React from 'react';
import clasess from './postFull.module.css'

const PostFull = (props) => {
  return (
    <div className={clasess.fullInfo}>
      <a className={clasess.back__btn} onClick={() => props.navigate(-1)}>назад</a>
      {props.post.image? <img src={props.post.image} alt={props.post.title}/> : null}
      <h1>{props.post.title}</h1>
      <h3>{props.post.requirments}</h3>
      <p>{props.post.text}</p>
      <a className={clasess.link__post} href={props.post.link}>{props.post.link}</a>
      <data>{props.MyDateString}</data>
    </div>
  );
};

export default PostFull;
