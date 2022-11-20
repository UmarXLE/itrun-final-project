import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BreadCrums from '../../components/BreadCrums/BreadCrums';

const DonationPage = () => {


    const [ posts , setPost ] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3009/posts`)
        .then(res => setPost(res.data))
    },[])

    return (
        <div>

            
        {
            posts.map(post => {
                // return <h2>{post.name}</h2>
            })
        }

         <BreadCrums img={`https://picsum.photos/1000/350`} title ='Donation'/>

         </div> 
    );
};

export default DonationPage;