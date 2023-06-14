// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
    const [activeLink, setActiveLink] = useState('tasks');
    const handleLinkClick = (link) => {
        setActiveLink(link);
    }

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
                <ul className="menu p-4 w-80 h-full bg-secondary text-base-content text-center">
                    {/* Sidebar content here */ }
                    <Link to="/tasks" className={ activeLink === "tasks" ? "active bg-slate-400 rounded-md drop-shadow shadow-inner text-base font-bold mb-2 py-3 text-blue-800" : 'py-3 bg-tertiary rounded-md mb-2' } onClick={ () => handleLinkClick('tasks') }>Tasks</Link>
                    <Link to="/assign-task" className={ activeLink === "assign-task" ? "active bg-slate-400 rounded-md drop-shadow shadow-inner text-base font-bold mb-2 py-3 text-blue-800" : 'py-3 bg-tertiary rounded-md mb-2' } onClick={ () => handleLinkClick('assign-task') }>Assign Task</Link>
                    <Link to="/all-employee" className={ activeLink === "all-employee" ? "active bg-slate-400 rounded-md drop-shadow shadow-inner text-base font-bold mb-2 py-3 text-blue-800" : 'py-3 bg-tertiary rounded-md mb-2' } onClick={ () => handleLinkClick('all-employee') }>All Employee</Link>
                </ul>
            </div>
        </div>
    );
};

export default MainLayout;