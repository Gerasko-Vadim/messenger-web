import react from "react"
import Time from "../Time/time";
import { Emoji } from 'emoji-mart';
import reactStringReplace from 'react-string-replace';
import classNames from 'classnames';
import noPhoto from "../../assets/img/noPhoto.png"


import "./messege.scss"
import IconReaded from "../isReaded/isReaded";

const Messege = ({ avatar, text, date, user, isMe, isReaded }) => {
    return (
        <div className={!isMe ? "messege" : "messege--isme"}>

            <div className="messege__avatar">
                <img src={avatar ? avatar : noPhoto} alt="avatar" />
            </div>
            <div className="messege__content">
                <IconReaded isMe={isMe} isReaded={isReaded} />
                <div className="messege__bubble">
                    <div className="messege__block-author">
                        <span className="messege__author">{isMe ? 'Вы' : user.name + ' ' + user.surname}</span>
                    </div>


                    {text && (
                        <span className="message__text">
                            {reactStringReplace(text, /:(.+?):/g, (match, i) => (
                                <Emoji key={i} emoji={match} set="apple" size={16} />
                            ))}
                        </span>
                    )}



                </div>
                <Time date={date} />

            </div>
        </div>
    )
}
export default Messege;