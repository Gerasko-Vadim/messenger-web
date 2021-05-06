import { TextField } from "@material-ui/core";
import React from "react"
import { Controller, useForm } from "react-hook-form";
import MenuItem from '@material-ui/core/MenuItem';
import classes from "./signup-teacher.module.css"
import logo from "../signin/img/logo.png"
import { useDispatch } from "react-redux";
import { registration } from "../../redux/auth/_actions/registration";
import { ToastContainer } from "react-toastify";

const SignUpTeaher = () => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch()

    const onSubmitLogin = (data) => {
        console.log(data);
        dispatch(registration(data))
    }

    return (
        <div className={classes.signupTeacher}>
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
                <img alt="logo" src={logo} className={classes.logo} />
                <form className={classes.form} onSubmit={handleSubmit(onSubmitLogin)}>
                    <Controller
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                onBlur={onBlur}
                                className={classes.inputs}
                                onChange={value => onChange(value)}
                                value={value}
                                label={"Имя"}
                                id="name"
                                helperText={errors.name ? errors.name.message : null}
                                error={errors.name ? true : false}
                                variant="outlined"
                            />
                        )
                        }
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Это поле обязательное',
                            pattern: {
                                // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                // message: 'Неверный адрес электронной почты'
                            }
                        }}
                    />

                    <Controller
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                onBlur={onBlur}
                                className={classes.inputs}
                                onChange={value => onChange(value)}
                                value={value}
                                label={"Фамилия"}
                                id="surname"
                                helperText={errors.surname ? errors.surname.message : null}
                                error={errors.surname ? true : false}
                                variant="outlined"
                            />
                        )
                        }
                        name="surname"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Это поле обязательное',
                            pattern: {
                                // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                // message: 'Неверный адрес электронной почты'
                            }
                        }}
                    />

                    <Controller
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                onBlur={onBlur}
                                className={classes.inputs}
                                onChange={value => onChange(value)}
                                value={value}
                                label={"Отчество"}
                                id="patronymic"
                                helperText={errors.patronymic ? errors.patronymic.message : null}
                                error={errors.patronymic ? true : false}
                                variant="outlined"
                            />
                        )
                        }
                        name="patronymic"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Это поле обязательное',
                            pattern: {
                                // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                // message: 'Неверный адрес электронной почты'
                            }
                        }}
                    />

                    {/* <Controller
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                onBlur={onBlur}
                                className={classes.inputs}
                                onChange={value => onChange(value)}
                                value={value}
                                label={"Группа"}
                                id="group"
                                helperText={errors.group ? errors.group.message : null}
                                error={errors.group ? true : false}
                                variant="outlined"
                                select
                            >
                                {
                                    arr.map((item, index) => (
                                        <MenuItem key={index} value={item}>
                                            {item}
                                        </MenuItem>
                                    ))
                                }
                            </TextField>
                        )
                        }
                        name="group"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Это поле обязательное',
                            pattern: {
                                // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                // message: 'Неверный адрес электронной почты'
                            }
                        }}
                    /> */}

                    <Controller
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextField
                                onBlur={onBlur}
                                className={classes.inputs}
                                onChange={value => onChange(value)}
                                value={value}
                                label={"Электронная почта"}
                                id="email"
                                helperText={errors.email ? errors.email.message : null}
                                error={errors.email ? true : false}
                                variant="outlined"
                            />
                        )
                        }
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: 'Это поле обязательное',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: 'Неверный адрес электронной почты'
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
                                label={"Пароль"}
                                type="password"
                                id="password"
                                helperText={errors.password ? errors.password.message : null}
                                error={errors.password ? true : false}
                                variant="outlined"
                            />
                        )}
                        name="password"
                        defaultValue=""
                        rules={{
                            required: 'Введите пароль',
                        }}
                    />

                    <button className={classes.btn} type="submit">
                        Зарегестрироватся
                    </button>
                </form>

            </div>

        </div>
    )
}
export default SignUpTeaher;