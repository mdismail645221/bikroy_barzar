import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { useAdmin } from '../hooks/useAdmin';
import { useBuyers } from '../hooks/useBuyers';
import Navbar from '../shared/Navbar/Navbar';
import '../layout/DashboardLayout.css'

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const { isAdmin} = useAdmin(user?.email)
    console.log("isAdmin", isAdmin)


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile mt-[78px] overflow-visible">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side z-0">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay z-0"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-[#023430] z-0" style={{borderRight: "2px solid #fff", borderTop: '2px solid #fff'}}>
                        {/* <!-- Sidebar content here --> */}
                        {isAdmin === "admin" &&
                            <>
                            <li><Link className='text-white font-medium' to='/dashboard/allusers'>All Users</Link></li>
                            <li><Link className='text-white font-medium' to='/dashboard/allsellars'>All Sellars</Link></li>
                            </>
                        }
                        {isAdmin === "buyers" &&
                            <>
                            <li><Link to='/dashboard/myorders'>My orders</Link></li>
                            </>
                        }
                        {isAdmin === "Sellers" &&
                            <>
                            <li><Link to='/dashboard/addproducts'>Add A product</Link></li>
                            <li><Link to='/dashboard/myproducts'>My products</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;