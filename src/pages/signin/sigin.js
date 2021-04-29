import React from "react";
import classes from "./signin.module.css"
import logo from "./img/logo.png"
import { Controller, useForm } from "react-hook-form";
import { makeStyles, TextField } from "@material-ui/core";



const SignIn = () => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();

    const onSubmitLogin = (data) => {
        console.log(data)
        //setIsLoggedIn(true);
    }
    return (
        <div className={classes.signin}>
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
                                label={"Логин"}
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
                    <div className={classes.forgotBlock}>
                        <span>Забыли пароль?</span>
                    </div>

                    <button className={classes.btn} type="submit">
                        Войти
                    </button>
                </form>
                <span className={classes.signupText}>
                    Зарегистрироватся!
                </span>

            </div>
        </div>
    )
}
export default SignIn;