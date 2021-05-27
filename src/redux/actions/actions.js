import API from "../API"
import { GET_ALL_LIST_GROUPS, GET_DATA_USER, GET_LIST_NEWS } from "../constants/constants"
import { toast } from "react-toastify";


export const getAllGroupsAction = () => {
    return async(dispatch) => {
        await API.getAllGroups()
            .then(res => dispatch(success(res.data)))
    }

    function success(json) { return { type: GET_ALL_LIST_GROUPS, payload: json } }
}

export const getDataUsers = () => {
    return async(dispatch) => {
        await API.getDataUser()
            .then(res => dispatch(success(res.data)))
    }

    function success(json) { return { type: GET_DATA_USER, payload: json } }
}

export const updateUser = (form) => {
    return async(dispatch) => {
        await API.updateUser(form)
            .then(res => toast.success("Данные успешно изменены !"))
            .catch(err => toast.error("Что то пошло не так"))
    }
}

export const changePassword = (form) => {
    return async(dispatch) => {
        await API.changePasssword(form)
            .then(res => toast.success("Пароль успешно изменен !"))
            .catch(err => toast.error(err.response.data.message))
    }
}

export const getAllNews = (listNews) => {
    return {
        type: GET_LIST_NEWS,
        payload: listNews
    }
}