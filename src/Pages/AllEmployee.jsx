// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Employee from './Employee';

const AllEmployee = () => {
    const [allEmployee, setAllEmployee] = useState([]);

    useEffect(() => {
        fetch('employeData.json')
            .then(res => res.json())
            .then(data => setAllEmployee(data))
    }, [])
    return (
        <div>
            {
                allEmployee.map(employee => <Employee
                    key={ employee.id }
                    employee={ employee }></Employee>)
            }
        </div>
    );
};

export default AllEmployee;