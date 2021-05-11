import { TextField } from "@material-ui/core";
import React from "react"
import { Controller, useForm } from "react-hook-form";
import AvatarsSettings from "./avatar/avatar";
import classes from "./settings.module.css"

const Settings = () => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();

    const updateData = (data) => {

    }
    return (
        <div className={classes.settingsPage}>
            <div className={classes.settingsBlock}>
                <div className={classes.header}>
                    <span className={classes.back}>Назад</span>
                    <span className={classes.profile}>Профиль</span>
                    <div></div>
                </div>
                <AvatarsSettings />
                <div className={classes.inputsBlock}>
                    <form className={classes.form} onSubmit={handleSubmit(updateData)}>
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
                            defaultValue=""
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


        </div>
    )
}
export default Settings;