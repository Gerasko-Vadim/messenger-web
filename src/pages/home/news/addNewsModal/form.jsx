import { TextField } from "@material-ui/core"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { useChat, useLocalStorage } from "../../../../hooks"

import classes from "./form.module.css"

const Form = () => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const [userId] = useLocalStorage('userId')
    const {addNews} = useChat()

    const submitForm = (data) => {
        console.log(data)
        addNews({...data,userId});
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit(submitForm)}>
            <Controller

                render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                        onBlur={onBlur}
                        className={classes.inputs}
                        onChange={value => onChange(value)}
                        value={value}
                        label={"Заголовок"}
                        id="title"
                        type="text"
                        helperText={errors.title ? errors.title.message : null}
                        error={errors.title ? true : false}
                        variant="outlined"

                    />
                )
                }
                name="title"
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
                        label={"Описание"}
                        multiline
                        type="text"
                        id="content"
                        helperText={errors.content ? errors.content.message : null}
                        error={errors.content ? true : false}
                        variant="outlined"
                    />
                )}


                name="content"


                rules={{
                    required: 'Это поле обязательное',
                }}
            />

            <button className={classes.btn} type="submit">
                Сохранить
                </button>
        </form>
    )
}

export default Form;

