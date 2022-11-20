import React from 'react';

const CharityItem = ({styles}) => {
    return (
        <div className={styles.charityItem}>
        <p>United State</p>
        <h2>GlobalGiving Flex Fund</h2>
        <button className={styles.donationBtn}>Donate</button>
    </div>
    );
};

export default CharityItem;