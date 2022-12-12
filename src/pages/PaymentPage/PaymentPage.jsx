import React, {useEffect, useState} from 'react';
import axios from 'axios'
import styles from './payment.module.css'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import { useParams  } from 'react-router-dom';

const PaymentPage = () => {
    const {id} = useParams()
    const [ donate , setDonate] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3009/donations/${id}`)
            .then(res => {
                setDonate(res.data)
                console.log(res.data)
            })
    },[])

    console.log(donate)
    
    // const stripePromise = loadStripe('pk_test_51M6Z8TIXrIEzOq5eyxkQByRLaW2Asa45WzrZoAJsRSvFXZHU2AOydYdEbl69wSpDLFmoTMDpGUZVG5Ip7KPPTj5x00mDPc7svb')
    return (
        <div className={styles.wrapper}>
            <h2>{donate.img}</h2>
            {/* <Elements stripe={stripePromise} >
                 <CheckoutForm />
             </Elements> */}
        </div>
    );
};

export default PaymentPage;