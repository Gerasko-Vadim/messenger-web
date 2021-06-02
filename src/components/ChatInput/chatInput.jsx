import React, { useState } from "react"
import "./chatInput.scss"
import { Input } from 'antd';
import { SmileOutlined } from "@ant-design/icons";
import SendIcon from '@material-ui/icons/Send';
import { useChat, useLocalStorage } from "../../hooks";

const ChatInput = () => {
    const { pathname } = window.location
    const [value , setValue] = useState("")
    const [userId]= useLocalStorage('userId')
    const { sendMessage } = useChat()
    // setCurrentChatId(pathname.split('/').pop())
    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    const handleClickSend =()=>{
        console.log("send btn")
        sendMessage({
            roomId: pathname.split('/').pop(),
            author : userId,
            message: value
        })
    }
    return (
        <div className="chat__input">
            <Input value ={value} size="large" placeholder="Введите сообщение..." onChange={(e)=>handleChange(e)} prefix={<SmileOutlined className="chat__input-smail" />} />
            <SendIcon className="chat__send-icon" onClick={()=>handleClickSend()}/>
        </div>
    )
}
export default ChatInput;