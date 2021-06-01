import { TeamOutlined, UsergroupAddOutlined } from "@ant-design/icons"
import { Input } from "antd"

import React from "react"
import { useSelector } from "react-redux"
import "./headerGroups.scss"

const HeaderGroups = ({ openModal }) => {
    const user = useSelector((state) => state.dataUser.data)
    return (

        <div className="groups__header">
            <div>
                <TeamOutlined className="groups__header-iconGroup" />
                <span>Список групп</span>
            </div>
            <Input.Search
                placeholder="Поиск по группам"

                className="groups__header-input"

            />
            {
                user && user.role === "teacher" ? (
                    <div className="groups__header-addGroup" onClick={() => openModal()}>
                        <UsergroupAddOutlined className="groups__header-addIcon" />
                        <span className="groups__header-span">Создать группу</span>
                    </div>
                ) : null
            }

        </div>

    )
}
export default HeaderGroups;