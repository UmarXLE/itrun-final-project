import React, { useEffect, useState } from 'react';
import Category from '../../components/Category/Category';
import CharityItem from '../../components/CharityItem/CharityItem';
import Footer from '../../components/Footer/Footer';
import Letter from '../../components/Letter/Letter';
import NewsContent from '../../components/NewsContent/NewsContent';
import TopUsers from '../../components/TopUsets/TopUsers';
import styles from './home.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

const HomePage = () => {

    const infoDataHome = `Charity is the provision of selfless help to those in need. In the modern world, many people who find themselves in a difficult life situation need a benefactor. Not everyone can cope with the trouble on their own, sometimes people just need someone's help.`
    const [modalWindow , setModalWindow ] = useState(false)
    const [news , setNews ] = useState([])


    useEffect(()=>{
        axios.get('http://localhost:3009/posts?_limit=6')
            .then(res => setNews(res.data))
    },[])

    
    console.log(news)
    
    setTimeout(() => {
        setModalWindow(true)
    }, 10000);


    const closeModalWindow = () => {
        setModalWindow(false)
    }



    return (
        <div className={styles.wrapper}>
            

            <div className={styles.charityPosts}>

                <div className={styles.charityPostsPoster}>
                    <p>Nigeria</p>
                    <h2>Nigeria Flood Relief Fund</h2>
                    <div>
                    <Link to='/donation'><button className={styles.donationBtn}>Donate</button></Link>
                    

                    </div>
                </div>

                <div className={styles.charityPostsMiniPosters}>
                    <CharityItem styles ={styles}/>
                    <CharityItem styles ={styles}/>
                    <CharityItem styles ={styles}/>
                    <CharityItem styles ={styles}/>

                </div>

            </div>


            <Letter infoData={infoDataHome} />
            <NewsContent news = {news} setNews = {setNews}/>
            <TopUsers />
            <Category />
            <Footer />
            

        
            

        </div>
    );
};

export default HomePage;