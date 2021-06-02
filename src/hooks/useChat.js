import { SportsCricketRounded } from '@material-ui/icons'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import io from 'socket.io-client'
import { getAllGroup, getAllNews } from '../redux/actions/actions'
import { socketChat, socketNews } from "../core/socket.js"


// hooks
import { useLocalStorage, useBeforeUnload } from './index'


export const useChat = (roomId) => {
    const [chats, setChats] = useState([])
    const [messages, setMessages] = useState([])
    const dispatch = useDispatch()

    const [userId] = useLocalStorage('userId')


    const sendMessage = (data) => {
        console.log("send",data)
        socketChat.emit('message:add', data, (mess) => {
            console.log(mess)
        })

    }
    const removeMessage = (id) => {
        socketChat.emit('message:remove', id)
    }

    useBeforeUnload(() => {
        socketChat.emit('user:leave', userId)
    })

    const addChat = ({ name_chat, group }) => {
        socketChat.emit('chat:add', {
            createUserId: userId,
            nameRoom: name_chat,
            group
        }, (listGroup) => {
            dispatch(getAllGroup(listGroup))
        })


    }

    const getListChats = () => {
        socketChat.emit('getAllChats', {
            query: { id: userId },
        }, (list) => dispatch(getAllGroup(list)))
    }

    const addNews = (data) => {
        socketNews.emit('new:add', {
            uId: data.userId,
            title: data.title,
            content: data.content
        }, (data) => {
            toast.success("Новость была добавлена !");
            dispatch(getAllNews(data));
            console.log("getAllNews", data)


        })
    }

    const deleteNews = (data) => {
        socketNews.emit('delete:new', data, (list) => {
            dispatch(getAllNews(list));
            toast.success("Новость успешно удалена !");
        })
    }



    return { chats, messages, sendMessage, removeMessage, addChat, addNews, deleteNews, getListChats }
}