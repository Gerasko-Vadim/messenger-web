import API from "../API"
import {GET_ALL_LIST_GROUPS, GET_DATA_USER} from "../constants/constants"



export const getAllGroupsAction=()=>{
    return async (dispatch)=>{
        await API.getAllGroups()
        .then(res=>dispatch(success(res.data)))
    }
    function success(json){return{type:GET_ALL_LIST_GROUPS,payload:json}}
}

export const getDataUsers=()=>{
    return async (dispatch)=>{
        await API.getDataUser()
        .then(res=>dispatch(success(res.data)))
    }
    function success(json){return{type:GET_DATA_USER,payload:json}}
}