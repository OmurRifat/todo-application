/* eslint-disable no-unused-vars */
import React from 'react';

const TextArea = (props) => {
    // eslint-disable-next-line react/prop-types
    const { filedName, register, registeredName, type, placeholder, defaultValue } = props;
    return (
        <>
            <legend className=' mb-2'>{ filedName }</legend>
            <textarea defaultValue={ defaultValue ? defaultValue : '' } required { ...register(`${registeredName}`) } type={ type } placeholder={ placeholder } className="textarea w-full max-w-sm mb-4" />
        </>
    );
};

export default TextArea;