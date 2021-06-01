import React, { useState, useEffect } from "react"

import { makeStyles, Switch, TextField } from "@material-ui/core";
import StyledContentLoader from 'styled-content-loader'
import DarkModeToggle from "react-dark-mode-toggle";
import ContentLoader from 'react-content-loader'
import logout from "./img/log out.png"

import { Controller, useForm } from "react-hook-form";
import AvatarsSettings from "./avatar/avatar";
import classes from "./settings.module.css"
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataUsers, updateUser } from "../../redux/actions/actions";
import { ToastContainer } from "react-toastify";


const useStyles = makeStyles({
    colorSecondary: {
        color: "#ffff"
    },
    checked: {
        color: "red"
    }
});
const Settings = () => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const [isDarkMode, setIsDarkMode] = useState(false);
    let history = useHistory()

    const [image, setImage] = useState("");

    const dispatch = useDispatch()
    const dataUser = useSelector((state) => state.dataUser.data)

    useEffect(() => {
        dispatch(getDataUsers());

    }, [])


    const updateData = (data) => {

        const formData = new FormData();
        for (const key in data) {
            formData.append([key], data[key])

        }

        if (image) {
            formData.append("avatar", image)
        }
        dispatch(updateUser(formData))

    }
    const changeMode = () => {
        setIsDarkMode(!isDarkMode)
    }
    const setPhoto = (image) => {
        setImage(image)
    }

    const logoutUser = () => {
        localStorage.clear();
        history.push({ pathname: '/login' })
    }
    return (
        <div className={classes.settingsPage}>
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
            <div className={classes.settingsBlock}>
                <div className={classes.header}>
                    <Link to="/home"><span className={classes.back}>Назад</span></Link>

                    <span className={classes.profile}>Профиль</span>

                </div>
                <AvatarsSettings srcImage={dataUser && dataUser.avatar} setPhoto={setPhoto} />
                <div className={classes.inputsBlock}>
             
                        <form className={classes.form} onSubmit={handleSubmit(updateData)}>
                            {dataUser && dataUser.name  ? <>
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
                                    defaultValue={dataUser.name}
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
                                            label={"Фамилия"}

                                            type="text"
                                            id="surname"
                                            helperText={errors.surname ? errors.surname.message : null}
                                            error={errors.surname ? true : false}
                                            variant="outlined"
                                        />
                                    )}


                                    name="surname"
                                    defaultValue={dataUser.surname}

                                    rules={{
                                        required: 'Это поле обязательное',
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
                                            label={"Отчество"}

                                            type="text"
                                            id="patronymic"
                                            helperText={errors.patronymic ? errors.patronymic.message : null}
                                            error={errors.patronymic ? true : false}
                                            variant="outlined"
                                        />
                                    )}
                                    name="patronymic"
                                    defaultValue={dataUser.patronymic}
                                    rules={{
                                        required: 'Это поле обязательное',
                                    }}
                                />
                            </>
                                : <div className={classes.loaderBlock}><MyLoader /></div>

                            }

                            <div className={classes.blockMode}>
                                <span className={classes.text}>{isDarkMode ? "Темная тема" : "Светлая тема"}</span>
                                <Switch
                                    checked={isDarkMode}
                                    onChange={() => changeMode()}
                                    color="primary"
                                    name="checkedB"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </div>


                            <button className={classes.btn} type="submit">
                                Сохранить
                            </button>
                        </form>
                    
                    <Link to="/change-password">
                        <button className={classes.btnChangePassword} >
                            Сменить пароль
                    </button>
                    </Link>
                    <button className={classes.logout} onClick={() => logoutUser()}><img alt="logout" src={logout} />Выйти </button>

                </div>
            </div>


        </div>
    )
}


const MyLoader = () => (
    <ContentLoader >
        {/* Only SVG shapes */}
        <rect x="0" y="0" rx="5" ry="5" width="314" height="50" />
        <rect x="0" y="60" rx="5" ry="5" width="314" height="50" />
        <rect x="0" y="120" rx="5" ry="5" width="314" height="50" />
    </ContentLoader>
)

export default Settings;