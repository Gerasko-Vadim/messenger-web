import React from "react"
import "./chatInput.scss"
import { Input } from 'antd';
import { SmileOutlined } from "@ant-design/icons";
import SendIcon from '@material-ui/icons/Send';

const ChatInput = () => {
    return (
        <div className="chat__input">
            <Input size="large" placeholder="large size" prefix={<SmileOutlined />} />
            <SendIcon className="chat__send-icon"/>
        </div>
    )
}
export default ChatInput;