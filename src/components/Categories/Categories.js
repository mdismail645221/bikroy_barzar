import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Category from './Category';

const Categories = () => {

    const { data:categories=[], isLoading}= useQuery({
        queryKey: ["categories"],
        queryFn: async()=> {
            const res = await fetch(`${process.env.REACT_APP_HOST_LINK}/categories`);
            const data = await res.json();
            return data;
        }
    })

    console.log({categories})

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='container mx-auto pb-24'>
            <div className='lg:w-[600px] mx-auto pb-10 px-5'>
                <h3 className='text-3xl font-semibold py-4 text-center'>Category</h3>
                <p className='text-justify'>We are a leading supplier of Second Hand Smart Phone. We deal in best quality products. Brand Range - Samsung/Nokia/ Vivo/ MI/ Apple/ Real Me/ Oppo/ Huawei.</p>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(ctg => <Category
                        key={ctg.id}
                        ctg={ctg}
                    >

                    </Category>)
                }
            </div>
        </section>
    );
};

export default Categories;