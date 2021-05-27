import React from "react"
import { useChat } from "../../../hooks"
import RecipeReviewCard from "../card-new/card-new"
import { makeStyles } from '@material-ui/core/styles';
import classes from "./news.module.css"
import AddCommentIcon from '@material-ui/icons/AddComment';
import AddNewsModal from "./addNewsModal/addNewsModal";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    icon: {
        color: "#ffff"
    },
}));

const News = () => {
    const classesCustom = useStyles();
    const [isOpen,setIsOpen] = React.useState(false)
    const { sendMessage } = useChat()
    const news = useSelector((state)=>state.news.news)

    const handleChangeAddNew = () => {
        setIsOpen(true)
    }
    const handleClose =()=>{
        setIsOpen(false)
    }
    return (
        <>
            <div className={classes.newsBlock}>
                {
                    news && news.map((item)=>  <RecipeReviewCard key={item._id} data = {item}/>)
                }
                <div className={classes.addNews} onClick={handleChangeAddNew}>
                    <AddCommentIcon className={classesCustom.icon} />
                </div>
            </div>
            <AddNewsModal isOpen={isOpen} close={handleClose}/>
        </>
    )
}

export default News;