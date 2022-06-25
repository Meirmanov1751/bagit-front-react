import React, {useEffect} from 'react';
import Nav from "../../layout/nav/nav";
import "./activity.css"
import Content from "./content/content";
import {useDispatch, useSelector} from "react-redux";
import {createSearchParams, useLocation, useSearchParams} from "react-router-dom";
import {setCategoriesId, setEventId} from "../../../store/action.creators/filter.action";

const Activity = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  let dispatch = useDispatch();
  const category = searchParams.get('category')
  const event = searchParams.get('event')

  useEffect(() => {
    dispatch(setEventId(event))
    dispatch(setCategoriesId(category ))
  },[category, event])

  return (
    <div className={'activity'}>
      <div className="container">
        <main className="main">
          <Nav/>
          <Content/>
        </main>
      </div>
    </div>
  );
};

export default Activity;
