import API from "../../API"
import { userConstants } from "../_constants/user.constants"
import { toast } from 'react-toastify';

export const registration = (data) => {
    return async (dispatch) => {
        if (data.group) { //if registration occurs for students 
            API.signUpStudent(data)
                .then(res => {
                    dispatch(successStudent(res.data));
                    toast.success("На почту пришло письмо для подтверждения !")

                },
                    err => {
                        if (err.response.status === 404) {
                            dispatch(failure(err));
                            toast.error("Пользователь с такой почтой уже существует")
                        }
                    })
        }
        else { // if registration occurs for teachers
            API.signUpTeacher(data)
                .then(res => {
                    dispatch(successTeacher(res.data));
                    toast.success("На почту пришло письмо для подтверждения !")
                },
                    err => {
                        if (err.response.status === 404) {
                            dispatch(failure(err));
                            toast.error("Пользователь с такой почтой уже существует")
                        }

                    }
                )
        }

    }

    function successStudent(data) { return { type: userConstants.STUDENT_REGISTRATION, data } }
    function successTeacher(data) { return { type: userConstants.TEACHER_REGISTRATION, data } }
    function failure(err) { return { type: userConstants.USER_REGISTRATION_FAILURE, err } }
}