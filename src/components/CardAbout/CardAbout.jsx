import React from 'react';

const CardAbout = ({styles}) => {
    return (
        <div className={styles.cardAbout}>
        <img className={styles.cardAboutImg} src="img/about-item.jpeg" alt="" />
        <div className={styles.cardAboutText}>
             <p>Integration Center for Orphans with Disabilities by Step Up</p>
        </div>
    </div>

    );
};

export default CardAbout;