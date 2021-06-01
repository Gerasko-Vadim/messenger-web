import React, { useEffect, useState } from "react"
import classes from "./chat.module.css"
import { TeamOutlined, UsergroupAddOutlined } from "@ant-design/icons"
import { Input } from "antd"
import Messege from "../../../components/messege/messege"
import Dialogs from "../../../components/Dialogs/dialogs"
import Header from "../../../components/Header-messeges/header"
import ChatInput from "../../../components/ChatInput/chatInput"
import Messeges from "../../../components/Messeges/messeges"
import HeaderGroups from "../../../components/header-groups/headerGroups"
import { useDispatch, useSelector } from "react-redux"
import { getAllGroupsAction, setCurrentChatId } from "../../../redux/actions/actions"
import AddGroupModal from "./addGroupModal/addGroupModal.jsx"
import { useChat } from "../../../hooks"




// https://github.com/harryheman/Socket.io-React-Chat-App/blob/main/client/src/hooks/useChat.js

const Chat = (props) => {
    const [loading, isLoading] = useState(false)
    const [blockHeight, setBlockHeight] = useState()
    const dispatch = useDispatch();
    const { getListChats } = useChat();
    const [isOpen, setIsOpen] = useState(false)
    const listGroups = useSelector((state) => state.groups.groups)
    const { pathname } = window.location

    useEffect(() => {
        if ((pathname.split('/').pop()).length === 24) {
            setCurrentChatId(pathname.split('/').pop())
        }


    }, [pathname])

    const handleOpenModal = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }

    const handleSearch = (e) => {
        console.log(e)
        isLoading(true)
    }
    useEffect(() => {
        dispatch(getAllGroupsAction());
        getListChats()
    }, [])
    useEffect(() => {
        setBlockHeight(window.innerHeight - 105 + 'px')

    }, [])

    return (
        <>
            <div className={classes.chat}>
                <div className={classes.chat_groups} style={{ height: blockHeight }}>
                    <HeaderGroups openModal={() => handleOpenModal()} />
                    <Dialogs />
                </div>
                <div className={classes.chat_dialog} style={{ height: blockHeight }}>
                    <Header />
                    <Messeges />

                    <ChatInput />
                </div>

            </div>
            <AddGroupModal isOpen={isOpen} close={handleClose} listGroups={listGroups && listGroups} />
        </>
    )
}

export default Chat;