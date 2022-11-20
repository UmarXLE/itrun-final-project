import React from 'react';
import styles from './breadcrums.module.css'

const BreadCrums = ({title}) => {
    return (
        <div className={styles.wrapper}>
             <h2 className={styles.title}>{title}</h2>
        </div>
    );
};

export default BreadCrums;