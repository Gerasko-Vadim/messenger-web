import Axios from "axios";
let token = localStorage.getItem('token');



const http = Axios.create({
    baseURL: "https://messengerivt.herokuapp.com",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
    },
});

export default {
    sigin:(data)=>http.post(`/auth/signIn`,data),
    getAllGroups:()=>http.get(`/groups`),
    signUpStudent:(data)=>http.post(`/auth/signUp/students`,data),
    signUpTeacher:(data)=>http.post(`/auth/signUp/teachers`,data),
    getDataUser:()=>http.get(`/users`),
    updateUser:(data)=> http.post(`/users/update`,data),
    changePasssword:(data)=> http.post(`/users/change-password`,data)
}