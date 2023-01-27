import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../../components/Loading/Loading';
import { AuthContext } from '../../../../context/AuthProvider';

const MyProducts = () => {


    const { user } = useContext(AuthContext);
    // console.log(user)


    const { data: myProducts = [], isLoading } = useQuery({
        queryKey: ["myproducts", user.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/addProducts?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("bb_token")}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    console.log("myProducts", myProducts)


    if (isLoading) {
        return (
            <Loading></Loading>
        )
    }





    return (
        myProducts.length !== 0 ?
            <section className='card-body'>
                <div className='card-body'>
                    <h2 className='text-3xl font-semibold'>My Products</h2>
                </div>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        myProducts.map(pd => {
                            return (
                                <div key={pd._id} className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img src={pd.image} className="h-[300px]" alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{pd?.productName}</h2>
                                        <div className='flex flex-col space-y-2'>
                                            <p><strong>purchaseDate: </strong> {pd?.purchaseDate}</p>
                                            <p><strong>Location: </strong> {pd?.location}</p>
                                            <p><strong>Phone: </strong> {pd?.phone}</p>
                                        </div>
                                        <p>{pd?.description}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">advertise</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            :
            <div className='card-body'>
                <h2 className='text-3xl font-semibold'>NOT Available Products</h2>
            </div>
    );
};

export default MyProducts;