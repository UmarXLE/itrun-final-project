import React from 'react';
import CharityItem from '../../components/CharityItem/CharityItem';
import Letter from '../../components/Letter/Letter';
import NewsContent from '../../components/NewsContent/NewsContent';
import styles from './home.module.css'

const HomePage = () => {

    const infoDataHome = `Charity is the provision of selfless help to those in need. In the modern world, many people who find themselves in a difficult life situation need a benefactor. Not everyone can cope with the trouble on their own, sometimes people just need someone's help.`

    return (
        <div className={styles.wrapper}>
            

            <div className={styles.charityPosts}>

                <div className={styles.charityPostsPoster}>
                    <p>Nigeria</p>
                    <h2>Nigeria Flood Relief Fund</h2>
                    <div>
                    <button className={styles.donationBtn}>Donate</button>

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
            <NewsContent />

        </div>
    );
};

export default HomePage;