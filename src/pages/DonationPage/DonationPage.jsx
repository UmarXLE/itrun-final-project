import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BreadCrums from '../../components/BreadCrums/BreadCrums';
import DonationItem from '../../components/DonationItem/DonationItem';
import Footer from '../../components/Footer/Footer'
import styles from './donationpage.module.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Category } from '@mui/icons-material';

const DonationPage = () => {


    const [ donations , setDonations ] = useState([])
    const [filteredDonations, setFilteredDonations ] = useState([])
    const [category , setCategory ] = useState('')

    

    const handleChange = (event ,category) => {
      setCategory(event.target.value);
        if(category == 'all' ){
            setFilteredDonations(donations)
        }else if (category == 'disasters' ){
            const newDonations = [...donations].filter(donation => donation.category === category)
            setFilteredDonations(newDonations)
        }
    };

    useEffect(()=>{
        axios.get(`http://localhost:3009/donations`)
        .then(res => {
            setDonations(res.data)
            setFilteredDonations(res.data)
        })
    },[])

    return (
        <div>
         <BreadCrums img={`https://picsum.photos/1000/350`} title ='Donation'/>
         <div className={styles.filterWrapper}>
            <div></div>
            <div className={styles.filter}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // onChange = {handleFilter}
                    value={category}
                    // label="Age"
                    onChange={(e,category)=>handleChange(e,category)}
                    >

                    <MenuItem value='all'>All</MenuItem>
                    <MenuItem value='disasters'>Natural Disasters</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
            </FormControl>
            </div>
         </div>
            <div className={styles.wrapperDonations}>
                {/* <DonationItem/> */}

                {
                    filteredDonations.map(donate => {
                        return <DonationItem
                        id = {donate.id}
                        key = {donate.id}
                        img = {donate.img}
                        title = {donate.title}
                        descr = {donate.descr}
                        price = {donate.price}
                        time = {donate.time}
                        />
                    })

                    // filteredDonations.filter(donation => donation.category ===)
                }

            </div>
        <Footer />
         </div>     
    );
};

export default DonationPage;