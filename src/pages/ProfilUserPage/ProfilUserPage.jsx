import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './profileuserpage.module.css'
import Footer from '../../components/Footer/Footer'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProfilUserPage = (props) => {
    const user = useSelector(state => state.user.currentUser)
    console.log(user)
    const [donations , setDonations] = useState([])

    // useEffect(()=>{
    //     axios.get(`http://localhost:3009/users/${user.id}`)
    //         .then(res => (res.data))
    // },[])


    return (
        <div className={styles.wrapper}>
            {/* <div className={styles.userWrapper}>
            <div className={styles.icon}>
                <img src={user.photo} alt="" />
            </div>
            <div className={styles.info}>
                <h2>{user.login}</h2>
                <p>{user.status}</p>
            </div> */}

                <Card sx={{ width: 450 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="250"
                        image={user.photo} 
                        alt="green iguana"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {user.login}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Role : <strong>{user.status}</strong>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                    </CardActions>
                    </Card>
            <Footer />
        </div>
        
    );
};

export default ProfilUserPage;