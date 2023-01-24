import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import CategoryId from "../pages/CategoryId/CategoryId";
import AllSellars from "../pages/DeashBoard/Admin/AllSellars";
import AllUsers from "../pages/DeashBoard/Admin/AllUsers";
import MyOrders from "../pages/DeashBoard/Buyer/MyOrders";
import DeashBoard from "../pages/DeashBoard/DeashBoard";
import AddProduct from "../pages/DeashBoard/Sellers/AddProduct/AddProduct";
import MyProducts from "../pages/DeashBoard/Sellers/MyProducts/MyProducts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import Payment from "../pages/Payment/Payment";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CategoryId></CategoryId></PrivateRoute>,
                loader: async ({ params }) => await fetch(`https://bikroy-bazar.vercel.app/products/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            }
        ]
    }, 
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DeashBoard></DeashBoard>
            },
            {
                path: '/dashboard/addproducts',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allsellars',
                element: <AllSellars></AllSellars>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: async ({ params }) => await fetch(`${process.env.REACT_APP_WEB_LINK}/bookings/payment/${params.id}`)
            },
        ]
    }
])


export default router;