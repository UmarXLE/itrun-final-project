import React, { useEffect ,useState } from 'react';
import styles from './halpinganimals.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import Breadcrumbs from '../../components/BreadCrums/BreadCrums'
import axios from 'axios'
import DonationItem from '../../components/DonationItem/DonationItem'


const HalpingAnimals = () => {
    const [donations , setDonations ] = useState([])
    const [filteredDonations , setFilteredDontaions] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3009/donations`)
            .then(res => {
                setDonations(res.data)
            })
    },[])


    console.log(filteredDonations)

    return (
        <div className={styles.wrapperGlobal}>
        <Header />
        <div className={styles.mt100}>
            <Breadcrumbs title='Natural Disasters'/>
                <div className={styles.wrapperDontaions}>


                    {
                        donations.filter(item => item.category == 'animals').map(donation => {
                            return <DonationItem 
                            id = {donation.id}
                            key = {donation.id}
                            img = {donation.img}
                            title = {donation.title}
                            descr = {donation.descr}
                            price = {donation.price}
                            time = {donation.time}
                            />
                        })
                    }
                   

                </div>
            <Footer />
            </div>
        </div>
    );
};

export default HalpingAnimals;