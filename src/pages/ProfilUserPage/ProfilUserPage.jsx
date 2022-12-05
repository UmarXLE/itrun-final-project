import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './profileuserpage.module.css'

const ProfilUserPage = (props) => {
    const user = useSelector(state => state.user.currentUser)
    const [donations , setDonations] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3009/donations/${props.id}`)
            .then(res => setDonations(res.data))
    },[])


    return (
        <div className={styles.wrapper}>
            <p>{donations.title}</p>
        </div>
    );
};

export default ProfilUserPage;