/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import img from '../assets/notepad.png'
import { toast } from 'react-hot-toast';
import Input from './components/Input';
import TextArea from './components/TextArea';

const AssignTask = () => {
    const [allEmployee, setAllEmployee] = useState([]);
    useEffect(() => {
        setAllEmployee(localStorage.getItem('employee') ? JSON.parse(localStorage.getItem('employee')) : []);
    }, []);
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = (data) => {
        if (data.employeeId == "") data.employeeId = allEmployee[0].employeeId;
        let task = localStorage.getItem('task');
        let updatedData = [];
        if (task === null) {
            data.taskId = Math.floor(Math.random() * 100000000000000000);
            localStorage.setItem('task', JSON.stringify([data]));
            toast.success("Task Assigned Successfully");
            reset();
        }
        else {
            let previousData = JSON.parse(task);
            data.taskId = Math.floor(Math.random() * 100000000000000000);
            updatedData = [...previousData, data];
            localStorage.setItem('task', JSON.stringify(updatedData));
            toast.success("Task Assigned Successfully");
            reset();
        }
    };

    return (
        <div className=''>
            <div className=' grid lg:grid-cols-2 items-center lg:m-20 grid-cols-1 mb-4'>
                <div>
                    <img className='' src={ `${img}` } alt="" />
                </div>
                <div className=' border border-secondary rounded-xl w-full bg-tertiary bg-opacity-40 text-center'>
                    <form onSubmit={ handleSubmit(onSubmit) } className=''>
                        <legend className=' mb-2 mt-4'>Select an employee</legend>
                        <select required { ...register("employeeId") } className="select w-full max-w-sm mb-4">
                            <option defaultValue={ "Please select an employee" } disabled>Please select an employee</option>
                            {
                                allEmployee?.map(employee => <option key={ employee.employeeId } value={ employee.employeeId }>{ employee.employeeEmail }-{ employee.employeeName }</option>)
                            }
                        </select>
                        <Input filedName='Task Name' register={ register } registeredName="taskName" type='text' placeholder='Please enter the task name' />
                        <TextArea filedName='Task Description' register={ register } registeredName="taskDescription" type='text' placeholder='Please enter the task description' />
                        <br />
                        <button className=' btn btn-primary mb-10' type='submit'>Assign</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AssignTask;