import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrums from '../../components/BreadCrums/BreadCrums';
import NewsItem from '../../components/NewsItem/NewsItem'
import styles from './newpages.module.css'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Footer from '../../components/Footer/Footer';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import PaginationComponent from '../../components/Pagination/Pagination'

const NewsPage = () => {
    
    const navigate = useNavigate()
    const [ posts, setPosts ] = useState([])
    const [loading , setLoading ] = useState(true)
    const [sorted , setSorted ]  = useState('new')
    const [ currentPage , setCurrentPage ] = useState(1)
    const [ perPage] = useState(3)


    const lastIndex = currentPage * perPage
    const firstIndex = lastIndex - perPage 
    const currentPageNow = posts.slice(firstIndex , lastIndex)

    const paginate = (pageNumber ) => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev -1)

    
    useEffect(()=> {
        axios.get(`http://localhost:3009/posts`)
            .then(res => setPosts(res.data))
    },[])


    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    },[])

    useEffect(()=>{
        setPosts([].concat(posts).sort((a,b)=>{
            if(sorted == "new"){
                return new Date(a.create_ad) - new Date(b.create_ad)
            }
            return new Date(b.create_ad) - new Date(a.create_ad)
        }))
    },[sorted])

    const deleteNews = (id) => {
        axios.delete(`http://localhost:3009/posts/${id}`)
            .then(res => {
                return navigate("/news")
            })
    }




        const handleChange = (e) => {
            setSorted(e.target.value)
        };



    return (
        <div>
            
            <BreadCrums img={`https://picsum.photos/1000/350`} title ='News'/>
            <div className={styles.filterNews}>
                <div className={styles.titleFilter}>
                    Filter News
                </div>

                <div>   

                <FormControl fullWidth>
                        {/* <InputLabel id="demo-simple-select-label">News</InputLabel> */}
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sorted}
                            label=""
                            onChange={handleChange}
                        >
                            <MenuItem value='new'>New</MenuItem>
                            <MenuItem value='old'>Old</MenuItem>
                        </Select>
                </FormControl>

                </div>

            </div>
            <div className={styles.wrapper}>
                {
                    loading ? (
                        <>
                        <Box sx={{
                            width:'90%',
                            display:'flex',
                            flexWrap:'wrap',
                            justifyContent:'center'
                        }}>
                            <Stack style={{margin:'15px'}} spacing={1} width='350px' height='250px'>
                                <Skeleton variant="rectangular" width='100%' height='70%' animation="wave"></Skeleton>
                                <Skeleton variant='text' height='10%' width='65%' ></Skeleton>
                                <Skeleton variant='text' height='10%' ></Skeleton>
                             </Stack>
                             <Stack style={{margin:'15px'}} spacing={1} width='350px' height='250px'>
                                <Skeleton variant="rectangular" width='100%' height='70%' animation="wave"></Skeleton>
                                <Skeleton variant='text' height='10%' width='65%' ></Skeleton>
                                <Skeleton variant='text' height='10%' ></Skeleton>
                             </Stack>
                             <Stack style={{margin:'15px'}} spacing={1} width='350px' height='250px'>
                                <Skeleton variant="rectangular" width='100%' height='70%' animation="wave"></Skeleton>
                                <Skeleton variant='text' height='10%' width='65%' ></Skeleton>
                                <Skeleton variant='text' height='10%' ></Skeleton>
                             </Stack>
                        </Box>
                        </>
                    ) : (
                        <>

                          {
                                currentPageNow.map(post => {
                                    return <NewsItem 
                                    key = {post.id}
                                    id={post.id}
                                    create_ad= {post.create_ad}
                                    img = {post.img}
                                    title = {post.title}
                                    descr = {post.descr}
                                    deleteNews = {()=>deleteNews(post.id)}
                                    />
                                })
                            }

                        </>
                    )
                }

              

            

           
            </div>

            <div className ={styles.paginationWrapper}>
            <button onClick = {()=>prevPage()}>prev</button>
                <PaginationComponent 
                 perPage = {perPage} 
                total = {posts.length}
                paginate = { paginate}
                />
                <button onClick = {()=>nextPage()}>next</button>
            </div>
            
            <Footer />
        </div>
    );
};

export default NewsPage;