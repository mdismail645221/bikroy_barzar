import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51M6VbvJL8msLnVWBTUZkuZ9GGtTY6l0YeU3C2I0V9QtU3jhPm9PDQ1rf33s5uTNaFdsrWSeavfV7S9jcsc7bNnEr00uXwq3thQ');

const Payment = () => {

    const paymentInfo = useLoaderData();
    console.log("paymentInfo", paymentInfo)


    return (
        <div className='card w-96 bg-base-100 shadow-xl mx-auto my-[100px]'>
            <div className='card-body'>
                <h2><span className='text-xl font-semibold'> {paymentInfo.productsName}</span></h2>
                <p>Please pay <strong>${paymentInfo?.resalePrice}</strong> For your Product Price</p>
            </div>
            <div className='card-body'>
                <div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm paymentInfo={paymentInfo} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;