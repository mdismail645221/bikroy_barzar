import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51M6VbvJL8msLnVWBTUZkuZ9GGtTY6l0YeU3C2I0V9QtU3jhPm9PDQ1rf33s5uTNaFdsrWSeavfV7S9jcsc7bNnEr00uXwq3thQ');

const Payment = () => {
    return (
        <div>
            <h2>Payment for</h2>
            <p>Please pay <strong>$</strong>For your Product Price</p>
            <div className='card'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;