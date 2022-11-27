import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrders = () => {

    const {user} = useContext(AuthContext)

    const {data:myorders, isLoading} = useQuery({
        queryKey: ["myorders", user?.email],
        queryFn: async()=> {
            const res = await fetch(`${process.env.REACT_APP_WEB_LINK}/bookings?email=${user?.email}`);
            const data= await res.json();
            return data;
        }
    })


    if(isLoading){
        return <Loading></Loading>
    }

    console.log("myorders", myorders)


    return (
       <section>
            <div>
                <h3 className='text-2xl font-semibold'>My orders</h3>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    myorders?.map(order => <div key={order?._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={order?.image} className="h-[300px]" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{order?.productsName}</h2>
                            <p className='text-blue-600 font-semibold text-xl'>Price: {order?.resalePrice}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Pay</button>
                            </div>
                        </div>
                    </div>)
                }
           </div>
       </section>
    );
};

export default MyOrders;