import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AllEmployee from "../Pages/AllEmployee";
import AssignTask from "../Pages/AssignTask";
import Tasks from "../Pages/Tasks";
import AddEmployee from "../Pages/AddEmployee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Tasks></Tasks>
            },
            {
                path: '/all-employee',
                element: <AllEmployee></AllEmployee>
            },
            {
                path: '/assign-task',
                element: <AssignTask></AssignTask>
            },
            {
                path: '/tasks',
                element: <Tasks></Tasks>
            },
            {
                path: '/add-employee',
                element: <AddEmployee></AddEmployee>
            }
        ]
    }
])

export default router;