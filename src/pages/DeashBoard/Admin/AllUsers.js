import React from 'react';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../../components/Loading/Loading';
import toast from 'react-hot-toast';

const AllUsers = () => {

    const { data: everyUsers = [], isLoading, refetch } = useQuery({
        queryKey: ["allUsers",],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_HOST_LINK}/allusers`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("BB_TOKEN")}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    console.log({everyUsers});


    if (isLoading) {
        return (
            <Loading></Loading>
        )
    }



    // handleMakeAdmin
    const handleMakeAdmin = (id) => {
        console.log(id);
        fetch(`${process.env.REACT_APP_HOST_LINK}/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem("BB_TOKEN")}`
            }
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.modifiedCount){
                toast.success('ADMIN USER UPDATED GOOD JOB')
                refetch()
            }
        })
    }


    const deleteUser = (user) => {
        console.log({user})
        if(window.confirm("Are you sure? deleted")){
            fetch(`${process.env.REACT_APP_HOST_LINK}/users/${user._id}`, {
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data => {
                if(data.acknowledged > 0){
                    // console.log(data)
                    toast.success(`Successfully delete ${user?.email}`)
                    refetch()
                }
            })
        }
        
    }




    return (
        <section>
            <div>
                <h3 className='text-xl lg:text-2xl font-semibold my-6 text-center'>All Users </h3>
            </div>
            {/* table  */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>permission/ Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            everyUsers.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role}</td>
                                <td className='flex justify-center space-x-2'>
                                    {user.role !== "admin" && <button onClick={()=> handleMakeAdmin(user?._id)}  className='btn btn-sm btn-success'>Admin</button>}
                                    <button onClick={() => deleteUser(user)} className='btn btn-warning btn-sm'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUsers;