import React from 'react';
import styles from './statisticsItem.module.css'

const StatisticsItem = (props) => {
    return (
        <div className={styles.wrapper}>
            <div>
                <h2>{props.title}</h2>
            </div>
            <div>
            <p>{props.subTitle}</p>
            </div>
            
        </div>
    );
};

export default StatisticsItem;