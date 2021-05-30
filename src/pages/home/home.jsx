import React, { useEffect, useState } from "react"
import { useChat, useLocalStorage } from "../../hooks";

import Header from "./header/header";
import classes from "./home.module.css"
import NavTabs from "./tabs/tabs";

const Home = () => {
    return (
        <div className={classes.homePage}>
            <Header />
            <NavTabs/>
            

        </div>
    )
}
export default Home;