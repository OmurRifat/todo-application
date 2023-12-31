/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
import DetailsModal from './DetailsModal';

const Employee = ({ employee }) => {
    const modalRef = useRef();
    const { employeeName, photoUrl, employeeDesignation } = employee;

    const handleOpenModal = () => {
        modalRef.current.openModal();
    }
    return (
        <div className="card card-side bg-tertiary bg-opacity-70 shadow-xl p-2">
            <figure><img className=' rounded-full w-36' src={ `${photoUrl}` } alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{ employeeName }</h2>
                <p>{ employeeDesignation }</p>
                <div className="card-actions justify-end">
                    <button
                        type="button"
                        onClick={ handleOpenModal }
                        className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                        View Details
                    </button>
                    { <DetailsModal
                        employee={ employee }
                        ref={ modalRef }
                    ></DetailsModal>
                    }
                </div>
            </div>
        </div>
    );
};

export default Employee;