import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './header.module.css'


const Header = () => {
    

    const user = useSelector(state  => state.user.currentUser)
    // user.status == 'admin' ? () : ()
 
    return (
        <header>
                <div className={styles.headerLeft}>
                    <div className={styles.headerLogoWrapper}>
                       <Link to='/'> <img src="./img/logo.png" alt="" /></Link>
                    </div>
                </div>

                <div className={styles.headerRight}>
                    <nav className={styles.nav}>
                        <Link to='/createnews'>Create News</Link>
                        <Link to='/news' className={styles.active}>News</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/donation'>Donation</Link>
                        <Link to='/profile'>Profile</Link>
                        <p style={{'fontWeight':'700' , 'color':'green','borderBottom':'2px solid green'}}>{user?.login}</p>
                    </nav>
                </div>

        </header>
    );
};

export default Header;