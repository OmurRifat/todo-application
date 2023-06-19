/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditTask from './EditTask';

const Task = ({ task }) => {
    const { name, id, taskName, taskDescription, employeeId } = task;
    let [isOpen, setIsOpen] = useState(false)
    const [employeeData, setEmployeeData] = useState([]);
    function openModal() {
        setIsOpen(true)
    }
    function deleteTask() {
        if (window.confirm('Are you sure you want to delete this task?')) {
            let taskData = JSON.parse(localStorage.getItem('task'));
            let newTaskData = taskData.filter(task => task.id !== id);
            localStorage.setItem('task', JSON.stringify(newTaskData));
            window.location.reload();
        }
    }
    useEffect(() => {
        const employeeData = JSON.parse(localStorage.getItem('employee'));
        const employee = employeeData.find(employee => employee.employeeId == employeeId);
        setEmployeeData(employee);
    }, [employeeId])
    return (
        <div>
            <div className="card w-96 h-72 bg-tertiary bg-opacity-70 p-2 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{ taskName }</h2>
                    <h6 className=' font-thin'>Assigned to: <span className=' font-bold'>{ employeeData?.employeeName }</span></h6>
                    <h6 className=' font-thin'>Designation: <span className=' font-bold'>{ employeeData?.employeeDesignation }</span></h6>
                    <p className=' font-light'> <span className=' font-bold'>Task Description: </span>{ taskDescription }</p>
                    <div className="card-actions justify-end">
                        <button
                            type="button"
                            onClick={ openModal }
                            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                            Edit Task
                        </button>
                        <button
                            type="button"
                            onClick={ deleteTask }
                            className="rounded-md bg-rose-600 bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                            Delete Task
                        </button>
                        {
                            isOpen && <EditTask
                                task={ task }
                                setIsOpen={ setIsOpen }
                                isOpen={ isOpen }
                            ></EditTask>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;