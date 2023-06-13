// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
                {/* Page content here */ }
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-secondary text-base-content">
                    {/* Sidebar content here */ }
                    <li className=' bg-tertiary rounded-md drop-shadow shadow-inner text-base font-bold'><a>Task List</a></li>
                    <li className=' bg-tertiary rounded-md drop-shadow shadow-inner text-base font-bold my-2'><a>All Employee</a></li>
                </ul>
            </div>
            {/* Footer */ }
        </div>
    );
};

export default MainLayout;