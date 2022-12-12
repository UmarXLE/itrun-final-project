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
import {IoIosArrowForward , IoIosArrowBack} from 'react-icons/io'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';



const DonationPage = () => {


    const [ donations , setDonations ] = useState([])
    const [filteredDonations, setFilteredDonations ] = useState([])
    const [category , setCategory ] = useState('')
    const [loading , setLoading ] = useState(true)
    const [ currentPage , setCurrentPage ] = useState(1)
    const [ perPage] = useState(3)
    

    const outerTheme = createTheme({
        palette: {
          primary: {
            main: orange[500],
          },
        },
      });


    const lastIndex = currentPage * perPage
    const firstIndex = lastIndex - perPage 
    const currentPageNow = donations.slice(firstIndex , lastIndex)

    const paginate = (pageNumber ) => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev -1)

    

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

    const handleFilter = (status) => {
        console.log(status)
        if(status == 'all') {
            setCurrentPage(donations)
        }
    }


    console.log(filteredDonations)
    return (
        <div>
         <BreadCrums img={`https://picsum.photos/1000/350`} title ='Donation'/>
         <div className={styles.filterWrapper}>
            <div></div>
            <div className={styles.filter}>
                    <ButtonGroup
                    disableElevation
                    variant="text"
                    color="info"
                    aria-label="Disabled elevation buttons"
                    className = {styles.btnGroup}
                    >
                    <ThemeProvider theme={outerTheme}>
                    <Button onClick={()=>handleFilter('all')}>All</Button>
                    <Button onClick={()=>handleFilter('disasters')}>Natural Disasters</Button>
                    <Button onClick={()=>handleFilter('animals')}>Halping Animals</Button>
                    <Button onClick={()=>handleFilter('poaching')}>Poaching</Button>
                    <Button onClick={()=>handleFilter('war')}>War</Button>
                    <Button onClick={()=>handleFilter('elderly')}>Halping for the elderly</Button>
                    </ThemeProvider>
                </ButtonGroup>
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


                    // filteredDonations.filter(item => item.category == category).map(donate => {
                    //     console.log(donate)
                    //     return <DonationItem
                    //     id = {donate.id}
                    //     key = {donate.id}
                    //     img = {donate.img}
                    //     title = {donate.title}
                    //     descr = {donate.descr}
                    //     price = {donate.price}
                    //     time = {donate.time}
                    //     />
                    // })

                    // filteredDonations.filter(donation => donation.category ===)
                }
                    </>)
                }
                
                

            </div>
            <div className ={styles.paginationWrapper}>
            <button onClick = {()=>prevPage()}><IoIosArrowBack/></button>
                <PaginationComponent 
                perPage = {perPage} 
                total = {donations.length}
                paginate = { paginate}
                />
                <button onClick = {()=>nextPage()}><IoIosArrowForward /></button>
            </div>
        <Footer />
         </div>     
    );
};

export default DonationPage;