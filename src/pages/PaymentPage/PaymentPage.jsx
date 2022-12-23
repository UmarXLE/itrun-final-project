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
    <header className={styles.header}>
	<div className={styles.container}>
		<div className={styles.left}>
			<h3>BILLING ADDRESS</h3>
			<form>
				Full name
				<input type="text" name="" placeholder="Enter name"/>
				Email
				<input type="text" name="" placeholder="Enter email"/>

				Address
				<input type="text" name="" placeholder="Enter address"/>
				
				City
				<input type="text" name="" placeholder="Enter City"/>
				<div id="zip">
					<label>
						State
						<select>
							<option>Choose State..</option>
							<option>Rajasthan</option>
							<option>Hariyana</option>
							<option>Uttar Pradesh</option>
							<option>Madhya Pradesh</option>
						</select>
					</label>
						<label>
						Zip code
						<input type="number" name="" placeholder="Zip code"/>
					</label>
				</div>
			</form>
		</div>
		<div className={styles.right}>
			<h3>PAYMENT</h3>
			<form>
				Accepted Card <br/>
				<img src="../../public/img/card1.png" width="100"/>
				<img src="img/card2.png" width="50"/>
				<br/><br/>



				Credit card number
			<input type="text" name="" placeholder="Enter card number"/>
				
				Exp month
				<input type="text" name="" placeholder="Enter Month"/>
				<div id="zip">
					<label>
						Exp year
						<select>
							<option>Choose Year..</option>
							<option>2022</option>
							<option>2023</option>
							<option>2024</option>
							<option>2025</option>
						</select>
					</label>
						<label>
						CVV
						<input type="number" name="" placeholder="CVV"/>
					</label>
				</div>
			</form>
			<input type="submit" name="" value="Proceed to Checkout"/>
		</div>
	</div>
</header>
        </div>
    );
};

export default PaymentPage;