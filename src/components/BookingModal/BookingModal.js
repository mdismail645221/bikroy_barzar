import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({ bookProducts }) => {
    const [phoneNumber, setPhoneNumber] = useState({});
    const [metingLocation, setMettingLocation] = useState({})
    const {user}= useContext(AuthContext)
    console.log('bookProducts', bookProducts)
    const { name, originalPrice } = bookProducts;


// Products the booking  info into the save database 
    const productBooking = () => {
        const booking = {
            userName: user?.displayName,
            email: user?.email,
            productsName: name,
            originalPrice,
            phoneNumber,
            metingLocation
        }
        console.log(booking)
    }





    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="BookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className='form-control flex flex-col'>
                        <label htmlFor="user"><strong>User Name:</strong></label>
                        <input defaultValue={user?.displayName} readOnly className="input input-bordered w-full" type="text" />
                    </div>
                    {/* email address */}
                    <div className='form-control flex flex-col mt-4'>
                        <label htmlFor="user"><strong>Email Address:</strong></label>
                        <input defaultValue={user?.email} readOnly className="input input-bordered w-full" type="text" />
                    </div>
                    {/* itmes Name */}
                    <div className='form-control flex mt-4'>
                        <label htmlFor="user"><strong>Items Name:</strong></label>
                        <input defaultValue={bookProducts?.name} readOnly className="input input-bordered" type="text" />
                    </div>
                    {/* itmes Name */}
                    <div className='form-control flex mt-4'>
                        <label htmlFor="user"><strong>Price:</strong></label>
                        <input defaultValue={bookProducts?.originalPrice} readOnly className="input input-bordered" type="text" />
                    </div>
                    {/* Phone Number */}
                    <div className='form-control flex mt-4'>
                        <label htmlFor="user"><strong>Phone Number:</strong></label>
                        <input onChange={(e) => setPhoneNumber(e.target.value)} placeholder="+880" className="input input-bordered" type="number" />
                    </div>
                    {/* Phone Number */}
                    <div className='form-control flex mt-4'>
                        <label htmlFor="user"><strong>Metting Location:</strong></label>
                        <input onChange={(e) => setMettingLocation(e.target.value)} placeholder="here place" className="input input-bordered" type="text" />
                    </div>
                    {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
                    <div className="modal-action">
                        <label onClick={productBooking}  htmlFor="BookingModal" className="btn">Book Now!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;