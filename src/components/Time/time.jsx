import React, { Fragment } from "react";
import PropTypes from "prop-types";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import ruLocale from "date-fns/locale/ru";
import {parseISO } from "date-fns"

import classes from "./time.module.css"

const Time = ({ date }) => (
  <span className={classes.date}>
    {formatDistanceToNowStrict(date, { addSuffix: true, locale: ruLocale })}
  </span>
);



export default Time;