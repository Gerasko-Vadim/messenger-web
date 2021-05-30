import { Avatar } from "@material-ui/core";
import React from "react"


const DialogsItem = () => (
    <div className="dialogs__item">
        <div className="dialogs__item-avatar">
            <Avatar aria-label="recipe"  >
                {
                    // data.name.charAt(0)
                    "M"
                }
            </Avatar>
        </div>
        <div className="dialogs__item-content">
            <span className="dialogs__item-name-chat">Математика</span>
            <span className="dialogs__item-group">Группа: ИВТ</span>

        </div>

    </div>
)
export default DialogsItem;