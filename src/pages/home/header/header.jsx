import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDataUsers } from "../../../redux/actions/actions"
import BadgeAvatars from "./avatar/avatar"
import { Link } from "react-router-dom"

import classes from "./header.module.css"
import noPhoto from "./img/noPhoto.png"
import settings from "./img/settings.png"

const Header = () => {
    const dispatch = useDispatch()
    const dataUser = useSelector((state) => state.dataUser.data)
    useEffect(() => {
        dispatch(getDataUsers())
    }, [])
    return (
        <div className={classes.header}>
            <div className={classes.wrapper}>
                <BadgeAvatars src={dataUser.avatar} />
                <div className={classes.infoUser}>
                    <div className={classes.blockText}>
                        <span>{dataUser && dataUser.surname}</span>
                        <span>{dataUser && dataUser.name}</span>
                        <span>{dataUser && dataUser.patronymic}</span>
                    </div>
                    <span className={classes.online}>Online</span>
                </div>

            </div>
            <Link to="/settings">
                <img alt="settings" src={settings} />
            </Link>

        </div>
    )
}
export default Header;