import React from 'react';
import styles from './letter.module.css'

const Letter = ({infoData}) => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.infoText}>{infoData}</p>
        </div>
    );
};

export default Letter;