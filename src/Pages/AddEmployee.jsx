/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Input from './components/Input';

const AddEmployee = () => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = (data) => {
        const previousEmployee = localStorage.getItem('employee');
        let updatedEmployee = [];
        if (previousEmployee === null) {
            data.employeeId = 0;
            data.photoUrl = "https://www.w3schools.com/howto/img_avatar.png";
            localStorage.setItem('employee', JSON.stringify([data]));
            toast.success("Employee Added Successfully");
            reset();
        }
        else {
            let previousData = JSON.parse(previousEmployee);
            data.employeeId = previousData.length;
            data.photoUrl = "https://www.w3schools.com/howto/img_avatar.png";
            updatedEmployee = [...previousData, data];
            localStorage.setItem('employee', JSON.stringify(updatedEmployee));
            toast.success("Employee Added Successfully");
            reset();
        }
    };
    return (
        <div style={ { width: "450px" } } className=''>
            <div className=' border border-secondary rounded-xl bg-tertiary bg-opacity-40 text-center'>
                <form onSubmit={ handleSubmit(onSubmit) } className=''>
                    <Input filedName='Employee Name' register={ register } registeredName="employeeName" type='text' placeholder='Please enter an employee name' />
                    <Input filedName='Designation' register={ register } registeredName="employeeDesignation" type='text' placeholder='What is the designation?' />
                    <Input filedName='Email' register={ register } registeredName="employeeEmail" type='text' placeholder='Please enter the email adress' />
                    <Input filedName='Contact Number' register={ register } registeredName="employeeNumber" type='number' placeholder='Please enter the contact number' />
                    <button className=' btn btn-primary mb-10' type='submit'>Add Employee</button>
                </form>
            </div>
        </div>
    );
};

export default AddEmployee;