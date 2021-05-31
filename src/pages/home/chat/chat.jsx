import React, { useEffect, useState } from "react"
import classes from "./chat.module.css"
import { TeamOutlined, UsergroupAddOutlined } from "@ant-design/icons"
import { Input } from "antd"
import Messege from "../../../components/messege/messege"
import Dialogs from "../../../components/Dialogs/dialogs"
import Header from "../../../components/Header-messeges/header"
import ChatInput from "../../../components/ChatInput/chatInput"
import Messeges from "../../../components/Messeges/messeges"


// https://github.com/harryheman/Socket.io-React-Chat-App/blob/main/client/src/hooks/useChat.js

const Chat = () => {
    const [loading, isLoading] = useState(false)
    const [blockHeight, setBlockHeight] = useState()

    const handleSearch = (e) => {
        console.log(e)
        isLoading(true)
    }
    useEffect(()=>{
        setBlockHeight(window.innerHeight-105  + 'px')
    },[])

    return (
        <div className={classes.chat}>
            <div className={classes.chat_groups}>
                <div classname={classes.groups_header}>
                    <div>
                        <TeamOutlined className={classes.iconListGroup} />
                        <span>Список групп</span>
                    </div>
                    <Input.Search
                        placeholder="Поиск по группам"
                        onChange={handleSearch}
                        loading={loading}
                        className={classes.input}
                        onSearch={value => handleSearch(value)}
                    />

                </div>
                <div className={classes.addGroup}>
                    <UsergroupAddOutlined className={classes.addIcon} />
                    <span className={classes.span}>Создать группу</span>
                </div>
                <Dialogs items={
                    [
                        {
                            group: "ИВТ 1-17",
                            name_chat: "Математика",
                            avatar: null

                        },
                        {
                            group: "ИВТ 1-17",
                            name_chat: "Физика",
                            avatar: null

                        },
                        {
                            group: "ИВТ 1-16",
                            name_chat: "Геометрия",
                            avatar: null

                        }
                    ]
                } />
            </div>
            <div className={classes.chat_dialog} style={{height:blockHeight}}>
                <Header />
                <Messeges/>
               
                <ChatInput/>
            </div>

        </div>
    )
}

export default Chat;