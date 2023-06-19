/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Task from './Task';

const Tasks = () => {
    const [taskData, setTaskData] = useState([])
    useEffect(() => {
        setTaskData(JSON.parse(localStorage.getItem('task')));
    }, [])
    return (
        <div className=' grid lg:grid-cols-3 lg:gap-4 lg:me-4 grid-cols-1 gap-2 '>
            {
                taskData ? taskData?.map(task => <Task
                    key={ task.taskId }
                    setTaskData={ setTaskData }
                    task={ task }></Task>) :
                    <h1 className=' text-center'>No Task Assigned Yet</h1>
            }
        </div>
    );
};

export default Tasks;