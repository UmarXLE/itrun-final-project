import React from 'react';
import BreadCrums from '../../components/BreadCrums/BreadCrums';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import styles from './profile.module.css'
import Footer from '../../components/Footer/Footer'

const ProfilePage = () => {
    return (
        <div className={styles.wrapper}>

            <BreadCrums title='Profile'/>    

            <div className={styles.formWrapper}>
                <Login />

                
                <Register />
            </div>


            <Footer />
        </div>
    );
};

export default ProfilePage;