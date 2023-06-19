/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { Dialog, Transition } from '@headlessui/react';
import Input from './components/Input';
import TextArea from './components/TextArea';

const EditTask = ({ setIsOpen, isOpen, task }) => {
    const { employeeId, taskId, taskName, taskDescription } = task;
    const { allEmployee } = useContext(AuthContext);
    const [employeeData, setEmployeeData] = useState([]);
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    function closeModal() {
        setIsOpen(false)
    }
    const onSubmit = (data) => {
        if (data.employeeId == "") data.employeeId = employeeId;
        task.taskName = data.taskName;
        task.taskDescription = data.taskDescription;
        task.employeeId = data.employeeId;
        console.log(task);
        //update the task in localsotrage
        let localData = JSON.parse(localStorage.getItem('task'));
        let index = localData.findIndex(task => task.taskId == taskId);
        localData[index] = task;
        localStorage.setItem('task', JSON.stringify(localData));
        toast.success("Task Updated Successfully");
        reset();
        closeModal();
        // data.id = id;
        // //get the same id data from local storage
        // let localData = JSON.parse(localStorage.getItem('task'));
        // //filter the data & store the index number to update in the same index
        // let index = localData.findIndex(task => task.id === id);
        // //update the data
        // localData[index] = data;
        // //set the updated data to local storage
        // localStorage.setItem('task', JSON.stringify(localData));
        // toast.success("Task Updated Successfully");
        // reset();
        // closeModal();
        // window.location.reload();
    };
    useEffect(() => {
        const employeeData = JSON.parse(localStorage.getItem('employee'));
        const employee = employeeData.find(employee => employee.employeeId == employeeId);
        setEmployeeData(employee);
    }, [employeeId])

    return (
        <div
            className="fixed  flex justify-center  items-center  top-0 left-0 right-0 z-50 inset-0 backdrop-blur-sm bg-opacity-10  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className="relative w-full max-w-md max-h-full text-center">
                <div className="relative bg-tertiary py-8 rounded-xl shadow">
                    <button
                        onClick={ closeModal }
                        type="button"
                        className="absolute top-3  right-2.5 text-[red] bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <form onSubmit={ handleSubmit(onSubmit) } className=''>
                        <legend className=' mb-2 mt-4'>Select an employee</legend>
                        <select required { ...register("employeeId") } className="select w-full max-w-sm mb-4">
                            <option defaultValue={ employeeData.employeeId } >{ employeeData?.employeeName }</option>
                            {
                                allEmployee?.map(employee => <option key={ employee.employeeId } value={ employee.employeeId }>{ employee.employeeEmail }-{ employee.employeeName }</option>)
                            }
                        </select>
                        <Input filedName='Task Name' register={ register } defaultValue={ `${taskName}` } registeredName="taskName" type='text' placeholder='Please re-enter the task name' />
                        <TextArea filedName='Task Description' register={ register } defaultValue={ `${taskDescription}` } registeredName="taskDescription" type='text' placeholder='Please re-enter the task description' />
                        {/* <legend className=' mb-2'>Task Description</legend>
                        <textarea required { ...register("taskDescription") } className="textarea w-full max-w-sm mb-4" defaultValue={ `${taskDescription}` }></textarea> */}
                        <br />
                        <button className=' btn btn-primary mb-10' type='submit'>Assign</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditTask;