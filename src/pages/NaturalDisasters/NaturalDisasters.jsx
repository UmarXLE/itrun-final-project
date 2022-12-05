import React, { useEffect ,useState } from 'react';
import styles from './naturaldisasters.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import Breadcrumbs from '../../components/BreadCrums/BreadCrums'
import axios from 'axios'
import DonationItem from '../../components/DonationItem/DonationItem'

const NaturalDisasters = () => {
    const [ donations , setDonations ] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3009/donations`)
            .then(res =>  setDonations(res.data))
    },[])
    return (
        <>
        
        <div className={styles.wrapper}>
        <Header />
        <div className={styles.mt100}>
            <Breadcrumbs title='Natural Disasters'/>
                <div className={styles.wrapperDontaions}>

                    {
                        donations.map(item => {
                            return <DonationItem 
                                id = {item.id}
                                key = {item.id}
                                img = {item.img}
                                category = {item.category}
                                descr = {item.descr}
                                price = {item.price}
                                time = {item.time}
                                title = {item.title}
                            />
                        })
                    }

                </div>
            <Footer />
            </div>
        </div>
        </>

    );
};



export default NaturalDisasters;