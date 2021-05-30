import { Avatar } from "@material-ui/core";
import Ewact from "react"
import DialogsItem from "../DialogsItem";

import "./dialogs.scss"

const Dialogs = ({ items }) => {
    return (
        <div className="dialogs">
            <DialogsItem/>
            <DialogsItem/>
            <DialogsItem/>
            <DialogsItem/>
        </div>
    )

}

export default Dialogs;