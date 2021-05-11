import React,{useState} from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import editIcon from "./img/User_50px.png";
import noPhoto from "./img/noPhoto.png"
import classesCustoms from "./avatar.module.css"

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
    root: {
        width: 50,
        height: 50,
        border: `2px solid ${theme.palette.background.paper}`,
    },
}))(Avatar);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: 190,
        height: 190,
    },
}));

export default function AvatarsSettings() {
    const classes = useStyles();
    const [file,setFile]=useState("");
    const [image,setImage]= useState("")

    const setProfile = (e) => {
        setImage(e.target.files[0]);
        
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setFile(reader.result);
          }
        };
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
          }
      };

    return (
        <div className={classesCustoms.avatar}>
            <Badge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                badgeContent={<label htmlFor="file"><SmallAvatar alt="Remy Sharp" src={editIcon} /></label>}
            >
                <Avatar className={classes.root} alt="Travis Howard" src={ 
                   file == ""
                  ? noPhoto
                  : file} />
            </Badge>

            <input
                type="file"
                accept="image/*"
                id="file"
                className={classesCustoms.input_photo}
                onChange={setProfile}
            />
        </div>

    );
}