import React from 'react';
import {Link} from "react-router-dom";
import clasess from "./card.module.css"
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className={clasess.event}>
      {props.image?<img src={props.posts.image} loading="lazy" alt=""
                         />:null}
      <div className={clasess.event__content}>
        <ul>
          <li className="event__name">Вебинар</li>
          <li className="event__date">{props.posts.data}</li>
          <li className="event__date">Время: 17:10</li>
          <li className="event__city">Город:almaty</li>
        </ul>
        <p className="event__text">{props.posts.text}</p>
      </div>
      <Link to={`${props.posts.id}`} className="event_btn">Посмотреть</Link>
    </div>
  );
};

export default Card;
