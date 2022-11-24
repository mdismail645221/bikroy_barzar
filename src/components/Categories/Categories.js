import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=> {
        fetch(`category.json`)
        .then(res=> res.json())
        .then(data=> {
            setCategories(data)
        })
    },[])
    return (
        <section className='container mx-auto pb-24'>
            <div className='lg:w-[600px] mx-auto pb-10'>
                <h3 className='text-3xl font-semibold py-4 text-center'>Category</h3>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni perferendis corporis quidem doloremque necessitatibus optio dolorum! Doloremque, nobis fugit.</p>
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