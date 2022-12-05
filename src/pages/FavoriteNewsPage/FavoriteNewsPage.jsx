import React, { useState,  useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import NewsItem from '../../components/NewsItem/NewsItem'
import styles from './favoritenewspage.module.css'

const FavoriteNewsPage = () => {
    const favorites = useSelector(state => state.user.currentUser.favorites)
    console.log(favorites.join('id=&'))
    const [news , setNews ] = useState([])

    const param = favorites.map(favorite => {
        return `id=${favorite}&`
    }).join('')

    console.log(param)
    console.log(news)

    useEffect(()=>{
        axios.get(`http://localhost:3009/posts?${param}`)
            .then(res => setNews(res.data))
    },[])

    

    return (
        <>
                    <h2>favorite news</h2>
        <div className={styles.wrapper}>
            {
                news.map(news => {
                    return <NewsItem
                    key = {news.id}
                    id={news.id}
                    img = {news.img}
                    title = {news.title}
                    descr = {news.descr}
                    // deleteNews = {()=>deleteNews(post.id)}
                    />
                })
            }
        </div>
        </>
        
    );
};

export default FavoriteNewsPage;