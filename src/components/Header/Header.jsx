import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css'


const Header = () => {
    return (
        <header>

                <div className={styles.headerLeft}>
                    <div className={styles.headerLogoWrapper}>
                       <Link to='/'> <img src="./img/logo.png" alt="" /></Link>
                    </div>
                </div>


                <div className={styles.headerRight}>
                    <nav className={styles.nav}>
                        <Link to='/news'>News</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/donation'>Donation</Link>
                        <Link to='/profile'>Profile</Link>
                    </nav>
                </div>

        </header>
    );
};

export default Header;