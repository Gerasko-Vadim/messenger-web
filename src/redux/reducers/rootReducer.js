import { combineReducers } from "redux";
import getAllGroups from "./getAllGroups.reducer"

export const rootReducer = combineReducers({
    groups:getAllGroups

})