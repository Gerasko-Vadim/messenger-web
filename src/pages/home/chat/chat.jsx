import React, { useState } from "react"
import classes from "./chat.module.css"
import { TeamOutlined, UsergroupAddOutlined } from "@ant-design/icons"
import { Input } from "antd"
import Messege from "../../../components/messege/messege"
import Dialogs from "../../../components/Dialogs/dialogs"

// https://github.com/harryheman/Socket.io-React-Chat-App/blob/main/client/src/hooks/useChat.js

const Chat = () => {
    const [loading, isLoading] = useState(false)

    const handleSearch = (e) => {
        console.log(e)
        isLoading(true)
    }

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
                            group:"ИВТ 1-17",
                            name_chat: "Математика",
                            avatar:null

                        },
                        {
                            group:"ИВТ 1-17",
                            name_chat: "Физика",
                            avatar:null

                        },
                        {
                            group:"ИВТ 1-16",
                            name_chat: "Геометрия",
                            avatar:null

                        }
                    ]
                }/>
            </div>
            <div className={classes.chat_dialog}>
                <Messege avatar={"https://sun9-2.userapi.com/impf/c851436/v851436222/37ebb/vKShELxAQr4.jpg?size=640x634&quality=96&sign=07cb88dbba3e9547168895f7227f65a9&type=album"}
                text={"Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела?"}
                date={new Date('Sun May 30 2021 17:14:40 GMT+0600 (Восточный Казахстан)')} />
                <Messege avatar={"https://sun9-2.userapi.com/impf/c851436/v851436222/37ebb/vKShELxAQr4.jpg?size=640x634&quality=96&sign=07cb88dbba3e9547168895f7227f65a9&type=album"}
                text={"&"}
                date={new Date('Sun May 29 2021 16:27:40 GMT+0600 (Восточный Казахстан)')} 
                isMe={true}/>
                <Messege avatar={"https://sun9-2.userapi.com/impf/c851436/v851436222/37ebb/vKShELxAQr4.jpg?size=640x634&quality=96&sign=07cb88dbba3e9547168895f7227f65a9&type=album"}
                text={"Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела?"}
                date={new Date('Sun May 30 2021 16:27:40 GMT+0600 (Восточный Казахстан)')} 
                isMe={true}
                isReaded={true}
                />
                <Messege avatar={"https://sun9-2.userapi.com/impf/c851436/v851436222/37ebb/vKShELxAQr4.jpg?size=640x634&quality=96&sign=07cb88dbba3e9547168895f7227f65a9&type=album"}
                text={"&"}
                date={new Date('Sun May 29 2021 16:27:40 GMT+0600 (Восточный Казахстан)')} 
                isMe={false}
                
                />
            </div>

        </div>
    )
}

export default Chat;