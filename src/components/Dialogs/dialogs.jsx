import { Avatar } from "@material-ui/core";
import Ewact from "react"
import { useSelector } from "react-redux";
import DialogsItem from "../DialogsItem";

import "./dialogs.scss"

const Dialogs = () => {
    const chats = useSelector((state)=>state.chats.chats)
    return (
        <div className="dialogs">
            {
                chats && chats.map(item=>{
                    return <DialogsItem key={item._id} data={item}/>
                })
            }
            
        </div>
    )

}

export default Dialogs;