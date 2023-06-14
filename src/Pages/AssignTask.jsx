/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useForm } from 'react-hook-form';
import img from '../assets/notepad.png'
import { toast } from 'react-hot-toast';

const AssignTask = () => {
    const { allEmployee } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = (data) => {
        let task = localStorage.getItem('task');
        let updatedData = [];
        if (task === null) {
            localStorage.setItem('task', JSON.stringify([data]));
            toast.success("Task Assigned Successfully");
            reset();
        }
        else {
            let previousData = JSON.parse(task);
            updatedData = [...previousData, data];
            localStorage.setItem('task', JSON.stringify(updatedData));
            toast.success("Task Assigned Successfully");
            reset();
        }
    };

    return (
        <div className=''>
            <div className=' grid grid-cols-2 items-center m-20'>
                <div>
                    <img className='' src={ `${img}` } alt="" />
                </div>
                <div className=' border border-secondary rounded-xl w-full bg-tertiary bg-opacity-40'>
                    <form onSubmit={ handleSubmit(onSubmit) } className=''>
                        <legend className=' mb-2 mt-4'>Select an employee</legend>
                        <select required { ...register("name") } className="select w-full max-w-sm mb-4">
                            <option defaultValue={ "Please select an employee" } disabled >Please select an employee</option>
                            {
                                allEmployee?.map(employee => <option key={ employee.id } value={ employee.name }>{ employee.email }-{ employee.name }</option>)
                            }
                        </select>
                        <legend className=' mb-2'>Task ID</legend>
                        <input required { ...register("id") } type="text" placeholder="Give the ID of your task" className="input w-full max-w-sm mb-4" />
                        <legend className=' mb-2'>Task Name</legend>
                        <input required { ...register("taskName") } type="text" placeholder="Give a title of your task" className="input w-full max-w-sm mb-4" />
                        <legend className=' mb-2'>Task Description</legend>
                        <textarea required { ...register("taskDescription") } className="textarea w-full max-w-sm mb-4" placeholder="Task Description"></textarea>
                        <br />
                        <button className=' btn btn-primary mb-10' type='submit'>Assign</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AssignTask;