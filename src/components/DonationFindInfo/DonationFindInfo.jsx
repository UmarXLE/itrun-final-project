import React from 'react';
import {Link} from 'react-router-dom'

const DonationFindInfo = ({styles}) => {
    return (
        <div className={styles.donationFind}>
                <h2 className={styles.titleDonation}>Safe + Easy Donations</h2>
                <span className={styles.lineDonation}></span>
                <p className={styles.textDonation}>We help donors make safe and easy US tax-deductible donations to vetted, locally-driven organizations around the world. Donations are tax-deductible in the US, or UK taxpayers can give in GBP and claim an extra 25% if Gift Aid eligible. We're so sure you'll love giving through GlobalGiving, we offer a donation satisfaction guarantee.</p>
                <Link className={styles.btnDonation} to='/donation'>Find a project</Link>
            </div>
    );
};

export default DonationFindInfo;