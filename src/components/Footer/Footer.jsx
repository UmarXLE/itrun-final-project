import React from 'react';
// import {BsInstagram} from 'react-icons/bs' 
import { BsInstagram ,BsWhatsapp ,BsTelegram } from 'react-icons/bs';
import {TbBrandTelegram} from 'react-icons/tb'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.socialMedia}>
                <div className={styles.socialInfo}>
                    <p>
                    ITRUN 2022 © Portier. All right reserved Umarom
                    </p>
                </div>

                <div className={styles.socialIcons}>
                    <BsInstagram className={styles.icon}/>
                    <BsWhatsapp className={styles.icon}/>
                    <BsTelegram className={styles.icon}/>
                </div>

            </div>
            
        </div>
    );
};

export default Footer;