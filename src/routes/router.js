import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CategoryId from "../pages/CategoryId/CategoryId";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
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
                loader: async ({ params }) => await fetch(`http://localhost:5000/products/${params.id}`)
            },
        ]
    }
])


export default router;