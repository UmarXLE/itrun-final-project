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
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import PaginationComponent from '../../components/Pagination/Pagination'


const DonationPage = () => {


    const [ donations , setDonations ] = useState([])
    const [filteredDonations, setFilteredDonations ] = useState([])
    const [category , setCategory ] = useState('')
    const [loading , setLoading ] = useState(true)
    const [ currentPage , setCurrentPage ] = useState(1)
    const [ perPage] = useState(3)


    const lastIndex = currentPage * perPage
    const firstIndex = lastIndex - perPage 
    const currentPageNow = donations.slice(firstIndex , lastIndex)

    const paginate = (pageNumber ) => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev -1)

    

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
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])


    useEffect(()=>{
        axios.get(`http://localhost:3009/donations`)
        .then(res => {
            setDonations(res.data)
            setFilteredDonations(res.data)
        })
    },[])
    console.log(filteredDonations)
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
                    loading ? (<>
                        <Box sx={{
                                width:'90%',
                                display:'flex',
                                flexWrap:'wrap',
                                justifyContent:'center'
                            }}>
                                <Stack style={{margin:'15px'}} spacing={1} width='350px' height='250px'>
                                    <Skeleton variant="rectangular" width='100%' height='70%' animation="wave"></Skeleton>
                                    <Skeleton variant='text' height='10%'  width='100%' ></Skeleton>
                                    <Skeleton variant='text' height='10%' width='100%' ></Skeleton>
                                </Stack>
                                <Stack style={{margin:'15px'}} spacing={1} width='350px' height='250px'>
                                    <Skeleton variant="rectangular" width='100%' height='70%' animation="wave"></Skeleton>
                                    <Skeleton variant='text' height='10%' width='100%'  ></Skeleton>
                                    <Skeleton variant='text' height='10%' width='100%' ></Skeleton>
                                </Stack>
                                <Stack style={{margin:'15px'}} spacing={1} width='350px' height='250px'>
                                    <Skeleton variant="rectangular" width='100%' height='70%' animation="wave"></Skeleton>
                                    <Skeleton variant='text' height='10%' width='100%'  ></Skeleton>
                                    <Skeleton variant='text' height='10%' width='100%' ></Skeleton>
                                </Stack>
                            </Box>
                    </>):(<>
                        {
                    currentPageNow.map(donate => {
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
                    </>)
                }
                
                

            </div>
            <div className ={styles.paginationWrapper}>
            <button onClick = {()=>prevPage()}>prev</button>
                <PaginationComponent 
                perPage = {perPage} 
                total = {donations.length}
                paginate = { paginate}
                />
                <button onClick = {()=>nextPage()}>next</button>
            </div>
        <Footer />
         </div>     
    );
};

export default DonationPage;