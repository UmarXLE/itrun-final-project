import React from 'react';
import { Link } from 'react-router-dom';
import styles from './newscontent.module.css'
import {CardActions ,Card,CardActionArea , CardMedia , CardContent ,Typography , Button} from '@mui/material'
import NewsItem from '../NewsItem/NewsItem';
// import newIcon from '../../../public/img/news-item.jpeg'
const NewsContent = () => {
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



                       <NewsItem styles ={styles}></NewsItem>
                       <NewsItem styles ={styles}></NewsItem>
                       <NewsItem styles ={styles}></NewsItem>
                       <NewsItem styles ={styles}></NewsItem>
                       <NewsItem styles ={styles}></NewsItem>
                       <NewsItem styles ={styles}></NewsItem>

                   </div>



                
            </div>
        </div>
    );
};

export default NewsContent;