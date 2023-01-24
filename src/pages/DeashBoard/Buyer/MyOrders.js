import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../context/AuthProvider';
import Order from './Order';

const MyOrders = () => {

    const {user} = useContext(AuthContext)

    const {data:myorders, isLoading} = useQuery({
        queryKey: ["myorders", user?.email],
        queryFn: async()=> {
            const res = await fetch(`https://bikroy-bazar.vercel.app/bookings?email=${user?.email}`);
            const data= await res.json();
            return data;
        }
    })


    if(isLoading){
        return <Loading></Loading>
    }

    // console.log("myorders", myorders)


    return (
       <section>
            <div>
                <h3 className='text-2xl font-semibold'>My orders</h3>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    myorders?.map(order => <Order 
                        key={order?._id}
                        order={order}
                         ></Order>)
                }
           </div>
       </section>
    );
};

export default MyOrders;