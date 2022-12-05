import React from 'react';
import {Link} from 'react-router-dom'
import styles from './newitem.module.css'
import { useSelector } from 'react-redux';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {MdFavoriteBorder} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import {addNews} from '../../redux/newsSlice';


const NewsItem = (props) => {
    const user = useSelector(state  => state.user.currentUser)
    const dispatch = useDispatch()

    const addFavoriteNews = (props) => {
      dispatch(addNews(props.news))
      console.log(props.news)
     }

    console.log(props)
     
    return (
    
<Link to={`/posts/${props.id}`} >
    <Card  style={{
      'margin':'10px'
      }} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography style={{fontSize:'15px'}} gutterBottom variant="h6" component="div">
            {props.create_ad}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.descr}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        {
        user?.status === 'admin'&& 
            <Button color='error' onClick={props.deleteNews} size="small">
                Delete
            </Button>
        }
         
        
      </CardActions>
    </Card>
    </Link>

    );
};

export default NewsItem;


