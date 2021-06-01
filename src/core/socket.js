import io from "socket.io-client";
import { useLocalStorage } from "../hooks";
const SERVER_URL = 'http://localhost:3005'
const NEWS_URL = 'http://localhost:3005/news'





const id = JSON.parse(window.localStorage.getItem('userId'))
console.log(id)
export const socketChat = io(SERVER_URL, {
    query: { id },
    transports: ["websocket"],
    upgrade: false
},);
export const socketNews = io(NEWS_URL, {
    query: { id },
    transports: ["websocket"],
    upgrade: false
}
);

