// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-full flex flex-col items-center my-4 mx-8">
                {/* Page content here */ }
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-secondary text-base-content">
                    {/* Sidebar content here */ }
                    <Link to="/" className=' bg-tertiary rounded-md drop-shadow shadow-inner text-base font-bold mb-2 py-3'>Tasks</Link>
                    <Link to="/assign-task" className=' bg-tertiary rounded-md drop-shadow shadow-inner text-base font-bold mb-2 py-3'>Assign Task</Link>
                    <Link to="/all-employee" className=' bg-tertiary rounded-md drop-shadow shadow-inner text-base font-bold mb-2 py-3'>All Employee</Link>
                </ul>
            </div>
        </div>
    );
};

export default MainLayout;