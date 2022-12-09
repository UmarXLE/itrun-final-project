import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './newscontent.module.css'
import {CardActions ,Card,CardActionArea , CardMedia , CardContent ,Typography , Button} from '@mui/material'
import NewsItem from '../NewsItem/NewsItem';
import axios from 'axios';
// import newIcon from '../../../public/img/news-item.jpeg'

const NewsContent = ({news ,setNews}) => {

    // const [news , setNews ] = useState([])


    useEffect(()=>{
        axios.get('http://localhost:3009/posts?_limit=6')
            .then(res => setNews(res.data))
    },[])

    console.log(news)

    
    return (
        <div className={styles.wrapperMain}>
            <div className={styles.wrapper}> 
                
            <div className={styles.infoTitle}>
                        <div>
                            <h2 className={styles.title}>Where to Give Now</h2>
                        </div>
                        
                        <div>
                        <Link className={styles.link} to='/news'>View All</Link>
                        </div>
                    </div>
  
                   
                   <div className={styles.wrapperNews}>


                        {
                            news.map(news => {
                                return <NewsItem 
                                styles = {styles}
                                id = {news.id}
                                key = {news.id}
                                img = {news.img}
                                title = {news.title}
                                descr = {news.descr}
                                />
                            })
                        }
                       
                   </div>



                
            </div>
        </div>
    );
};

export default NewsContent;