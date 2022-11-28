import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../components/BookingModal/BookingModal';
import CtgProduct from './CtgProduct';


const CategoryId = () => {

    const [bookProducts, setBookProducts] = useState({})
    // const [isOpenModal, setIsOpenModal] = useState(true)



    const phones = useLoaderData();

    const handleProduct = (data) => {
        // console.log(data)
        setBookProducts(data)
    }


    return (
        <section className='container mx-auto py-24'>
            <div className='lg:w-[600px] mx-auto pb-10'>
                <h3 className='text-3xl font-semibold py-4 text-center'> {phones?.brand} Phones</h3>
                <p className='text-justify'>Mobile phones at best price only on Bikroy Bazar, the largest marketplace in Bangladesh.</p>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    phones.map(ctg => <CtgProduct
                        handleProduct={handleProduct}
                        key={ctg._id}
                        ctg={ctg}
                    >
                    </CtgProduct>)
                }
            </div>
            {
                bookProducts && 
                <BookingModal
                    bookProducts={bookProducts}
                    setBookProducts={setBookProducts}
                ></BookingModal>
            }
        </section>
    );
};

export default CategoryId;