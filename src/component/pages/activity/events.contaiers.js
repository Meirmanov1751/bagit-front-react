import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Events from "./events";
import {setCategoriesId, setEventId} from "../../../store/action.creators/filter.action";

const EventContainers = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  let dispatch = useDispatch();
  const category = searchParams.get('category')
  const event = searchParams.get('event')

  useEffect(() => {
    dispatch(setEventId(event))
    dispatch(setCategoriesId(category ))
  },[category, event])

  return (
    <Events category={category} event={event}/>
  );
};

export default EventContainers;
