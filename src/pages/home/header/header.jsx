import React from "react"
import classes from "./header.module.css"
import noPhoto from "./img/noPhoto.png"
import settings from "./img/settings.png"

const Header =()=>{
    return(
        <div className={classes.header}>
            <img alt="logo" src={noPhoto}/>
            <img alt="settings" src={settings}/>
        </div>
    )
}
export default Header;