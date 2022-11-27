import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({order}) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={order?.image} className="h-[300px]" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{order?.productsName}</h2>
                <p className='text-blue-600 font-semibold text-xl'>Price: {order?.resalePrice}</p>
                <div className="card-actions justify-end">
                    <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-primary">Pay</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Order;