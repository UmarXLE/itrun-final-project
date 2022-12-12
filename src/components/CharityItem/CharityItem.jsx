import React from 'react';
import { Link } from 'react-router-dom';

const CharityItem = ({styles}) => {
    return (
        <div className={styles.charityItem}>
        <p>United State</p>
        <h2>GlobalGiving Flex Fund</h2>
        <Link  to='/donation'>   
             <button className={styles.donationBtn}>Donate</button>
        </Link>
    </div>
    );
};

export default CharityItem;