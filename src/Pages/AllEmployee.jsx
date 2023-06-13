// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Employee from './Employee';

const AllEmployee = () => {
    const { allEmployee } = useContext(AuthContext);
    return (
        <div className=' grid grid-cols-2 gap-4 me-4'>
            {
                allEmployee.map(employee => <Employee
                    key={ employee.id }
                    employee={ employee }></Employee>)
            }
        </div>
    );
};

export default AllEmployee;