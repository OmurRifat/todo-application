// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm } from 'react-hook-form';

const AssignTask = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div>
            <h4>Assign A Task.</h4>
            <form onSubmit={ handleSubmit((data) => console.log(data)) }>
                <input { ...register('firstName') } />
                <input { ...register('lastName', { required: true }) } />
                { errors.lastName && <p>Last name is required.</p> }
                <input { ...register('age', { pattern: /\d+/ }) } />
                { errors.age && <p>Please enter number for age.</p> }
                <input type="submit" />
            </form>
        </div>
    );
};

export default AssignTask;