import React, { useEffect, useState } from "react"
import { useChat, useLocalStorage } from "../../hooks";

import Header from "./header/header";
import classes from "./home.module.css"
import NavTabs from "./tabs/tabs";

const Home = () => {
    const { chats, messages, sendMessage, removeMessage ,addChat,addNews } = useChat(45)
    const [nameChat,setNameChat]= useState('')
    const [userId] = useLocalStorage('userId')
    const [nameGroup,setNameGroup] = useState('')

    useEffect(() => {
        
    }
    , [])

    const handleChangeChat =(e)=>{
        setNameChat(e.target.value)
    }

    const handleChangeGroup = (e)=>{

        setNameGroup(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        addNews({userId,nameGroup,nameChat})
        console.log("name chat", userId)
        console.log("name group", nameGroup)
    }
    console.log("Chats", chats)
    return (
        <div className={classes.homePage}>
            <Header />
            <NavTabs/>
            <form onSubmit={handleSubmit}>
                <input type="text" value={nameChat} placeholder={"Name chat"} onChange={handleChangeChat}/>
                <input tepy="text" value={nameGroup} placeholder={"Name group"} onChange={handleChangeGroup}/>
                <input type="submit"/>
            </form>

        </div>
    )
}
export default Home;