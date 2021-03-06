import { combineReducers } from "redux";
import getAllGroups from "./getAllGroups.reducer";
import getDataUser from "./getDataUser.reducer"
import getAllNews from "./getListNews";
import getAllChats from "./getListChats"
import getMessages from "./messages";
export const rootReducer = combineReducers({
    groups: getAllGroups,
    dataUser: getDataUser,
    news: getAllNews,
    chats: getAllChats,
    messages: getMessages

})