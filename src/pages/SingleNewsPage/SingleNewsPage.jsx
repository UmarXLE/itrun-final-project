import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

import styles from './singlepostpage.module.css'


const SingleNewsPage = () => {
    const {id} = useParams()
    console.log(id)

    const [news , setNews ] = useState({})

    

    useEffect(() => {
        axios.get(`http://localhost:3009/posts/${id}`)
            .then(res => setNews(res.data))
    },[])


    console.log(news)

    return (
        <div className={styles.wrapper}>

        <div className={styles.newsWrapper}>
             <div className={styles.imgWrapper}>
                <img src={news.img} alt="" />
            </div>



            <div className={styles.infoWrapper}>
                <h2>{news.title}</h2>                
                <p>{news.descr}</p>
            </div>
        </div>



        {/* form edit */}



            <div className={styles.btnWrapper}>

                 <Button 
                 variant="contained"
                 >Edit </Button>

                <Button 
                variant="contained"
                color="error"
                style={{'marginLeft':'10px'}}

                >Delete</Button>


            </div>


            {/* <div className={styles.formWrapper}>

                <form>

                </form>

            </div> */}
           


        

        </div>
    );
};

export default SingleNewsPage;