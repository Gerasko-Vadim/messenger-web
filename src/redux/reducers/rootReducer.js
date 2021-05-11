import { combineReducers } from "redux";
import getAllGroups from "./getAllGroups.reducer";
import getDataUser from "./getDataUser.reducer"
export const rootReducer = combineReducers({
    groups:getAllGroups,
    dataUser:getDataUser

})