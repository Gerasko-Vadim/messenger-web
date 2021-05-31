import { EllipsisOutlined } from "@ant-design/icons"
import react from "react"
import "./header.scss"


const Header =()=>{
    return(
        <div className="header">
            <div></div>
            <div className="header__content">
                <span className="header__name-chat">Математика</span>
                <span className="header__users"> 23 участника</span>
            </div>
            <EllipsisOutlined className="header__icon" style={{fontSize: '22px'}}/>
        </div>
    )
}
export default Header;