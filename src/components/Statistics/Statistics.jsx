import React from 'react';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import styles from './statistics.module.css'


const Statistics = () => {
    return (
        <div className={styles.wrapper}>
            {/* #1976d2 */}
            <div className={styles.content}> 
                <StatisticsItem title = '20' subTitle = 'Years'/>
                <StatisticsItem title = '11M+' subTitle = 'VISITORS ANNUALLY'/>
                <StatisticsItem title = '195K+' subTitle = 'CHARITIES RATED'/>
                <StatisticsItem title = '$170M+' subTitle = 'DONATED VIA OUR GIVING BASKET'/>

            </div>

        </div>

    );
};

export default Statistics;