import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';


const CheckoutForm = ({ paymentInfo }) => {
    const [loading, setLoading] = useState(false)
    const [paymentError, setPaymentError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [transactionId, setTransactionId] = useState(null)
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const { userName, email, resalePrice, _id } = paymentInfo;

    // console.log("paymentinfo" , paymentInfo)



    useEffect(() => {
        setLoading(true)
        // Create PaymentIntent as soon as the page loads
        fetch(`${process.env.REACT_APP_HOST_LINK}/create-payment-intent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("BB_TOKEN")}`
            },
            body: JSON.stringify(paymentInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
                setLoading(false)
            });
    }, [paymentInfo]);




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
        setSuccess(null)
        setSuccess("")
        setTransactionId()
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

        if(confirmError){
            setPaymentError(confirmError.message)
        }
        // console.log(paymentIntent)

        if(paymentIntent.status === "succeeded"){
            // payment info save into database
            const payment = {
                price: resalePrice, 
                email, 
                bookingId: _id,
                transactionId : paymentIntent.id,
            }
            // console.log("payment", payment)

            fetch(`${process.env.REACT_APP_HOST_LINK}/payments`, {
                method: 'POST',
                headers: {
                    'content-type': "application/json",
                    authorization: `Bearer ${localStorage.getItem("BB_TOKEN")}`
                },
                body: JSON.stringify(payment)
            })
            .then(res=> res.json())
            .then(data=> {
                console.log("data", data)
                if(data.acknowledged){
                    setSuccess("Congratulations ! Your Payment Completed")
                    setTransactionId(paymentIntent.id)
                }
            })

        }


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
            {paymentError && <p className='text-red-500 md:text-lg'>{paymentError}</p>}
            {
                success && 
                <div className='flex flex-wrap flex-col'>
                    <p className='text-green-500 md:text-lg'>{success}</p>
                    <p><span className='underline'>Your TransactionId </span> <strong>{transactionId}</strong></p>
                </div>
            }
        </section>
    );
};

export default CheckoutForm;