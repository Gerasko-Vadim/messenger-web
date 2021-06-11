import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { socketChat } from "../../core/socket";
import { useLocalStorage } from "../../hooks";
import { Messages, setCurrentChatId } from "../../redux/actions/actions";
import Messege from "../messege/messege";
import "./messeges.scss"

const Messeges = () => {
    const [blockHeight, setBlockHeight] = useState()
    const messages = useSelector((state) => state.messages.messages)
    const { pathname } = window.location
    const dispatch = useDispatch()
    const [userId] = useLocalStorage('userId')
    const messagesRef = useRef(null);



    useEffect(() => {
        if ((pathname.split('/').pop()).length === 24) {
            console.log('jion efect')
            setCurrentChatId(pathname.split('/').pop())
        }

        socketChat.on('NEW:MESSAGES', (data) => dispatch(Messages(data)))
        socketChat.on('MESSAGES:ROOMS', (data) => dispatch(Messages(data)))
        return () => {
            socketChat.removeListener('NEW:MESSAGES', (data) => console.log(data));
        };


    }, [pathname])

    useEffect(() => {
        setBlockHeight(window.innerHeight - 281 + 'px')
    }, [])

    useEffect(() => {
        messagesRef.current.scrollTo(0, 999999);
    }, [messages.messages]);
    return (
        <div className="messeges" ref={messagesRef} style={{ height: blockHeight }}>
            {
                messages && messages.messages && messages.messages.map((item) => {
                    return (
                        <Messege avatar={item.author.avatar}
                            text={item.message}
                            date={new Date(item.createdTime)}
                            isMe={userId == item.author._id}
                            user={item.author}
                        />
                    )
                })
            }
        </div>
    )
}
export default Messeges;