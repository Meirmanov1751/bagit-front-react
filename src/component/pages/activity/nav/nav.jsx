import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CategoriesTypeThunk} from "../../../store/thunk/events.think";
import {setCategoriesId, setEventId} from "../../../store/action.creators/filter.action";
import {useSearchParams} from "react-router-dom";
import './nav.css'


function Nav(props) {
  let categoies = useSelector(state => state.events.categories);
  let events = useSelector(state => state.events.activity_type);
  let dispatch = useDispatch();
  const categories = useSelector(state => state.filter.categories)
  const [searchParams, setSearchParams] = useSearchParams()

  function handlerSubmit(e) {
    e.preventDefault()
    setSearchParams({category:e.target.category.value, event:e.target.event.value})
  }

  let eventList = events.map(event => {
    return(
      <li key={event.id} > <input  type={'radio'} name={'event'}   value={event.id}/><a>{event.name}</a></li>
    )
  })

  let categorieList = categoies.map(category => {
    return(
      <li key={category.id}> <input  name={'category'} type={'radio'} value={category.id}/><a>{category.name}</a></li>
    )
  })

  return (
    <form className="aside" onSubmit={handlerSubmit}>
      <div className="filter">
        <h1 className="filter__name">По категориям</h1>
        <ul className="filter__item">
          {categorieList}
        </ul>
      </div>
      <div className="filter">
        <h1 className="filter__name">По типу</h1>
        <ul className="filter__item">
          {eventList}
        </ul>
      </div>
      <div className="filter">
        <h1 className="filter__name">Город</h1>
        <ul className="filter__item">
          <li><a href="#">Алматы</a></li>
          <li><a href="#">Нур-Султан</a></li>
          <li><a href="#">Шымкент</a></li>
          <li><a href="#">Павлодар</a></li>
          <li><a href="#">Караганда</a></li>
        </ul>
      </div>
      <div className="filter">
        <input className={'submit'} type={'submit'} value={"Поиск"}/>
      </div>
    </form>
  );
}

export default Nav;
