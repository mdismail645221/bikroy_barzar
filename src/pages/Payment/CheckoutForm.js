import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';


const CheckoutForm = ({ paymentInfo }) => {
    const [loading, setLoading] = useState(false)
    const [clientSecret, setClientSecret] = useState("");
    const [paymentError, setPaymentError] = useState(null)
    const stripe = useStripe();
    const elements = useElements();
    const { resalePrice, userName, email } = paymentInfo;



    useEffect(() => {
        setLoading(true)
        // Create PaymentIntent as soon as the page loads
        fetch(`${process.env.REACT_APP_WEB_LINK}/create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("bb_token")}`
            },
            body: JSON.stringify(paymentInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
                setLoading(false)
            });
    }, [resalePrice]);




    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log(error)
            setPaymentError(error.message)
        } else {
            setPaymentError(null)
        }

        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );


    }

    if(confirmError){
        setPaymentError(confirmError.message)
    }


    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-primary my-8' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {paymentError && <p>{paymentError}</p>}
        </section>
    );
};

export default CheckoutForm;