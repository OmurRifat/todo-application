/* eslint-disable no-unused-vars */
import React from 'react';

const Input = (props) => {
    // eslint-disable-next-line react/prop-types
    const { filedName, register, registeredName, type, placeholder, defaultValue } = props;
    return (
        <>
            <legend className=' mb-2'>{ filedName }</legend>
            <input defaultValue={ defaultValue ? defaultValue : '' } required { ...register(`${registeredName}`) } type={ type } placeholder={ placeholder } className="input w-full max-w-sm mb-4" />
        </>
    );
};

export default Input;