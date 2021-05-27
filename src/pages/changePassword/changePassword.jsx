import React, { useEffect } from "react"
import classes from "./changePassword.module.css"
import { Link } from "react-router-dom"
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { changePassword } from "../../redux/actions/actions";
import { ToastContainer } from "react-toastify";


const ChangePassword = () => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const submitForm = (data) => {
        console.log(data)
        dispatch(changePassword(data))
    }

    return (
        <div className={classes.changePasswordPage}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <Link to="/settings"><span className={classes.back}>Назад</span></Link>

                    <span className={classes.profile}>Смена пароля</span>
                    <div></div>
                </div>
                <form className={classes.form} onSubmit={handleSubmit(submitForm)}>
                    <Controller

                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                onBlur={onBlur}
                                className={classes.inputs}
                                onChange={value => onChange(value)}
                                value={value}
                                label={"Старый пароль"}
                                id="old_password"
                                type="password"
                                helperText={errors.old_password ? errors.old_password.message : null}
                                error={errors.old_password ? true : false}
                                variant="outlined"

                            />
                        )
                        }
                        name="old_password"
                        control={control}

                        rules={{
                            required: 'Это поле обязательное',
                            pattern: {
                                // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                // message: 'Неверный адрес электронной почты'
                            }
                        }}
                    />
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                className={classes.inputs}
                                onBlur={onBlur}
                                onChange={value => onChange(value)}
                                value={value}
                                label={"Новый пароль"}

                                type="password"
                                id="new_password"
                                helperText={errors.new_password ? errors.new_password.message : null}
                                error={errors.new_password ? true : false}
                                variant="outlined"
                            />
                        )}


                        name="new_password"


                        rules={{
                            required: 'Это поле обязательное',
                        }}
                    />

                    <button className={classes.btn} type="submit">
                        Сохранить
                            </button>
                </form>

            </div>

        </div>
    )
}
export default ChangePassword;