import react from "react"
import Time from "../Time/time";
import classNames from 'classnames';


import "./messege.scss"
import IconReaded from "../isReaded/isReaded";

const Messege = ({ avatar, text, date, user, isMe, isReaded }) => {
    return (
        <div className={!isMe ? "messege" : "messege--isme"}>

            <div className="messege__avatar">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="messege__content">
                <IconReaded isMe={isMe} isReaded={isReaded}/>
                <div className="messege__bubble">
                    <div className="messege__block-author">
                        <span className="messege__author">{isMe ? 'Вы' : 'Иван Иванович'}</span>
                        </div>

                    <div>
                        <span className="messege__text">{text}</span>
                    </div>

                </div>
                <Time date={date} />

            </div>
        </div>
    )
}
export default Messege;