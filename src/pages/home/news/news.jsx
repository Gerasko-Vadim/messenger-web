import React, { useEffect } from "react"
import { useChat } from "../../../hooks"
import RecipeReviewCard from "../card-new/card-new"
import { makeStyles } from '@material-ui/core/styles';
import classes from "./news.module.css"
import AddCommentIcon from '@material-ui/icons/AddComment';
import AddNewsModal from "./addNewsModal/addNewsModal";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { socketNews } from "../../../core/socket";
import { getAllNews } from "../../../redux/actions/actions";

const useStyles = makeStyles((theme) => ({
    icon: {
        color: "#ffff"
    },
}));

const News = () => {
    const classesCustom = useStyles();
    const [isOpen, setIsOpen] = React.useState(false)
    const news = useSelector((state) => state.news.news);
    const user = useSelector((state) => state.dataUser.data)
    const dispatch = useDispatch()

    const handleChangeAddNew = () => {
        setIsOpen(true)
    }
    useEffect(()=>{
        socketNews.emit('getAllNews', (data) => {
            dispatch(getAllNews(data))
        })
    },[])
    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className={classes.newsBlock}>
                {
                  news &&   news.length!==0 ?(
                    news.map((item) => <RecipeReviewCard key={item._id} data={item} />)
                  ) : (
                      <div className={classes.noNews}><span>Новостей нет</span></div>
                  )
                }
                {
                    user && user.role === "teacher" ? (
                        <div className={classes.addNews} onClick={handleChangeAddNew}>
                            <AddCommentIcon className={classesCustom.icon} />
                        </div>
                    ) : null
                }

            </div>
            <AddNewsModal isOpen={isOpen} close={handleClose} />
        </>
    )
}

export default News;