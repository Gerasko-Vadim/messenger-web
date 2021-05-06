import API from "../API"
import {GET_ALL_LIST_GROUPS} from "../constants/constants"



export const getAllGroupsAction=()=>{
    return async (dispatch)=>{
        await API.getAllGroups()
        .then(res=>dispatch(success(res.data)))
    }
    function success(json){return{type:GET_ALL_LIST_GROUPS,payload:json}}
}