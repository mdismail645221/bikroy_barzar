import React from 'react';

const CtgProduct = ({ ctg, handleProduct }) => {



    // console.log("ctg", ctg)
    return (
        <div className="card bg-base-100 shadow-xl py-3">
            <figure><img src={ctg?.image} className="h-[300px]" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{ctg?.brand}{ctg?.name} </h2>
                <div className='flex flex-wrap justify-between gap-4'>
                    <p><strong>location:</strong> { ctg?.location}</p>
                    <p><strong>Uses:</strong> {ctg?.yearsOfUse}</p>
                </div>
                <div className='flex flex-wrap justify-between gap-4'>
                    <p><strong>Resale Price:</strong> {ctg?.resalePrice}</p>
                    <p><strong>Original Price:</strong> {ctg?.originalPrice}</p>
                </div>
                <div className='flex flex-wrap justify-center'>
                    <span><strong>Seller Name:</strong> {ctg?.sellerName}</span>
                    {/* <p><strong>Original Price:</strong> {ctg?.originalPrice}</p> */}
                </div>
                <div>
                    <label onClick={() => handleProduct(ctg)} htmlFor="BookingModal" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default CtgProduct;