import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllEmployee from "../Pages/AllEmployee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-employee',
                element: <AllEmployee></AllEmployee>
            }
        ]
    }
])

export default router;