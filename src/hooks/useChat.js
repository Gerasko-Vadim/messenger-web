import { SportsCricketRounded } from '@material-ui/icons'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import io from 'socket.io-client'
import { getAllNews } from '../redux/actions/actions'

// hooks
import { useLocalStorage, useBeforeUnload } from './index'

const SERVER_URL = 'http://localhost:3005'
const NEWS_URL = 'http://localhost:3005/news'

export const useChat = (roomId) => {
    const [chats, setChats] = useState([])
    const [messages, setMessages] = useState([])
    const dispatch = useDispatch()

    const [userId] = useLocalStorage('userId')

    const socketRef = useRef(null)
    const socketNewsRef = useRef(null)
    useEffect(() => {
        console.log("he", socketRef.current)
    }, [socketRef.current])
    useEffect(() => {
        socketRef.current = io(SERVER_URL, {
            query: { userId },
            transports: ["websocket"],
            upgrade: false
        })
        socketNewsRef.current = io(NEWS_URL, {
            query: { userId },
            transports: ["websocket"],
            upgrade: false
        })

        //socketRef.current.emit('user:add', { username, userId })
        socketNewsRef.current.emit('getAllNews', (data) => {
                dispatch(getAllNews(data))
            })
            // socketRef.current.on('chats', (chats) => {
            //     console.log("mess",chats)
            // })

        socketRef.current.on('chats', (chats) => {
            console.log("mess", chats)
        })






        socketRef.current.emit('message:get')

        socketRef.current.on('messages', (messages) => {
            const newMessages = messages.map((msg) =>
                msg.userId === userId ? {...msg, currentUser: true } : msg
            )
            setMessages(newMessages)
        })

        return () => {
            socketRef.current.disconnect()
        }
    }, [])




    const sendMessage = (data) => {
        socketRef.current.emit('message:add', data, () => {
            socketRef.current.on('chats', (chats) => {
                console.log("mess", chats)
            })
        })

    }
    const removeMessage = (id) => {
        socketRef.current.emit('message:remove', id)
    }

    useBeforeUnload(() => {
        socketRef.current.emit('user:leave', userId)
    })

    const addChat = ({ nameGroup, nameChat }) => {
        socketRef.current.emit('chat:add', {
            userId,
            nameGroup,
            nameChat
        })


    }

    const addNews = (data) => {
        socketNewsRef.current.emit('new:add', {
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
        socketNewsRef.current.emit('delete:new', data, (list) => {
            dispatch(getAllNews(list));
            toast.success("Новость успешно удалена !");
        })
    }



    return { chats, messages, sendMessage, removeMessage, addChat, addNews, deleteNews }
}