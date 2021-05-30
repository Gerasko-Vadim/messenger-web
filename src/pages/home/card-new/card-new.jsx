import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useChat, useLocalStorage } from '../../../hooks';
import { Menu, MenuItem } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 5,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    divHiden: {
        width: 48,
        height: 48,
    }
    ,
    // trash:{

    // },

}));

export default function RecipeReviewCard({ data }) {
    const [userId] = useLocalStorage('userId')
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { deleteNews } = useChat()
    const newsId = data._id;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };



    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    }

    const handleCloseAndDelete = () => {
        setAnchorEl(null);
        deleteNews({
            uId:userId,
            _id: newsId
        })

    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} src={data.avatar ? data.avatar : null}>
                        {
                            data.avatar ? null : data.name.charAt(0)
                        }
                    </Avatar>
                }
                action={
                    userId == data.uId ?
                        (<IconButton aria-label="settings" onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>) : <div className={classes.divHiden}></div>
                }
                title={`${data.surname} ${data.name} ${data.patronymic}`}
                subheader={data.createDate}
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleCloseAndDelete} id={data._id}><DeleteIcon color="secondary" /></MenuItem>
            </Menu>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {data.title}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>

                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    <Typography paragraph>
                        {data.content}
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
}