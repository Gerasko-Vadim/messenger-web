import React from "react"
import "./chatInput.scss"
import { Input } from 'antd';
import { SmileOutlined } from "@ant-design/icons";
import SendIcon from '@material-ui/icons/Send';

const ChatInput = () => {
    return (
        <div className="chat__input">
            <Input size="large" placeholder="Введите сообщение..." prefix={<SmileOutlined className="chat__input-smail" />} />
            <SendIcon className="chat__send-icon"/>
        </div>
    )
}
export default ChatInput;