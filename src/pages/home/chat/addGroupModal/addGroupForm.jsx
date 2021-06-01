import { MenuItem, TextField } from "@material-ui/core"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { useChat, useLocalStorage } from "../../../../hooks"

import classes from "./addGroupForm.module.css"

const FormAddGroup = ({listGroups}) => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const [userId] = useLocalStorage('userId')
    const { addChat } = useChat()

    const submitForm = (data) => {
        console.log(data)
        addChat(data)
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
                        label={"Название чата"}
                        id="name_chat"
                        type="text"
                        helperText={errors.name_chat ? errors.name_chat.message : null}
                        error={errors.name_chat ? true : false}
                        variant="outlined"

                    />
                )
                }
                name="name_chat"
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
                            listGroups &&
                            listGroups.map((item, index) => (
                                <MenuItem key={item.id} value={item.group}>
                                    {item.group}
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
            />

            <button className={classes.btn} type="submit">
                Сохранить
                </button>
        </form>
    )
}

export default FormAddGroup;

