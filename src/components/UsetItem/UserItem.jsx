import React from 'react';
import styles from './useritem.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const UserItem = (props) => {
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
    </Card>
    );
};

export default UserItem;


