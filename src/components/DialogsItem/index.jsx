import { Avatar } from "@material-ui/core";
import React from "react"
import { Link } from "react-router-dom";


const DialogsItem = ({data}) => (
    <Link to={`/home/${data._id}`}>
    <div className="dialogs__item">
        <div className="dialogs__item-avatar">
            <Avatar aria-label="recipe"  >
                {
                    data.nameRoom.charAt(0)
          
                }
            </Avatar>
        </div>
        <div className="dialogs__item-content">
            <span className="dialogs__item-name-chat">{data.nameRoom}</span>
            <span className="dialogs__item-group">Группа: {data.group}</span>

        </div>

    </div>
    </Link>
    
)
export default DialogsItem;