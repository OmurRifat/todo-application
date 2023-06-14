/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditTask from './EditTask';

const Task = ({ task }) => {
    const { name, id, taskName, taskDescription } = task;
    let [isOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true)
    }
    return (
        <div>
            <div className="card w-96 h-56 bg-tertiary bg-opacity-70 p-2 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{ taskName }</h2>
                    <p>{ taskDescription }</p>
                    <div className="card-actions justify-end">
                        <button
                            type="button"
                            onClick={ openModal }
                            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                            Edit Task
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