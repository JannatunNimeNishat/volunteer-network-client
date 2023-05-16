import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AdminLayout from "../layout/AdminLayout";
import AdminHome from "../pages/Admin/AdminHome/AdminHome";
import VolunteerList from "../pages/Admin/VolunteerList/VolunteerList";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]

    },
    {
        path:'/admin',
        element:<AdminLayout></AdminLayout>,
        children:[
            {
                path:'/admin',
                element:<AdminHome></AdminHome>
            },
            {
                path:'volunteer',
                element:<VolunteerList></VolunteerList>
            }
        ]
    }
])


export default router;