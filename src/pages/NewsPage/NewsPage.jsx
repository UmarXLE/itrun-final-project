import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BreadCrums from '../../components/BreadCrums/BreadCrums';
import NewsItem from '../../components/NewsItem/NewsItem'
import styles from './newpages.module.css'

const NewsPage = () => {

    const [ posts, setPosts ] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:3009/posts`)
            .then(res => setPosts(res.data))
    },[])


    return (
        <div>
            <BreadCrums img={`https://picsum.photos/1000/350`} title ='News'/>

            <div className={styles.wrapper}>


                {
                    posts.map(post => {
                        return <NewsItem 
                        id={post.id}
                        img = {post.img}
                        title = {post.title}
                        descr = {post.descr}
                        />
                    })
                }


            </div>
        </div>
    );
};

export default NewsPage;