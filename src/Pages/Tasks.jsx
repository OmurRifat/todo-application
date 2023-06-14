/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Task from './Task';
import { set } from 'react-hook-form';

const Tasks = () => {
    const [taskData, setTaskData] = useState([])
    useEffect(() => {
        setTaskData(JSON.parse(localStorage.getItem('task')));
    }, [])
    return (
        <div className=' grid grid-cols-2 gap-4'>
            {
                taskData ? taskData?.map(task => <Task
                    key={ task.id }
                    task={ task }></Task>) :
                    <h1 className=' text-center'>No Task Assigned Yet</h1>
            }
        </div>
    );
};

export default Tasks;