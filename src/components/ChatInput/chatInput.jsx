import React, { useState } from "react"
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import "./chatInput.scss"
import { Input } from 'antd';
import { SmileOutlined } from "@ant-design/icons";
import SendIcon from '@material-ui/icons/Send';
import { useChat, useLocalStorage } from "../../hooks";

const ChatInput = () => {
    const { pathname } = window.location
    const [value, setValue] = useState("")
    const [valueInput, setValueInput] = useState('')
    const [userId] = useLocalStorage('userId')
    const [emojiPickerVisible, setShowPicker] = useState(false)
    const { sendMessage } = useChat()
    // setCurrentChatId(pathname.split('/').pop())
    const handleChange = (e) => {
        setValue(e.target.value)
        setValueInput(e.target.value)
    }
    const handleClickSend = () => {
        if (value !== '') {
            sendMessage({
                roomId: pathname.split('/').pop(),
                author: userId,
                message: value
            })
            setValueInput('')
            setValue('');
        }

        setShowPicker(false)
    }
    const toggleEmojiPicker = () => {
        setShowPicker(!emojiPickerVisible)
    }
    const addEmoji = (e) => {
        setValueInput((value + ' ' + e.native).trim())
        setValue((value + ' ' + e.colons).trim())
    }
    return (
        <div className="chat__input">
            {emojiPickerVisible && (
                <Picker onSelect={emojiTag => addEmoji(emojiTag)} set="apple" />
            )}
            <Input value={valueInput} size="large" placeholder="Введите сообщение..."
                onChange={(e) => handleChange(e)}
                prefix={<SmileOutlined className="chat__input-smail" onClick={toggleEmojiPicker} />}
                onPressEnter={() => handleClickSend()}
            />
            <SendIcon className="chat__send-icon" color={value === '' ? 'disabled' : 'secondary'} onClick={() => handleClickSend()} />
        </div>
    )
}
export default ChatInput;