import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { useAdmin } from '../hooks/useAdmin';
import { useBuyers } from '../hooks/useBuyers';
import Navbar from '../shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const { isAdmin} = useAdmin(user?.email)
    console.log("isAdmin", isAdmin)


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-gray-200" style={{borderRight: "2px solid red"}}>
                        {/* <!-- Sidebar content here --> */}
                        {isAdmin === "admin" &&
                            <>
                            <li><Link to='/dashboard/allusers'>All Users</Link></li>
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