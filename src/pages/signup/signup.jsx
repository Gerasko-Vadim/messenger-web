import React from "react"
import { Link } from "react-router-dom";
import classes from "./signup.module.css"

const SignUp = () => {
    return (
        <div className={classes.signup}>
            <div className={classes.wrapper}>
                <Link to="/signup-teacher">
                    Преподаватель
                </Link>
                <Link to="/signup-student">
                    Студент
                </Link>
            </div>
            
        </div>
    )
}
export default SignUp;