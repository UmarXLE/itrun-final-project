import React from 'react';
import {PaymentElement} from '@stripe/react-stripe-js';


const CheckoutForm = () => {
    return (
        <div>
                    <h2>checkout form</h2>
                    <form>
            <PaymentElement />
            <button>Submit</button>
            </form>
        </div>
    );
};

export default CheckoutForm;