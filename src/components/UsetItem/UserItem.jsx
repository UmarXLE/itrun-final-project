import React from 'react';
import styles from './useritem.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UserItem = (props) => {
  const user = useSelector(state  => state.user.currentUser)
  const navigate = useNavigate()
  const deleteUser = () => {
    axios.delete(`http://localhost:3009/users/${props.id}`)
      .then(res => {
        navigate('/users')
        console.log(res.data)

      }).catch(err => console.log(err))
  }
  console.log(props)

  return (
        // <div className={styles.item}>
        //     <div className={styles.userIcon}>
        //         <img src={props.photo} alt="" />
        //     </div>

        //     <div className={styles.userInfo}>
        //         <h2>{props.name}</h2>
        //         <p></p>
        //     </div>

        //     <div className={styles.userDop}>
        //         {/* дополнитльеные дданные   */}
        //     </div>
             
        // </div>

<Card style={{margin:'10px'}} sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="130"
          image={props.photo}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.name}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          user?.status === 'admin' && <><Button size="small" color="error" onClick = {()=>deleteUser()}>
          Delete
        </Button></>
        }
        
      </CardActions>
    </Card>
    );
};

export default UserItem;


