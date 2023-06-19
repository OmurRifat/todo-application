// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Employee from './Employee';

const AllEmployee = () => {
    const [allEmployee, setAllEmployee] = useState([]);
    useEffect(() => {
        setAllEmployee(JSON.parse(localStorage.getItem('employee')));
    }, []);
    return (
        <div className=' grid lg:grid-cols-2 gap-4 lg:me-4 grid-cols-1 me-6'>
            {
                allEmployee?.length > 0 ? allEmployee?.map(employee => <Employee
                    key={ employee.employeeId }
                    employee={ employee }></Employee>)
                    :
                    <h1 className='text-center text-2xl text-red-500'>No Employee Found</h1>
            }
        </div>
    );
};

export default AllEmployee;