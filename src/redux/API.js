import Axios from "axios";

const http = Axios.create({
    baseURL: "https://messengerivt.herokuapp.com",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    sigin:(data)=>http.post(`/auth/signIn`,data),
    getAllGroups:()=>http.get(`/groups`),
    signUpStudent:(data)=>http.post(`/auth/signUp/students`,data),
    signUpTeacher:(data)=>http.post(`/auth/signUp/teachers`,data)
}