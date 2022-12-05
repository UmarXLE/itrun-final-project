import React from 'react';
import styles from './donationitem.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const DonationItem = (props) => {
    return (
        <Link className={styles.item} to={`/donations/${props.id}`}> 
<Card sx={{ maxWidth: 345 }}>
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
          <Typography variant="body2" color="text.secondary">
            {props.descr}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            
        </Link>
    );
};

export default DonationItem;