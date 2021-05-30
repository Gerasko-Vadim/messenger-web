import React from "react"

import check from "../../assets/img/check.svg"
import nochecked from "../../assets/img/nochecked.svg"
import "./isReaded.scss"

const IconReaded = ({ isMe, isReaded }) =>
  (isMe &&
    (isReaded ? (
      <img className="message__readed-icon" src={check} alt="Readed icon" />
    ) : (
      <img
        className="message__readed-icon message__icon-readed--no"
        src={nochecked}
        alt="No readed icon"
      />
    ))) ||
  null;

  export default IconReaded;