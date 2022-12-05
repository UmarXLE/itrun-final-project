import axios from 'axios';
import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleDonationPage = (props) => {
    const {id} = useParams()
    const [donate , setDonate ] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:3009/donations/${id}`)
            .then(res => console.log(res.data))
    },[])
    return (
        <div>

            <h2>{donate.title}</h2>
            
        </div>
    );
};

export default SingleDonationPage;